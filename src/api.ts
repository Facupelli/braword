import type { DictionaryApiResult } from "./types/dictionary-api";

const dictionaryapiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const api = {
  async getMeaning(word: string) {
    try {
      const result = await fetch(`${dictionaryapiUrl}${word}`);
      const data: DictionaryApiResult[] = await result.json();

      if (data.length === 0) {
        return null;
      }

      return data[0];
    } catch (error) {
      console.error("[DICTIONARY API] ERROR:", error);
      return null;
    }
  },
};
