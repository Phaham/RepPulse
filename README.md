# RepPulse

A modern, responsive React web app to discover, view, and explore exercises tailored to your goals. RepPulse integrates with ExerciseDB (via RapidAPI) and YouTube Search API to give you step-by-step instructions, high-quality gifs, and related workout videos—all with a smooth, animated UI and offline fallback.

---

## 🚀 Features

- **Search Exercises** by name, target muscle, equipment, or body part  
- **Filter & Scroll** through exercise categories with a horizontal scrollbar  
- **Exercise Detail** page with animated GIF, description, and key info (body part, target muscle, equipment)  
- **Embedded YouTube Videos** for each exercise—watch top 3 demos without leaving the page  
- **Similar Exercises** by target muscle and by equipment  
- **Offline Fallback**: if the API rate-limits you (429/403) or fails, we load from a local `exercises.json` copy  
- **Smooth Animations** using Framer Motion  
- **Mobile-first & Responsive** layout with MUI’s Grid and Box components  

---

## 📦 Tech Stack

- **React** (Vite)  
- **Material-UI (MUI)** for components & styling  
- **Framer Motion** for entrance & hover animations  
- **React Router** for client-side routing  
- **RapidAPI** (ExerciseDB & YouTube Search API)  
- **Local JSON Fallback** (`src/data/exercises.json`)  
- **ESLint + Prettier** (recommended)  

---

## 🛠️ Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Phaham/RepPulse.git
   cd RepPulse


