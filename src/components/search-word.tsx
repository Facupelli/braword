import { atom, computed } from "@reatom/core";
import { reatomComponent } from "@reatom/react";
import type { Word } from "../types/word";
import { wordsDictionary } from "./word-form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const searchQuery = atom("", "searchQuery");

export const wordsMap = computed(() => {
  const words = wordsDictionary();
  const map = new Map<string, Word>();
  words.forEach((word) => {
    map.set(word.english.toLowerCase(), word);
  });
  return map;
}, "wordsMap");

export const filteredWords = computed(() => {
  const words = wordsDictionary();
  const query = searchQuery().toLowerCase().trim();

  if (!query) {
    return words;
  }

  const exact = words.filter((w) => w.english.toLowerCase() === query);

  const partial = words.filter(
    (w) =>
      w.english.toLowerCase().includes(query) &&
      w.english.toLowerCase() !== query
  );

  return [...exact, ...partial];
}, "filteredWords");

export const SearchInput = reatomComponent(() => {
  const query = searchQuery();
  const resultsCount = filteredWords().length;
  // const totalCount = wordsDictionary().length;

  return (
    <div className="space-y-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search your dictionary..."
          value={query}
          onChange={(e) => searchQuery.set(e.currentTarget.value)}
          className="pl-10"
        />
      </div>
      {query && (
        <p className="text-sm text-muted-foreground">
          {resultsCount} {resultsCount === 1 ? "word" : "words"} in your
          dictionary
        </p>
      )}
    </div>
  );
});
