#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';

const actions: Record<string, string> = {
  start: 'start-services.ps1',
  stop: 'stop-services.ps1',
  open: 'open-dashboard.ps1',
  doctor: 'doctor.ps1',
  reset: 'reset.ps1',
};

const cmd = process.argv[2];
if (!cmd || !(cmd in actions)) {
  console.log('Usage: aiox <start|stop|open|doctor|reset>');
  process.exit(1);
}
const script = path.join(__dirname, '..', 'scripts', actions[cmd]);
const ps = spawn('powershell', ['-ExecutionPolicy', 'Bypass', '-File', script, ...process.argv.slice(3)], {
  stdio: 'inherit',
});
ps.on('exit', (code) => process.exit(code ?? 0));
