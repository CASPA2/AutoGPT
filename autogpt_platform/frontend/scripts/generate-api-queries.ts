#!/usr/bin/env node

import { getAgptServerBaseUrl } from "@/lib/env-config";
import { execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";
import * as os from "os";

function fetchOpenApiSpec(): void {
  const args = process.argv.slice(2);
  const forceFlag = args.includes("--force");
  const offlineFlag = args.includes("--offline");

  const baseUrl = getAgptServerBaseUrl();
  const openApiUrl = `${baseUrl}/openapi.json`;
  const outputPath = path.join(
    __dirname,
    "..",
    "src",
    "app",
    "api",
    "openapi.json",
  );

  console.log(`Output path: ${outputPath}`);
  console.log(`Force flag: ${forceFlag}`);
  console.log(`Offline flag: ${offlineFlag}`);

  // Check if local file exists
  const localFileExists = fs.existsSync(outputPath);

  if (offlineFlag) {
    console.log("⚠️ Offline mode enabled, skipping OpenAPI fetch");
    if (localFileExists) {
      console.log("✅ Using existing local OpenAPI spec file");
    } else {
      console.warn(
        "⚠️ No local OpenAPI spec found; generation skipped in offline mode",
      );
    }
    return;
  }

  if (!forceFlag && localFileExists) {
    console.log("✅ Using existing local OpenAPI spec file");
    console.log("💡 Use --force flag to fetch from server");
    return;
  }

  if (!localFileExists) {
    console.log("📄 No local OpenAPI spec found, fetching from server...");
  } else {
    console.log(
      "🔄 Force flag detected, fetching fresh OpenAPI spec from server...",
    );
  }

  console.log(`Fetching OpenAPI spec from: ${openApiUrl}`);

  // Write to a temporary file first to avoid clearing the real file on failure
  const tmpOutputPath = path.join(
    os.tmpdir(),
    `openapi-fetch-${Date.now()}.json`,
  );

  try {
    // Fetch the OpenAPI spec to a temp file
    execSync(`curl "${openApiUrl}" -o "${tmpOutputPath}"`, {
      stdio: "inherit",
    });

    // Format with prettier
    execSync(`prettier --write "${tmpOutputPath}"`, { stdio: "inherit" });

    // Move temp file to final output path
    fs.copyFileSync(tmpOutputPath, outputPath);
    fs.unlinkSync(tmpOutputPath);

    console.log("✅ OpenAPI spec fetched and formatted successfully");
  } catch (error) {
    if (fs.existsSync(tmpOutputPath)) {
      fs.unlinkSync(tmpOutputPath);
    }

    if (localFileExists) {
      console.warn(
        "⚠️ Failed to fetch OpenAPI spec, using existing local file instead",
        error,
      );
    } else {
      console.warn(
        "⚠️ Failed to fetch OpenAPI spec and no local file present; skipping",
        error,
      );
    }
  }
}

if (require.main === module) {
  fetchOpenApiSpec();
}
