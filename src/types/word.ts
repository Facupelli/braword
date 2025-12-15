export interface Word {
  id: string;
  english: string;
  spanish: string;
  addedAt: string; // ISO string
  meanings: Meaning[];
  sentence?: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}
