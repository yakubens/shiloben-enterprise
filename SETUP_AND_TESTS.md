# SHILOBEN ENTERPRISE website

This is a complete static website: ten HTML pages, shared CSS and JavaScript, a favicon, and the supplied cement photographs. It needs no build step, database, API keys or paid backend. The cement and truck hire forms prepare WhatsApp drafts; they do not store enquiries or create transactions.

## Preview on your computer

Extract the ZIP. Double-click index.html to explore the website. For a local server, run `python -m http.server 8000` in the extracted folder and open http://localhost:8000. Product links, forms and navigation work with relative paths, including under the existing GitHub Pages repository path.

## Publish when approved

1. Download a backup of the current GitHub repository before replacement.
2. Open https://github.com/yakubens/shiloben-enterprise and sign in.
3. Upload the contents of this extracted ZIP to the repository root. Upload the images folder intact; do not upload only the ZIP, or nest the website in another folder.
4. Commit the changes. Check Settings → Pages for the existing publication source and wait for the deployment to finish.
5. Open https://yakubens.github.io/shiloben-enterprise/ and check the pages on your phone and laptop.

No live files or DNS settings were changed while producing this package. GitHub write access is unavailable in this session. The website is not published yet.

## Connect shiloben.com after approval

Verify domain ownership in GitHub account Settings → Pages using the exact TXT record GitHub provides. Then set the repository’s Settings → Pages → Custom domain to shiloben.com before changing DNS.

In Porkbun, add four A records with the Host field blank, using these values:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Add a CNAME with Host `www` and target `yakubens.github.io` (without the repository path). Replace only conflicting records for the root or www. Preserve email records and every `system` subdomain and validation record. Do not change nameservers or use wildcard records. Allow DNS to propagate, check GitHub’s domain status and enable Enforce HTTPS when available.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Code checks performed

- JavaScript syntax check passed.
- All ten pages’ local links, images, stylesheet, script and anchor references resolve to packaged files.
- Unique element IDs and page titles/descriptions checked.
- Eleven form scenarios passed using a simulated DOM: Paper only, Sack only, both, empty quantities, zero quantities, negative quantities, fractional quantities, invalid numeric text, missing truck details, completed truck details, and brand-specific grade options.
- Invalid form input remains available for correction. Editing an enquiry hides an outdated draft.
- Draft links use WhatsApp number 233543817111 and preserve entered text and quantity units.
- No test enquiry was sent. No payment, order or booking was created.
- The public pages contain no private management-system link, credentials or integrations.

## Browser checks performed

- All ten pages rendered in a browser at phone (390 px), tablet (768 px) and laptop (1365 px) viewport widths with no horizontal overflow.
- The mobile menu opened and closed with Escape.
- The GHACEM 42.5R quote link preselected the correct brand and grade; the generated WhatsApp draft included the grade and the single-blank-line spacing between fields.
- The website pages and key logo/truck/cement image assets returned successfully from a local HTTP server.
- No test enquiry was sent.

Before publishing, optionally complete a final manual check at 200% text zoom and on your own devices. Confirm that external phone, email and WhatsApp links open the expected apps. After deployment, check the published GitHub Pages URL. DNS and the custom domain remain separate steps requiring owner approval.

## Maintaining the website

Contact details and shared navigation/footer are embedded in each HTML page. Update every page if these change. Shared styling is in style.css and form/menu behaviour is in script.js. Replace product photographs in images only with accurate brand/grade photos.

The product photos show GHACEM Super Strong 42.5R and 32.5R cement bags. UNICEM 42.5R appears only as an availability enquiry. Other grades for GHACEM and SAFE CEMENT are requests to discuss with sales. No technical suitability claims or fixed prices are published.

Exact depot coordinates, official opening hours, business photographs and approved testimonials were not supplied. They were not invented. The supplied SHILOBEN emblem appears in the shared header, footer and site icon alongside the readable company name; the map link is explicitly labelled as Bekwai town.
