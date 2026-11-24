# Harsh Antarkar · Portfolio

A personal portfolio made to look like a **Windows 95 desktop**.

## The idea

Most portfolios look the same: a hero banner, some cards and a contact form. I wanted mine to feel like a place you explore instead of a page you scroll past.

Windows 95 was the first computer interface many of us remember. It's clear, a bit nostalgic, and everyone already knows how to use it. So this portfolio is a desktop:

- **Every section is a window.** About me, Tech stack, Projects, Experience, Certifications, Learning now and Let's connect each have their own title bar, status bar and caption buttons. Hover over or click a window and its title bar turns navy, just like the real thing.
- **Windows behave like windows.** You can minimize a section to the taskbar and restore it, maximize it to fill the screen (or double-click its title bar), and press Esc to go back.
- **The taskbar is the navigation.** The Start menu jumps to any section, the taskbar switches between the portfolio and the blog, and there's a clock in the tray.
- **Desktop icons** near the top give a second way to jump around.
- **Paper for reading.** Chrome uses the pixel-style Win95 font, but anything you're meant to read sits on a warm "typewriter sheet" in a monospace font, so it stays comfortable to read.
- **Let's connect** shows my socials as a little *Network Neighborhood* tree, next to a compose-mail window that opens your email app.
- **Blog** is a folder view with two categories: *Tech* and *Me*.

## Design rules

To keep it believable, the site sticks to the Windows 95 look:

- Only Win95 grays, white paper, ink and **one accent colour: navy `#000080`**. No gradients; those arrived with Windows 98.
- Beveled 3D edges instead of borders, square corners, and buttons that visibly press in when clicked.
- Crisp, un-smoothed UI text, and a dotted focus rectangle for keyboard users.
- Motion is small and stays off if your system asks for reduced motion.

## Built to be light

- A fully static site with no backend and no tracking.
- Very little JavaScript, used only for window behaviour, the project filter and the clock. With JavaScript off, every section still shows and every link still works.
- Works on phones down to 375px wide. On small screens, the windows stack in one column.

## Tech

[Astro](https://astro.build) · [95css](https://github.com/YoshiMannaert/95CSS) · [Iconify](https://iconify.design) (Lucide + Simple Icons) · hosted on Vercel

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Contact

Reach me through the *Let's connect* window on the site, or on [LinkedIn](https://www.linkedin.com/in/harsh-antarkar/) and [GitHub](https://github.com/harribhaupotter).
