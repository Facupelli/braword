import { reatomForm } from "@reatom/core";

export const addWordForm = reatomForm(
  {
    word: {
      id: "",
      english: "",
      spanish: "",
      meanings: [],
      addedAt: "",
    },
    sentence: "",
  },
  {
    onSubmit: () => {
      return;
    },
    validateOnBlur: true,

    name: "addWordForm",
  }
);
