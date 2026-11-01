# Chkela — Study Smarter. Not Harder. 🇪🇹

[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Android%20%7C%20iOS-10b981?style=flat-square)](#)
[![Installs](https://img.shields.io/badge/Downloads-73%2C000%2B-3b82f6?style=flat-square)](https://play.google.com/store/apps/details?id=com.chkela.v1)
[![Rating](https://img.shields.io/badge/Google%20Play-4.29%20%E2%98%85-f59e0b?style=flat-square)](https://play.google.com/store/apps/details?id=com.chkela.v1)
[![Organization](https://img.shields.io/badge/Organization-Lolearn%20Solutions-6366f1?style=flat-square)](https://chkela.com)

**Chkela** (also known as *Chikela* / *Chekela*) is an adaptive matriculation exam preparation platform and offline-capable web/mobile learning ecosystem built by **Lolearn Solutions** (Addis Ababa, Ethiopia) for Ethiopian secondary school students in **Grades 9–12**.

Stop grinding random notes for hours. Chkela identifies what actually moves a student's Ethiopian University Entrance Examination (EUEE / NEAEA) score—and delivers targeted, high-yield practice drills, concise revision notes, visual brain maps, and instant step-by-step explanations.

- **Production Domain:** [chkela.com](https://chkela.com)
- **Google Play Store:** [`com.chkela.v1`](https://play.google.com/store/apps/details?id=com.chkela.v1) (73,000+ installs, v2.1.7)
- **Apple App Store:** [`id6738397728`](https://apps.apple.com/us/app/chkela/id6738397728)

---

## 🚀 Core Product Pillars ("More Marks")

1. **01. Practice What the Exam Actually Asks:** Simulated NEAEA/EAES past-paper mock exams and chapter-wise drills calibrated to national curriculum blueprints.
2. **02. Fix Weak Spots, Skip the Rest:** Real-time diagnostic telemetry across Physics, Mathematics, Biology, and Chemistry that flags high-priority topic gaps (e.g., *Newtonian Mechanics*, *Electrochemistry*, *Cellular Respiration*).
3. **03. Short Drills That Compound:** 5-question rapid-fire past-paper drills, daily study streaks, flashcards, and visual brain maps.
4. **04. Get Unstuck in Seconds:** Context-aware bilingual AI Tutor (English & Amharic) providing step-by-step derivations and conceptual breakdowns.
5. **05. Notes Built for Revision:** High-density, zero-fluff curriculum summaries and formula sheets optimized for rapid pre-exam review and low-bandwidth caching.
6. **06. Stay Accountable with Peers:** School-wide and national leaderboards, collaborative study groups, scholarship listings, and interactive study meetups.

---

## 👥 Core Engineering & Curriculum Contributors (Lolearn Solutions)

| Contributor | Role & Primary Ownership | Focus Areas |
| :--- | :--- | :--- |
| **Gosa Negeso Geleto** | **Co-Founder, CPO, Frontend Engineer & Lead Natural Sciences Author** | Web & Mobile UI/UX Architecture, Interactive Auth & Diagnostic Drill Flows, Complete Grade 9–12 Natural Sciences Question Bank & Step-by-Step Solutions (Physics, Chemistry, Biology, Mathematics) |
| **Tefera Bereket** | **Mobile Release & iOS/Cross-Platform Engineer** | App Store (`id6738397728`) & Google Play (`com.chkela.v1`) Packaging, Client Performance, Offline Asset Sync |
| **Samuel Wondimagegnehu Beshah** | **Backend & AI/ML Systems Engineer** | Python, FastAPI, LangGraph AI Tutor Orchestration, Vector Databases & Telemetry APIs |
| **Kalid Beshir Hasen** | **Co-Founder & Strategy / Systems Collaborator** | Product Operations, Student Community Growth, Peer Study Architecture |

---

## 🛠️ Local Development & Deployment

This repository contains the standalone responsive Web Client, Authentication Portal, and Interactive Natural Sciences Practice Engine.

```bash
# Clone the repository
git clone [https://github.com/](https://github.com/)<your-username>/chkela-web.git
cd chkela-web

# Serve locally using Python or Node
python3 -m http.server 8080
# Visit http://localhost:8080
