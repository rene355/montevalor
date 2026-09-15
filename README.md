# Montevalor

Static bilingual website for https://montevalor.com.

## Pages

English: `index.html`, `about.html`, `services.html`, `investment-focus.html`, `contact.html`.
Dutch: equivalent pages under `nl/`. Language links preserve the current page. The former `index-nl.html` redirects to `nl/`.

Shared presentation: `assets/site.css` and `assets/site.js`. The original `logo.jpg` is used unchanged. No external fonts, libraries, analytics, build step or form service is required. Email buttons open the visitor's email application; there is no server-side form submission.

## GitHub Pages

Publish the `main` branch from `/ (root)`. `.nojekyll` enables direct static serving. `CNAME` sets `montevalor.com` as the primary domain. DNS for the apex and www must point to GitHub Pages; enable HTTPS in repository Pages settings when its certificate is ready. GitHub Pages manages the www/apex redirect when DNS is configured accordingly.

All regular page and asset links are relative for both custom-domain hosting and repository previews. SEO canonicals, alternate languages, social metadata and the sitemap use https://montevalor.com. The 404 page uses absolute production links to work at arbitrary missing paths.

Preview locally with `python3 -m http.server 8000` from this directory. Keep both language versions, the sitemap and shared navigation in sync when adding pages.
