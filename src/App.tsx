import { WordList } from "./components/word-list.tsx";
import { WordForm } from "./components/word-form.tsx";
import { SearchInput } from "./components/search-word.tsx";

function App() {
  return (
    <main className="dark bg-slate-800">
      <div className="max-w-md min-h-dvh mx-auto px-4 py-6 space-y-4">
        <SearchInput />
        <WordForm />
        <WordList />
      </div>
    </main>
  );
}

export default App;
