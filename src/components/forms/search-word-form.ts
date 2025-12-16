import { api } from "@/api";
import type { Word } from "@/types/word";
import { reatomForm } from "@reatom/core";

export const searchWordForm = reatomForm(
  {
    word: "",
  },
  {
    onSubmit: async (values) => {
      const result = await api.getMeaning(values.word);

      if (!result) {
        return null;
      }

      const newWord: Word = {
        id: crypto.randomUUID(),
        english: values.word,
        spanish: "translate me",
        sentence: "",
        addedAt: new Date().toISOString(),
        meanings: result.meanings,
      };

      return newWord;
    },
    validateOnBlur: true,

    name: "searchWordForm",
  }
);
