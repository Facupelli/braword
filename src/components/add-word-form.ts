import { reatomForm } from "@reatom/core";
import { api } from "../api";
import type { Word } from "../types/word";
import { wordsDictionary } from "./word-form";

export const addWordForm = reatomForm(
  {
    word: "",
  },
  {
    onSubmit: async (values) => {
      const result = await api.getMeaning(values.word);

      if (!result) {
        return "Word not found";
      }

      const newWord: Word = {
        id: crypto.randomUUID(),
        english: values.word,
        spanish: "translate me",
        sentence: "",
        addedAt: new Date().toISOString(),
        meanings: result.meanings,
      };

      wordsDictionary.set((prev) => [newWord, ...prev]);

      return result;
    },
    validateOnBlur: true,

    name: "addWordForm",
  }
);
