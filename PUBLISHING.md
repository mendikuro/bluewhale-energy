# Publishing This Site on GitHub Pages — Step by Step

Your website ships with an automated GitHub Actions workflow
(`.github/workflows/deploy.yml`). After the one-time setup below, every
`git push` rebuilds and republishes the site automatically.

> **What you need:** a free [GitHub](https://github.com) account, and
> [Git](https://git-scm.com/downloads) installed on your computer.

---

## Part A — One-time setup (about 10 minutes)

### 1. Create the GitHub repository
1. Go to <https://github.com/new> (make sure you are signed in).
2. **Repository name:** e.g. `bluewhale-energy`
   *(Tip: if you name it exactly `<your-username>.github.io` the site will
   be served from the root of that domain instead of a sub-folder — the
   workflow handles both cases automatically.)*
3. Visibility: **Public** (required for free GitHub Pages).
4. Do **not** tick "Add a README" — you already have one.
5. Click **Create repository**. Keep the page open; you will need the URL.

### 2. Put the project into the repository
Unzip the downloaded project folder, open a terminal inside it, then run
(replace `YOUR-USERNAME` and the repo name with yours):

```bash
git init
git add .
git commit -m "BlueWhale Energy website — initial release"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bluewhale-energy.git
git push -u origin main
```

When prompted for credentials, use your GitHub username and a
**Personal Access Token** (not your password): GitHub → Settings →
Developer settings → Personal access tokens → *Generate new token (classic)*
with the `repo` scope. Alternatively use [GitHub Desktop](https://desktop.github.com)
or VS Code's built-in Git UI if you prefer clicking over commands.

### 3. Turn on GitHub Pages (one toggle)
1. In your repo on github.com go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select
   **GitHub Actions** (not "Deploy from a branch").
3. Done. Go to the **Actions** tab — the *Deploy to GitHub Pages* workflow
   is already running.

### 4. Open your live site
After ~2–3 minutes the workflow shows a green check. Your site is live at:

```
https://YOUR-USERNAME.github.io/bluewhale-energy/
```

The exact URL is also shown at the top of the workflow run summary
(under **Deploy → github-pages**).

---

## Part B — Publishing future changes

1. Edit any file (most copy lives in `src/components/site/data.ts`).
2. Then:

```bash
git add .
git commit -m "Describe your change"
git push
```

The workflow rebuilds and republishes automatically. Your new content is
live ~2–3 minutes later.

---

## The contact form on GitHub Pages

GitHub Pages hosts static files only — there is no server to store form
submissions. The form handles this automatically:

| Configuration | What happens |
|---|---|
| Nothing configured | Submissions open the visitor's email app, pre-addressed to `info@blue-whale.com.ng` with all fields filled in |
| `NEXT_PUBLIC_FORM_ENDPOINT` set | Submissions are sent to a form service (Formspree, Getform, Basin…) |

### Recommended: activate Formspree (free, 2 minutes)
1. Sign up at <https://formspree.io> → **New form** → name it
   "BlueWhale Website" → copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. In your repo: **Settings → Secrets and variables → Actions →
   Variables tab → New repository variable**:
   - Name: `NEXT_PUBLIC_FORM_ENDPOINT`
   - Secret/Value: your Formspree URL
3. The workflow reads it automatically — but one line must be added.
   Open `.github/workflows/deploy.yml` and under the `Build static site`
   step's `env:` block add:

   ```yaml
   NEXT_PUBLIC_FORM_ENDPOINT: ${{ vars.NEXT_PUBLIC_FORM_ENDPOINT }}
   ```

4. Commit and push. Form submissions now arrive in your Formspree inbox
   **and** are emailed to you — no backend needed.

> Alternative for a *fully working* contact database later: deploy the same
> repository to [Vercel](https://vercel.com) (free tier) which runs the
> Node backend, or self-host with `bun run build && bun start`.

---

## Using a custom domain (e.g. `www.bluewhaleenergy.com`)

1. Buy the domain at any registrar (e.g. Whogohost, Namecheap, Cloudflare).
2. In your repo: **Settings → Pages → Custom domain** → enter
   `www.yourdomain.com` → **Save**.
3. At your registrar, create a **CNAME record**: `www` →
   `YOUR-USERNAME.github.io`.
4. Tick **Enforce HTTPS** once the certificate is issued.
5. The workflow's base-path logic keeps working — with a custom domain the
   site is served from the root, and if the repo is *not* named
   `<user>.github.io` you must add one repository *variable*:
   **Settings → Secrets and variables → Actions → Variables → New variable**,
   Name `NEXT_PUBLIC_BASE_PATH`, leave its value **empty**, and add this
   line to the build step's `env:` block in the workflow:

   ```yaml
   NEXT_PUBLIC_BASE_PATH: ${{ vars.NEXT_PUBLIC_BASE_PATH }}
   ```

   (This overrides the auto-derived sub-path with an empty one.)

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Actions run fails at *Install dependencies* | Run `bun install` locally, commit the updated `bun.lock`, push again |
| Site loads but CSS/JS/images 404 | You renamed the repo — the base path is auto-derived from the repo name, so no action is needed; just re-run the workflow (Actions → *Deploy to GitHub Pages* → **Run workflow**) |
| 404 on the site URL | Confirm Settings → Pages → Source is **GitHub Actions**, and the workflow finished green |
| Form shows "Opening your email app" instead of Formspree | The `NEXT_PUBLIC_FORM_ENDPOINT` variable/line from Part B was not added |
| Old content still showing | Hard-refresh (Ctrl+Shift+R); GitHub Pages caches briefly |
