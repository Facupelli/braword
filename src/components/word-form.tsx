import { reatomComponent, bindField } from "@reatom/react";
import { addWordForm } from "./add-word-form";
import { atom, withLocalStorage } from "@reatom/core";
import type { Word } from "../types/word";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const wordsDictionary = atom<Word[]>([], "wordsDict").extend(
  withLocalStorage("words-dictionary")
);

export const WordForm = reatomComponent(() => {
  const { submit, fields } = addWordForm;
  return (
    <Card className="gap-y-2">
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addWordForm.submit();
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
              {!submit.ready() ? "Adding..." : "Add Word"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
});
