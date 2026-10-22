# A Birthday Website Made With Love ❤️

A cinematic, romantic, emotionally touching birthday website built with love, warmth, and animations.

## ✨ Features Included

1. **Dreamy Opening Surprise Screen 💌**:
   - Calligraphic greeting: *"Hey, My Favorite Person ❤️"*
   - Animated 3D envelope with a pulsing wax seal and floating sparkle aura.
   - *"Open Your Surprise 💗"* button triggers realistic flap unfolding, chime sound, confetti, and transition.

2. **Birthday Celebration Hero 🎂**:
   - Grand celebration header: *"HAPPY BIRTHDAY, MY LOVE! 🎂❤️"*
   - Interactive tiered birthday cake with glowing candles.
   - Tap candles to blow them out: triggers smoke puff, audio chime, and celebratory confetti shower!
   - *"Make a Wish ✨"* modal with celestial starry particles and personalized confirmation note.

3. **Our Little Love Story Timeline 🌷**:
   - *"Every Little Moment With You Means Something ❤️"*
   - 4 animated milestone chapters:
     1. The Beginning
     2. The Little Things
     3. You, My Favorite Person
     4. More Memories Ahead
   - Glowing connector spine, romantic badges, and expandable personal memories.

4. **A Letter From My Heart 💌**:
   - Realistic vintage parchment paper styling with deckled edges and wax stamp watermark.
   - Sealed love letter invitation with *"Read My Heart 💗"* button.
   - Smooth typewriter-style sequential paragraph reveal with cursive handwriting fonts.

5. **Our Memories Polaroid Gallery 📸**:
   - Featured polaroid frame + smaller tilted polaroid cards with realistic tape strips and shadows.
   - Built-in romantic artistic CSS illustrations (ready for your real photos).
   - Interactive Lightbox with prev/next navigation, keyboard arrow support, and captions.
   - *"Play Slideshow"* automated playback option.

6. **Reasons You're Special 🌹**:
   - *"Little Things I Adore About You ❤️"*
   - 6 interactive 3D flip cards (Your smile, Ordinary moments special, Unique personality, Little habits, Your dreams, Simply being YOU).
   - Smooth 180° flip animation revealing tender notes.
   - Quick "Reveal all at once" / "Reset cards" toggle.

7. **Interactive Birthday Surprise Gift Box 🎁**:
   - Mysterious 3D gift box with glowing golden ribbon.
   - *"Open Your Gift 🎁"* triggers lid lift, light beams, and floating confetti/heart shower.
   - Reveals the heartfelt quote: *"If I could give you one thing today..."*
   - Includes a secret folded bonus note button.

8. **Cinematic Final Screen Under The Stars 🌙**:
   - Deep night-sky gradient with twinkling stars, shooting stars, and moon.
   - Heartwarming blessing: *"May this new chapter bring you more happiness..."*
   - Pulsing glowing heart with interactive heartbeat clicks.
   - *"Replay Our Little Story ↺"* button to re-experience the surprise.

9. **Romantic Music & Audio System 🎵**:
   - Floating romantic audio badge with spinning vinyl disc, animated equalizer bars, and volume slider.
   - **Zero-asset fallback**: Built-in procedural Web Audio synthesizer plays a dreamy acoustic music-box arpeggio automatically!
   - **Custom audio**: Put any `.mp3` in the `/public` folder and set the path in `src/config.js`.

---

## 🚀 How to Run the Website

### Start Development Server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production:
```bash
npm run build
```

---

## 🎨 How to Personalize & Customize

Everything is centralized in a single file:
👉 **[`src/config.js`](./src/config.js)**

### 1. Change Name or Nicknames
In `src/config.js`:
```javascript
recipient: {
  name: "Chaitra", // Her name
  nickname: "My Favorite Person",
  title: "My Love",
}
```

### 2. Add Your Real Photos
Place your photo files (e.g., `us1.jpg`, `us2.jpg`) into the `public/` directory, and update `src/config.js`:
```javascript
gallery: {
  items: [
    {
      id: 1,
      title: "Our Favorite Day",
      caption: "The day we spent walking by the lake.",
      date: "August 14",
      image: "/us1.jpg", // path to your image in public folder
      theme: "rose",
      featured: true,
    },
    // ...
  ]
}
```

### 3. Add Custom Music
Drop any MP3 file (e.g. `romantic-song.mp3`) into the `public/` folder, then in `src/config.js`:
```javascript
audio: {
  customAudioUrl: "/romantic-song.mp3",
  songTitle: "Our Favorite Song",
  artist: "For My Sweetheart",
}
```

### 4. Edit The Love Letter, Story, or Reasons
All the text in `src/config.js` is clearly organized and editable with simple strings.
