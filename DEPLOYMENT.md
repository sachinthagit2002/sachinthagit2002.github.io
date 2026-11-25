# Deployment & Custom Domain Guide — `sachinthadanuka.com`

This portfolio is built with **React + TypeScript + Vite + Tailwind CSS** and outputs a static production bundle to `dist/`.

---

## 1. Local Development & Production Build

```bash
# Install dependencies (first time only)
npm install

# Run local development server
npm run dev

# Type-check and build production bundle into ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## 2. Option A: Deploy to Vercel (Recommended)

Vercel provides automatic HTTPS, global CDN, clean URLs (`vercel.json` is already configured), and free custom domains.

1. Push this project (`c:\Users\Danuka\Desktop\portpoliyo`) to a GitHub repository (for example, `sachinthagit2002/portfolio`).
2. Sign in to [https://vercel.com](https://vercel.com) with GitHub and click **Add New → Project**.
3. Import the repository. Vercel auto-detects **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.
5. Once live on `*.vercel.app`, go to **Project Settings → Domains** and add:
   - `sachinthadanuka.com`
   - `www.sachinthadanuka.com` (redirect to `sachinthadanuka.com`)

### DNS Records for Vercel (configure at your domain registrar)

| Type | Name / Host | Value / Target | TTL |
|------|-------------|----------------|-----|
| `A` | `@` | `76.76.21.21` (or exact IP shown by Vercel Domains panel) | Auto / 300 |
| `CNAME` | `www` | `cname.vercel-dns.com` | Auto / 300 |

> **Note:** Always verify the exact `A` and `CNAME` values shown inside your Vercel **Project → Settings → Domains** screen, as Vercel may assign a project-specific DNS target.

---

## 3. Option B: Deploy to GitHub Pages (`sachinthagi2002.github.io`)

`public/CNAME` is already included with `sachinthadanuka.com`.

1. Push the project to `https://github.com/sachinthagit2002/sachinthagi2002.github.io.git`.
2. Add a GitHub Actions workflow (`.github/workflows/deploy.yml`) or publish the `dist/` folder to `gh-pages`.
3. In GitHub **Repository Settings → Pages**:
   - Set **Custom domain** to `sachinthadanuka.com`.
   - Enable **Enforce HTTPS** once DNS propagates.

### DNS Records for GitHub Pages (configure at your domain registrar)

| Type | Name / Host | Value |
|------|-------------|-------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `sachinthagit2002.github.io` |

---

## 4. Enabling HTTPS & Testing the Live Site

1. Wait 5–30 minutes (up to 24h max) for DNS propagation.
2. Verify DNS resolution in PowerShell:
   ```powershell
   nslookup sachinthadanuka.com
   nslookup www.sachinthadanuka.com
   ```
3. Confirm Vercel / GitHub Pages shows **Valid Configuration** and **SSL Certificate Issued (Let's Encrypt)**.
4. Open Chrome and test:
   - `https://sachinthadanuka.com` loads with padlock (HTTPS) and no mixed-content or console errors.
   - `https://www.sachinthadanuka.com` redirects cleanly to `https://sachinthadanuka.com`.
   - **Download CV (PDF)** and **Download DOCX** buttons download `/cv/Sachintha-Danuka-Karunathilaka-CV.pdf` and `.docx`.
   - All navigation links, dark/light mode toggle, Auto Valuate benchmark tabs/charts, and GitHub/LinkedIn links work across desktop and mobile viewports.
   - `https://sachinthadanuka.com/robots.txt` and `https://sachinthadanuka.com/sitemap.xml` return `200 OK`.
