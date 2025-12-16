import { Card, CardContent } from "./ui/card";
import type { Word } from "@/types/word";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function WordCard({
  word,
  expandable = true,
}: {
  word: Word;
  expandable?: boolean;
}) {
  const WordContent = () => (
    <>
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
                    <p className="text-sm leading-relaxed">{def.definition}</p>
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
        <div className="rounded-lg bg-muted/50 p-3 border-l-2 border-primary mt-4">
          <p className="text-sm italic text-muted-foreground">
            "{word.sentence}"
          </p>
        </div>
      )}
    </>
  );

  const WordHeader = () => (
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-2xl font-bold text-foreground">{word.english}</h3>
          <span className="text-xl text-muted-foreground">{word.spanish}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {new Date(word.addedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );

  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          {expandable ? (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-0">
                  <WordHeader />
                </AccordionTrigger>
                <AccordionContent className="pb-0 pt-4">
                  <WordContent />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <>
              <WordHeader />
              <div className="pt-4">
                <WordContent />
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
