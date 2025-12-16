import { atom, computed, withLocalStorage } from "@reatom/core";
import { reatomComponent } from "@reatom/react";
import type { Word } from "../types/word";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { wordsDictionary } from "@/words-dictionary";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const searchQuery = atom("", "searchQuery");

export const sortMode = atom("alphabet", "sortMode").extend(
  withLocalStorage("sort-mode")
);

// export const wordsMap = computed(() => {
//   const words = wordsDictionary();
//   const map = new Map<string, Word>();
//   words.forEach((word) => {
//     map.set(word.english.toLowerCase(), word);
//   });
//   return map;
// }, "wordsMap");

export const filteredWords = computed(() => {
  const words = wordsDictionary();
  const query = searchQuery().toLowerCase().trim();
  const sort = sortMode();

  let result: Word[];

  if (!query) {
    result = words;
  } else {
    const exact = words.filter((w) => w.english.toLowerCase() === query);
    const partial = words.filter(
      (w) =>
        w.english.toLowerCase().includes(query) &&
        w.english.toLowerCase() !== query
    );
    result = [...exact, ...partial];
  }

  // Sort logic
  console.log({ sort });

  if (sort === "alphabet") {
    result.sort((a, b) =>
      a.english.localeCompare(b.english, "en", { sensitivity: "base" })
    );
    console.log("sorted by alphabet");
  } else if (sort === "date") {
    result.sort(
      (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
    );
    console.log("sorted by date");
  }

  console.log({ result });

  return result;
}, "filteredWords");

export const SearchInput = reatomComponent(() => {
  const query = searchQuery();
  const resultsCount = filteredWords().length;
  // const totalCount = wordsDictionary().length;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="relative grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search your dictionary..."
            value={query}
            onChange={(e) => searchQuery.set(e.currentTarget.value)}
            className="pl-10"
          />
        </div>
        <SortSelect />
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

const SortSelect = reatomComponent(() => {
  const sort = sortMode();

  return (
    <Select value={sort} onValueChange={(value) => sortMode.set(value)}>
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="alphabet">A-Z</SelectItem>
        <SelectItem value="date">Date Added</SelectItem>
      </SelectContent>
    </Select>
  );
});
