# 📚 Vocabulary Learning App

A smart vocabulary learning application for non-native English speakers who want to master new words encountered while reading English books.

## 🎯 Problem Statement

When reading books in English as a non-native speaker, you frequently encounter unfamiliar words. Looking them up helps you understand the sentence in the moment, but without a systematic review strategy, these words are quickly forgotten and you find yourself looking up the same word repeatedly throughout the book.

This app solves that problem by letting you quickly capture new words while reading, then helping you internalize them through evidence-based learning strategies.

## ✨ Features

- **Quick Word Entry**: Capture words instantly while reading
  - English word
  - Translation to your native language (Spanish)
  - Example sentence from where you found it
  - Optional book title for context
- **Active Flashcard Review**: Test yourself with spaced repetition

  - See the English word first
  - Try to recall the meaning
  - Self-rate your knowledge to adjust review intervals

- **Smart Scheduling**: Words appear for review based on how well you know them

  - "Again" → Review today (struggling)
  - "Hard" → Review in 1-3 days (difficult)
  - "Good" → Review in 7+ days (mastered)

- **Search & Filter**: Find specific words or see which words are due for review today

- **Automatic Definitions & Translations**: Optional API integration to fetch definitions and translations automatically

- **Local Storage**: All your vocabulary data stays in your browser, private and offline-capable

## 🧠 Learning Strategy

The app implements evidence-based learning techniques proven by cognitive science research:

### 1. **Spaced Repetition**

Review words at increasing intervals (1 → 3 → 7 → 14 → 30 days) to maximize long-term retention. Research shows 25% better memorization compared to traditional study methods.

### 2. **Active Recall**

You try to remember the translation before seeing the answer. This retrieval practice is proven to be more effective for long-term memory than passive re-reading.

### 3. **Contextual Learning**

Each word is stored with the actual sentence where you encountered it in your book. Research shows that learning words in meaningful context (rather than isolated lists) leads to deeper understanding and better retention.

### 4. **Self-Assessment**

You rate your own knowledge, which adjusts the review schedule. Words you struggle with appear more frequently, while mastered words are reviewed less often.

### Why This Works

- You're learning words from real books you care about (intrinsic motivation)
- Context from actual sentences helps your brain create stronger memory connections
- Active testing before seeing answers strengthens neural pathways
- Spaced intervals combat the natural forgetting curve
- Self-paced review adapts to your personal learning speed

## 🎮 Usage

### While Reading Your Book

1. Encounter an unfamiliar English word
2. Open the app and add it with its translation and the sentence
3. Continue reading

### Daily Review Session

1. Open the app and see which words are due today
2. Try to recall the Spanish translation before revealing the answer
3. Rate yourself honestly to schedule the next review
4. Repeat until all due words are reviewed

## 🔒 Privacy

- All data stored locally in your browser
- No account required
- No data sent to servers (except optional API calls for definitions)
- Export your vocabulary as JSON anytime

## 🙏 Acknowledgments

Learning strategy based on cognitive science research:

- **Spaced Repetition**: Ebbinghaus forgetting curve and optimal review intervals
- **Active Recall**: Testing effect research (Roediger & Karpicke)
- **Contextual Learning**: Multiple context theory for vocabulary acquisition
- **Generation Effect**: Deep processing through meaningful engagement

---

**Happy Learning! 🎓**
