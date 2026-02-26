![Core9 Banner](https://github.com/aryan-madan/Core9/blob/main/public/images/Core%209%20%7C%20Banner.png?raw=true)

A web-based OS built with React and Next.js.

---

## Tech Stack

| Tool | Role |
|---|---|
| Next.js (App Router) | Framework |
| React | UI |
| Framer Motion | Animations |
| Tailwind CSS | Styling |
| Monaco Editor | Code/text editor in Notepad |

---

## Project Structure

```
components/
├── system/
│   ├── stage-manager.tsx     # Welcome → desktop transition
│   └── window-manager.tsx    # Window state, focus, resize, open/close
├── gui/
│   ├── window.tsx            # Window UI, drag, resize, title bar
│   └── dock.tsx              # Dock and app icons
└── apps/
    └── ...                   # Individual app components

lib/
└── app-types.ts              # App definitions (id, title, icon, component)
```

---

## Goals

Core 9 is a learning project focused on:

- Window management logic
- UI state architecture at scale
- Building OS-like interactions on the web

It's not super polished and probably still has bugs, but it's mainly for the learning experience and animations.
