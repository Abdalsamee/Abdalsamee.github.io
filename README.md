<div align="center">

# 🚀 Abdalsamee Alnajjar — Portfolio

**Android Developer · Kotlin · Jetpack Compose**

A modern, interactive, bilingual portfolio website with a built-in admin panel — built from Gaza for the world.

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-abdalsamee.github.io-2dd4bf?style=for-the-badge)](https://abdalsamee.github.io/)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-818cf8?style=for-the-badge)](LICENSE)

<img src="assets/social-preview.png" alt="Portfolio Preview" width="700">

</div>

---

## ✨ Features

### 🎨 Portfolio Website
- **Dark & Light themes** with smooth transitions
- **Bilingual** — full English ↔ Arabic support with RTL layout
- **Interactive phone simulator** with 4 mini-apps:
  - 💬 **Ask Me** — chat-style Q&A revealing personality
  - 🐞 **Bug Smash** — a 20-second reflex game (with high score tracking)
  - 📝 **Fun Facts** — swipeable personality cards
  - 🚀 **My Dream** — goals and aspirations
- **Particle constellation** hero with mouse interaction
- **Scroll-triggered animations**, animated stat counters, and typing effect
- **3D tilt** cards and **magnetic** buttons on desktop
- **Custom cursor** with context-aware glow
- **Scroll progress bar** and active nav highlighting
- **SEO optimized** — Open Graph, Twitter Cards, JSON-LD structured data
- **Accessible** — keyboard navigation, reduced-motion support, semantic HTML
- **Responsive** — works on all screen sizes

### 🔧 Admin Panel (`admin.html`)
- **Secure login** via Firebase Authentication
- **Dashboard** with visit counter (total + daily breakdown)
- **Full CMS** — edit all website content:
  - Hero section (name, roles, tagline)
  - About section (bio, portrait path)
  - Projects (add, edit, delete with tech tags)
  - Timeline (experience & education entries)
  - Skills (categories and chips)
  - Contact info (email, WhatsApp, LinkedIn, GitHub)
- **Live sync** — edits appear on the public site automatically via Firestore
- **Responsive** sidebar layout with mobile support

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | HTML5, CSS3 (custom properties, grid, clamp), Vanilla JavaScript |
| **Fonts** | Sora, Inter, Tajawal (Google Fonts) |
| **Backend** | Firebase (Auth, Firestore) |
| **Hosting** | GitHub Pages |
| **Analytics** | Custom Firestore visit counter |
| **Contact** | Gmail compose integration |

---

## 📁 Project Structure

```
📦 Abdalsamee.github.io
├── 📄 index.html          # Main portfolio page
├── 📄 admin.html           # Admin panel (protected)
├── 📄 styles.css            # All styling
├── 📄 scripts.js            # Portfolio logic + Firestore CMS bridge
├── 📂 assets/
│   ├── 📷 portrait.jpg      # Profile photo
│   ├── 📷 social-preview.png # OG image (1200×630)
│   ├── 📷 saffiedu.png      # Project screenshot
│   └── 📂 logo/
│       └── favicon.svg
└── 📄 README.md
```

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Abdalsamee/Abdalsamee.github.io.git
cd Abdalsamee.github.io
```

### 2. Set up Firebase (for admin panel & analytics)

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication** → Email/Password sign-in → Add your admin user
3. Create a **Firestore Database** in production mode
4. Copy your Firebase config and paste it into:
   - `index.html` (the inline `<script>` block)
   - `admin.html` (the `firebaseConfig` object)

### 3. Set Firestore security rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
    }
    match /content/{doc} {
      allow write: if request.auth != null;
    }
    match /projects/{doc} {
      allow write: if request.auth != null;
    }
    match /timeline/{doc} {
      allow write: if request.auth != null;
    }
    match /analytics/visits {
      allow write: if true;
    }
  }
}
```

### 4. Deploy

Push to GitHub — GitHub Pages serves it automatically at `https://<username>.github.io/`.

### 5. Add content

Open `https://<your-site>/admin.html`, log in, and start adding your projects, experience, and skills. Changes appear on the live site instantly.

---

## 🎯 How the CMS Works

```
┌──────────────┐     Firestore      ┌──────────────────┐
│  Admin Panel  │ ──── writes ────▶  │  Cloud Database   │
│  admin.html   │                    │  (projects, bio,  │
└──────────────┘                    │   timeline, etc.) │
                                     └────────┬─────────┘
                                              │ reads
                                              ▼
                                     ┌──────────────────┐
                                     │  Public Website   │
                                     │  index.html       │
                                     │  + scripts.js     │
                                     └──────────────────┘
```

1. **Admin** logs in → edits content → saved to Firestore
2. **Visitor** opens the site → `scripts.js` loads Firestore data in the background
3. If Firestore has content, it replaces the hardcoded fallback and re-renders
4. If Firestore is unreachable, hardcoded content displays instantly (zero downtime)

---

## 📊 Visit Tracking

Every page load increments a Firestore counter — no third-party analytics needed.

- Total visit count
- Daily breakdown (YYYY-MM-DD)
- Viewable from the admin dashboard

Tracked via a lightweight inline script in `index.html` using `FieldValue.increment()`.

---

## 🌐 Bilingual Support

The site supports **English (LTR)** and **Arabic (RTL)** with a single toggle:

- All text content has EN/AR variants stored in the `i18n` object
- CSS uses logical properties (`inset-inline`, `padding-block`, `margin-inline`) for automatic RTL
- The admin panel stores bilingual content for every field
- Font families swap between Inter/Sora (EN) and Tajawal (AR)

---

## 🔒 Security

- **Firebase Auth** — email/password authentication for admin access
- **Firestore Rules** — write access restricted to authenticated users only
- **HTTPS** — all data in transit is encrypted (GitHub Pages + Firebase)
- **No secrets in client code** — Firebase API keys are safe by design (restricted by security rules and domain)
- **`noindex` on admin** — search engines won't index the admin page
- **Visit counter** is the only publicly writable endpoint

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|-----------|----------|
| `> 880px` | Full desktop layout, side-by-side grids, floating badges |
| `650–880px` | Single-column content, hamburger nav, hidden portrait floats |
| `< 650px` | Mobile-optimized phone section, stacked cards |
| `< 400px` | Scaled phone mockup, compact spacing |

---

## 🎨 Customization

### Change colors
Edit the CSS variables at the top of `styles.css`:
```css
--brand-1: #2dd4bf;  /* Teal */
--brand-2: #38bdf8;  /* Blue */
--brand-3: #818cf8;  /* Purple */
--gold: #f4c95d;     /* Accent */
```

### Change content
- **Quick edits**: use the admin panel at `/admin.html`
- **Structural changes**: edit `index.html` directly
- **Add animations**: modify the reveal classes in `styles.css`

### Add project filter categories
Add new `<button class="aa-filter" data-f="NewTech">` in the projects section of `index.html`, and use matching tech tags when adding projects.

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to fork, modify, and use it for your own portfolio — just swap in your own content.

---

## 🤝 Contact

| Channel | Link |
|---------|------|
| 🌐 Website | [abdalsamee.github.io](https://abdalsamee.github.io/) |
| 💼 LinkedIn | [in/abdalsamee-alnajjar](https://www.linkedin.com/in/abdalsamee-alnajjar/) |
| 🐙 GitHub | [Abdalsamee](https://github.com/Abdalsamee) |
| 📧 Email | abd409115011@gmail.com |
| 💬 WhatsApp | [+972 567 824 900](https://wa.me/972567824900) |

---

<div align="center">

**Built with ❤️ from Gaza, Palestine**

*From a single line of code to a full-stack portfolio — the journey continues.*

</div>
