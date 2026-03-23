

# 🚀🎬 Statzy Studio
## AI Video Automation Framework

<p align="center">
  <a href="https://discord.gg/uERx39ru3R">
    <img src="https://dcbadge.vercel.app/api/server/uERx39ru3R?compact=true&style=flat" alt="Discord">
  </a>
  <a href="https://github.com/yourusername/statzy-studio/stargazers">
    <img src="https://img.shields.io/github/stars/yourusername/statzy-studio?style=social" alt="GitHub stars">
  </a>
  <a href="https://pypi.org/project/statzy-studio/">
    <img src="https://static.pepy.tech/personalized-badge/statzy-studio?period=month&units=international_system&left_color=blue&right_color=green&left_text=Downloads/month" alt="PyPI downloads">
  </a>
  <a href="https://docs.statzy-studio.ai/">
    <img src="https://img.shields.io/badge/docs-visit-blue" alt="Documentation">
  </a>
</p>

<div align="center">
  <img src="https://your-cdn.com/statzy-studio-logo.png" alt="Statzy Studio Logo" style="border-radius: 20px;" width="18%">
</div>

<div align="center">
  <a href="https://discord.gg/uERx39ru3R">
    <img src="https://img.shields.io/discord/1126042224979886160?color=7289da&logo=discord&logoColor=white&label=Join%20Discord&color=cyan" alt="Join Discord" height="34">
  </a>
</div>

<div align="center">
  ⚡ Automating video and short content creation with AI ⚡
</div>

---

## 🎥 Showcase

- [Full video on YouTube](https://youtu.be/hpoSHq-ER8U)  
  *(Video preview placeholder)*

## 🎥 Voice Dubbing Demo

*(Voice dubbing demo placeholder)*

---

## 🌟 Show Your Support

If you find Statzy Studio helpful, please **star the repository** on GitHub – it helps us grow and improve!

[![GitHub star chart](https://img.shields.io/github/stars/yourusername/statzy-studio?style=social)](https://github.com/yourusername/statzy-studio/stargazers)

---

## 🛠️ How It Works

*(Diagram placeholder)*

---

## 📝 Introduction

Statzy Studio is a powerful framework for automating content creation. It simplifies video editing, footage sourcing, voiceover synthesis, and caption generation. Common use cases include:

- YouTube automation  
- TikTok Creativity Program automation  
- Multi‑language voice dubbing  
- AI‑assisted script and video generation  

### Key Features

- 🎞️ **Automated Editing Framework** – Uses an LLM‑oriented video editing language to streamline the editing process.  
- 📃 **Scripts & Prompts** – Ready‑to‑use scripts and prompts for various LLM‑driven editing workflows.  
- 🗣️ **Voiceover / Content Creation** – Supports **30+ languages** (English, Spanish, Arabic, French, Polish, German, Italian, Portuguese, Russian, Mandarin, Japanese, Hindi, Korean, and more) via EdgeTTS (free) and ElevenLabs.  
- 🔗 **Caption Generation** – Automatically generates and syncs captions.  
- 🌐🎥 **Asset Sourcing** – Fetches images and video footage from the web via Pexels API and Bing Image Search.  
- 🧠 **Memory & Persistence** – Uses TinyDB to retain editing variables across sessions.

---

## 🚀 Quick Start – Google Colab

Run Statzy Studio directly in your browser with no installation:

1. Open the Colab notebook:  


2. Run the cells in order. That’s it!

---

## 🖥️ Local Installation with Docker

### Prerequisites

- [Docker](https://www.docker.com/) installed on your system.

### Steps

1. Clone the repository and navigate into it:
   ```bash
   git clone https://github.com/yourusername/statzy-studio.git
   cd statzy-studio
   ```

2. Build the Docker image:
   ```bash
   docker build -t statzy_studio_docker:latest .
   ```

3. Run the container, mounting your `.env` file:
   ```bash
   docker run -p 31415:31415 --env-file .env statzy_studio_docker:latest
   ```

4. Open your browser and go to [http://localhost:31415](http://localhost:31415) to access the web interface.

> **Note**: See `installation-notes.md` for more detailed setup instructions.

---

## 🧩 Framework Overview

Statzy Studio consists of several core components, each designed for a specific type of content creation:

- **`ContentShortEngine`** – Creates short‑form videos (e.g., for TikTok, YouTube Shorts). Handles script generation, rendering, and metadata addition.

- **`ContentVideoEngine`** – Designed for longer videos. Automates audio generation, background footage sourcing, caption timing, and asset preparation.

- **`ContentTranslationEngine`** – Dubs and translates entire videos. Given a video file or YouTube link, it transcribes, translates, voices in a target language, adds captions, and outputs a new video.

- **`EditingEngine`** – Uses an Editing Markup Language (JSON) to break editing tasks into modular, LLM‑friendly blocks, enabling flexible automation.

All engines are highly customizable: you can choose languages, add watermarks, and adjust many other parameters.

---

## 🛠️ Technologies Used

- **MoviePy** – Video editing and rendering  
- **OpenAI** – Script generation and LLM‑driven workflows  
- **ElevenLabs** / **EdgeTTS** – High‑quality voice synthesis (ElevenLabs is paid; EdgeTTS is free)  
- **Pexels API** – Background video footage sourcing  
- **Bing Image Search** – Image sourcing  
- **TinyDB** – Lightweight database for persistence

---

## 💁 Contributing

We welcome contributions! Whether you’re adding a feature, improving documentation, or fixing a bug, your help is appreciated. Please open an issue or pull request.

---

<p align="center">
  <a href="https://star-history.com/#yourusername/statzy-studio&Date">
    <img src="https://api.star-history.com/svg?repos=yourusername/statzy-studio&type=Date" alt="Star History Chart">
  </a>
</p>

---

**Happy content creating! 🎉**
