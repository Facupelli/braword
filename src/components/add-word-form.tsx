import { reatomComponent, bindField } from "@reatom/react";
import { atom } from "@reatom/core";
import type { Word } from "../types/word";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { searchWordForm } from "./forms/search-word-form";
import { addWordForm } from "./forms/add-word-form";
import { wordsDictionary } from "@/words-dictionary";
import { WordCard } from "./word-card";

const newWord = atom<Word | null>(null, "newWord");
const isOpen = atom(false, "isOpen");

export const SearchWordForm = reatomComponent(() => {
  const { submit, fields } = searchWordForm;

  return (
    <>
      <Card className="gap-y-2">
        <CardContent>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const result = await searchWordForm.submit();
              newWord.set(result);
              searchWordForm.reset();
              isOpen.set(true);
            }}
          >
            <div className="grid gap-4">
              <div>
                <Label className="pb-2">New English Word</Label>
                <Input
                  placeholder="Enter a new word"
                  {...bindField(fields.word)}
                />
              </div>
              <Button type="submit">
                {!submit.ready() ? "Searching..." : "Search Word"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <AddWordDialog />
    </>
  );
});

const AddWordDialog = reatomComponent(() => {
  const { fields } = addWordForm;

  const word = newWord();

  return (
    <Dialog open={isOpen()} onOpenChange={(open) => isOpen.set(open)}>
      <DialogContent className="sm:max-w-[425px]">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            if (word === null) {
              return;
            }
            // addWordForm.submit();

            const newWord: Word = {
              ...word,
              sentence: fields.sentence(),
            };

            wordsDictionary.set((prev) => [newWord, ...prev]);

            addWordForm.reset();
            isOpen.set(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>New Word</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            {word ? (
              <div className="space-y-2">
                <WordCard word={word} expandable={false} />
                <div>
                  <Label className="pb-2">Sentence</Label>
                  <Input
                    placeholder="Enter the sentence where the word is used"
                    {...bindField(fields.sentence)}
                  />
                </div>
              </div>
            ) : (
              <p>No word found for your search</p>
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {word && <Button type="submit">Add Word</Button>}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
});
