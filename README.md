# ⚡ Valhalla AI Organizer

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Alpha-orange.svg)
![Stack](https://img.shields.io/badge/tech-React_19_%7C_TypeScript_%7C_Gemini_Pro-000000.svg)

> **The Interface for the Gods.**  
> Valhalla is not just an organizer. It is a next-generation, multi-modal personal workspace powered by Google's most advanced Gemini models.

---

## 💎 The Vision

Valhalla Organizer is engineered to obsolete traditional productivity tools. While others focus on static lists, Valhalla integrates **Active Intelligence**. It doesn't just store your data; it visualizes it, speaks it, and reasons about it.

Built with a "Clean Architecture" philosophy on the frontend, ensuring scalability, type safety, and a buttery smooth 60 FPS experience.

## 🚀 Key Capabilities

### 🧠 Deep Reasoning Chat
Powered by **Gemini 3 Pro Preview**.
- **Context-Aware:** Remembers the conversation flow.
- **Low Latency:** Optimized for instant feedback.
- **UI:** Glassmorphism design with adaptive auto-scroll and error recovery.

### 🎨 Creative Studio
Powered by **Gemini 3 Pro Image Preview**.
- **High Fidelity:** Generate assets in 1K, 2K, and 4K resolutions.
- **Prompt Adherence:** Uses the latest "Nano Banana" series architecture for precise instruction following.
- **Gallery Mode:** Auto-saves generated assets to a local session gallery.

### 🗣️ Neural Voice Engine
Powered by **Gemini 2.5 Flash TTS**.
- **Lifelike Audio:** Utilizes the "Kore" voice profile for natural, non-robotic speech.
- **Real-time Synthesis:** Direct PCM streaming and browser-based audio decoding.
- **Visual Feedback:** Loading states and playback controls.

---

## 🛠️ Tech Stack & Architecture

We don't cut corners. Valhalla is built on the bleeding edge.

*   **Core:** React 19, TypeScript 5.0
*   **Styling:** Tailwind CSS (Utility-first, Dark Mode native)
*   **AI Layer:** Google GenAI SDK (`@google/genai`)
*   **State Management:** React Hooks + Service/Repository Pattern
*   **Persistence:** LocalStorage (Prototype) -> IndexedDB (Planned)

### Project Structure

```bash
src/
├── components/       # UI Components (Views)
├── services/         # API & Business Logic (The "Core")
├── types/            # TypeScript Definitions (Domain Models)
└── App.tsx           # Composition Root
```

---

## 🏁 Getting Started

### Prerequisites

*   Node.js 18+
*   Google Gemini API Key (Paid Tier recommended for high-res video/image)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-org/valhalla.git
    cd valhalla
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    The app requires a `process.env.API_KEY`. Ensure your environment (or bundler config) injects this key.

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

---

## 🔮 Roadmap (Q4 2025)

*   [ ] **Vector Memory:** Long-term memory integration using RAG.
*   [ ] **Valhalla Sync:** E2E encrypted cloud synchronization.
*   [ ] **Mobile Native:** Porting Core logic to React Native / Avalonia Mobile.
*   [ ] **Voice Mode:** Real-time bi-directional voice conversation (Live API).

---

## 🤝 Contributing

We follow **Conventional Commits**. Please ensure your PRs adhere to the Clean Architecture boundaries defined in `services/`.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

*Crafted with ☕ and Code by the Valhalla Engineering Team.*
