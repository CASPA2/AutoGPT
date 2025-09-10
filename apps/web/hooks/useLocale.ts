"use client";

import { useEffect, useState } from "react";

export function useLocale(initial = "en") {
  const [locale, setLocaleState] = useState(initial);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (stored) setLocaleState(stored);
  }, []);

  const setLocale = (loc: string) => {
    setLocaleState(loc);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", loc);
    }
  };

  return { locale, setLocale };
}
