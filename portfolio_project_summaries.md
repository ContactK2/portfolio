# Stockton Cortright — Project Portfolio

**Portfolio:** [stockton-cortright.vercel.app](https://stockton-cortright.vercel.app)  
**GitHub:** [github.com/ContactK2](https://github.com/ContactK2)

---

## NetSentinel — Agentic Network Intrusion Detection System

**Live Repo:** [github.com/ContactK2/Netsents](https://github.com/ContactK2/Netsents)

**What it is:** An autonomous, AI-powered network intrusion detection system that doesn't just flag threats — it reasons through them and generates incident response actions without human intervention.

**The Problem:** Traditional intrusion detection systems generate noisy alerts that require a human analyst to triage, investigate, and respond. This creates bottlenecks, especially for understaffed security teams. NetSentinel closes the loop by pairing ML-based detection with an LLM-powered agent that autonomously investigates and responds to threats.

**How it Works:**

- An ensemble of **Random Forest + Isolation Forest** models is trained on the **CICIDS2017 dataset** across **72 network flow features** to classify traffic as benign or malicious.
- When anomalous traffic is detected, an **agentic reasoning layer** built with **LangGraph** kicks in. The agent — powered by **Groq's Llama 3.3 70B model** — autonomously analyzes the incident, determines severity, identifies affected IPs, and generates a structured markdown incident response report.
- The agent can also query the **AbuseIPDB API** for IP reputation data, enriching its analysis with external threat intelligence.
- All events stream live to a **Next.js frontend** via **Server-Sent Events (SSE)**, providing a real-time dashboard with color-coded threat badges, summary stats (total flows, threats detected, active incidents), and a clickable incident log with full agent reports.
- Incidents and raw traffic logs are persisted to **PostgreSQL** with two tables: `traffic_logs` (raw flow data, ML prediction, confidence scores) and `incidents` (agent-generated reports with severity, affected IPs, and markdown report bodies).
- The full stack runs in **Docker Compose** (PostgreSQL + FastAPI backend + Next.js frontend).

**Technical Stack:** Python, FastAPI, LangGraph, Groq (Llama 3.3 70B), scikit-learn, Next.js, PostgreSQL, Docker, SSE

**Key Engineering Challenge:** A synchronous LangGraph agent was silently blocking the entire async FastAPI event loop, causing the SSE stream to freeze. The failure mode was subtle — no errors, just stalled connections. The fix was a single line (`asyncio.to_thread()`) to offload the agent to a thread, but diagnosing the root cause required deep understanding of Python's async execution model.

**What Makes It Stand Out:** Most student ML projects stop at model training and evaluation. NetSentinel is a full end-to-end system — data pipeline, trained models, agentic reasoning, external API integration, real-time streaming, persistent storage, and a production-style frontend — all wired together and running locally.

---

## Floomba — Autonomous Indoor Security Drone

**Live Repo:** [github.com/ContactK2/sdweb](https://github.com/ContactK2/sdweb)

**What it is:** A custom-built autonomous indoor security drone designed for smart home environments that detects and tracks people in real time using on-device computer vision.

**The Problem:** Consumer security cameras are static — they cover fixed fields of view and create blind spots. Floomba is a mobile, autonomous alternative: a drone that can patrol indoor spaces, detect people, track them spatially, and log everything to a cloud-connected dashboard.

**How it Works:**

- The drone is built around a **Raspberry Pi** paired with a **Cube Orange** flight controller running **ArduPilot**.
- An **OAK-D Lite stereo camera** (with an Intel Myriad X VPU) runs a **MobileNet-SSD neural network** for on-device person detection, achieving **85–95% detection accuracy**.
- The OAK-D Lite's stereo depth perception provides spatial object tracking — it reports not just *what* is detected, but *where* the object is in 3D space (X, Y, Z coordinates), enabling the drone to know the distance to a detected person.
- The drone autonomously adjusts yaw to track subjects via **MAVLink** commands sent from the Pi to the Cube Orange over a UART serial link.
- Detection captures are uploaded to **Cloudflare R2** for cloud storage and logged to a **Neon PostgreSQL** database.
- A **Flask-based web dashboard** provides a live **MJPEG video stream**, real-time detection alerts via **SSE**, and searchable activity history.

**Technical Stack:** Python, Flask, Raspberry Pi, Cube Orange (ArduPilot), OAK-D Lite (MobileNet-SSD), MAVLink, Cloudflare R2, Neon PostgreSQL, SSE

**Hardware Challenges Solved:**

- **5V Backfeed Issue:** The Raspberry Pi was backfeeding 5V power to the Cube Orange through the USB data connection, creating a power conflict when the Cube was independently powered by a LiPo battery through its power module. Resolved by cutting the 5V (red) wire inside the USB cable, preserving data lines (D+, D−) and ground while eliminating the power backfeed. Also explored UART serial as a cleaner long-term alternative (Pi GPIO TX/RX → Cube TELEM2).
- **Power Architecture:** Designed a split power system — the Cube Orange powered via its HerePower module from the LiPo battery, and the Raspberry Pi powered via a separate 5V BEC stepping down from the same battery — ensuring both devices share a battery without powering each other.
- **OAK-D Lite on Pi:** The Pi's USB controller bottlenecks the OAK-D Lite's USB 3.0 bandwidth. The camera works fully on laptops but required workarounds on the Pi to get person detection running reliably.

**What Makes It Stand Out:** This is a true hardware-software integrated project — not just a model running on a laptop. It spans embedded systems, flight controllers, computer vision, real-time communications, cloud storage, and web dashboards, all working together on a physical drone.

---

## RateMyApt — Apartment Review Platform for College Students

**Live Repo:** [github.com/ContactK2/ratemyapt](https://github.com/ContactK2/ratemyapt)  
**Live Site:** [ratemyapt.org](https://ratemyapt.org)

**What it is:** A full-stack web application that lets university students share honest, anonymous reviews of off-campus apartments, helping other students make better-informed housing decisions.

**The Problem:** College students choosing apartments near campus rely on word of mouth, outdated Google reviews, or landlord marketing. There's no dedicated, student-focused platform for housing reviews that addresses the specific concerns students care about — noise, management responsiveness, pests, safety, and value for price.

**How it Works:**

- Students can search for apartment properties near their university using **fuzzy matching** (so typos and partial names still return results).
- Reviews use a **five-pillar scoring system** that captures the dimensions students actually care about when evaluating housing.
- A **document-based review verification** system helps filter out fake reviews by requiring documentation.
- An **admin moderation workflow** with **email alerts** (via Resend) ensures review quality and handles flagged content.
- Authentication is handled through **Clerk**, providing secure sign-in/sign-up flows.
- Review images and documents are stored in **Cloudflare R2** for cost-effective cloud storage.
- The platform launched seeded with **22+ properties near UTA** and is prepared for beta launch targeting student renters.
- The UI uses a **dark-themed, mobile-responsive design** with glassmorphism/cyberpunk aesthetics, designed specifically to appeal to college students.

**Technical Stack:** Next.js, React, Tailwind CSS, PostgreSQL, Clerk (auth), Cloudflare R2 (storage), Cloudflare Registrar (domain), Resend (email), Vercel (hosting), Sentry (error monitoring)

**What Makes It Stand Out:** This is a fully deployed, publicly accessible product — not a demo or a school assignment. It has real authentication, real storage, real email pipelines, real domain, and real error monitoring. The entire stack from domain registration to error tracking is production-grade.

---

## Osirec — College Football Recruiting Analytics Platform

**Live Repo:** [github.com/ContactK2/OSIREC](https://github.com/ContactK2/OSIREC)  
**Live Site:** [osirec.org](https://osirec.org)

**What it is:** A full-stack web application that aggregates college football recruiting data from multiple scouting services into a unified analytics dashboard, with AI-powered prospect evaluation.

**The Problem:** College football recruiting data is fragmented across 247Sports, ESPN, and On3 — each with different rating systems, grading scales, and coverage gaps. Coaches, analysts, and fans have no unified view to compare how different services evaluate the same prospect. Osirec solves this by normalizing everything into one platform.

**How it Works:**

- **Automated web scrapers** built with **Playwright** ingest player ratings, physical metrics (height, weight, speed), and commitment statuses from 247Sports, ESPN, and On3.
- A **deduplication and normalization pipeline** resolves player identity across sources (handling name variations, transfers, and reclassifications) and standardizes rating scales for apples-to-apples comparison.
- An **AI-powered prospect evaluation system** uses **Google Gemini** and **Ollama** LLMs to generate trait scores and scouting grade assessments based on aggregated data — providing an automated "analyst take" on each prospect.
- The **"Scout Control Room" UI** (built in React) enables multi-source rating comparisons side-by-side, player search and filtering, position-based physical benchmarking with **z-score analysis** (how a player's measurables compare to the average at their position), and team recruitment boards.
- Data is stored in **SQLite** and served via a **FastAPI** backend.

**Technical Stack:** React, FastAPI, Python, SQLite, Playwright, Tailwind CSS, Google Gemini, Ollama

**What Makes It Stand Out:** Osirec applies the same multi-source player evaluation thinking used by MLB front offices to the college football recruiting space. The combination of automated data aggregation, statistical normalization, and LLM-powered scouting analysis goes well beyond a typical CRUD app — it's a genuine analytics tool.

---

## toffyj — Crypto Trading Bot

**Live Repo:** [github.com/ContactK2/tiffyj](https://github.com/ContactK2/tiffyj)

---

## NCAA Tournament Bracket Simulator

**What it is:** A March Madness bracket simulation engine that uses advanced statistical models to project tournament outcomes.

**How it Works:**

- Uses **KenPom adjusted efficiency metrics** (offensive and defensive efficiency, adjusted for tempo and opponent strength) as the foundation for team evaluation.
- Applies the **Log5 formula** — a probabilistic model for head-to-head matchup prediction — to calculate win probabilities for every potential game in the bracket.
- Simulates the full tournament thousands of times to generate bracket projections, upset probabilities, and Final Four/Championship likelihoods.
- The 2026 simulation projected **Duke as the national champion**.

**Technical Stack:** Python

**What Makes It Stand Out:** Demonstrates applied sports analytics and probabilistic modeling — the same statistical framework used in real sports analytics operations for win expectancy and matchup modeling.

---

## Technical Skills Summary

| Category | Technologies |
|---|---|
| **Languages** | Python, TypeScript/JavaScript, Java, C/C++, SQL |
| **Backend** | FastAPI, Flask, Node.js, REST APIs, PostgreSQL, SQLite |
| **Frontend** | React, Next.js, Tailwind CSS |
| **ML/AI** | scikit-learn, LangGraph, PyTorch, Pandas, MobileNet-SSD, Gemini, Ollama, Groq |
| **Cloud & Infra** | Cloudflare (R2, Registrar), Vercel, Neon, Docker, Linux |
| **Hardware** | Raspberry Pi, Cube Orange, OAK-D Lite, ArduPilot, MAVLink, LiPo power systems |
| **Other** | Git, Playwright, Clerk, Resend, Sentry, SSE |
