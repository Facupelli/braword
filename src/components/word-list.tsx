import { reatomComponent } from "@reatom/react";
import { filteredWords } from "./search-word";
import { BookOpen } from "lucide-react";
import { WordCard } from "./word-card";

export const WordList = reatomComponent(() => {
  const words = filteredWords();

  if (words.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 rounded-full bg-muted p-4">
          <BookOpen className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-1">No words yet</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Start building your dictionary by adding your first word above.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {words.map((word) => (
        <WordCard key={word.id} word={word} />
      ))}
    </div>
  );
});
