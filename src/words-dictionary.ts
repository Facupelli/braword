import { atom, withLocalStorage } from "@reatom/core";
import type { Word } from "./types/word";

export const wordsDictionary = atom<Word[]>([], "wordsDict").extend(
  withLocalStorage("words-dictionary")
);
