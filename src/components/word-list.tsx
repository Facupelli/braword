import { reatomComponent } from "@reatom/react";

import { filteredWords } from "./search-word";
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "./ui/card";

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
        <Card key={word.id}>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-foreground">
                      {word.english}
                    </h3>
                    <span className="text-xl text-muted-foreground">
                      {word.spanish}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(word.addedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {word.meanings.length > 0 && (
                <div className="space-y-3">
                  {word.meanings.map((meaning, index) => (
                    <div key={index} className="space-y-2">
                      {meaning.partOfSpeech && (
                        <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          {meaning.partOfSpeech}
                        </span>
                      )}
                      {meaning.definitions.map((def, defIndex) => (
                        <div key={defIndex} className="space-y-2">
                          {def.definition && (
                            <p className="text-sm leading-relaxed">
                              {def.definition}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-4 text-xs">
                            {def.synonyms.length > 0 && (
                              <div>
                                <span className="font-medium text-foreground">
                                  Synonyms:
                                </span>{" "}
                                <span className="text-muted-foreground">
                                  {def.synonyms.join(", ")}
                                </span>
                              </div>
                            )}
                            {def.antonyms.length > 0 && (
                              <div>
                                <span className="font-medium text-foreground">
                                  Antonyms:
                                </span>{" "}
                                <span className="text-muted-foreground">
                                  {def.antonyms.join(", ")}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {word.sentence && (
                <div className="rounded-lg bg-muted/50 p-3 border-l-2 border-primary">
                  <p className="text-sm italic text-muted-foreground">
                    "{word.sentence}"
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
});
