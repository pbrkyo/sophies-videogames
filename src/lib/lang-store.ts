"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { t, type Lang, type TranslationKey } from "./i18n";

interface LangStore {
  lang: Lang;
  toggle: () => void;
  tr: (key: TranslationKey) => string;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set, get) => ({
      lang: "es",
      toggle: () => set((s) => ({ lang: s.lang === "es" ? "en" : "es" })),
      tr: (key: TranslationKey) => t[get().lang][key],
    }),
    { name: "sophies-lang" }
  )
);
