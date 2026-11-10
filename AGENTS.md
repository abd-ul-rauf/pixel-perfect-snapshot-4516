<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- Company content (facts, divisions, products, certifications, contacts) lives only in `src/lib/site.ts`; pages read from it so facts stay consistent and verifiable against magnaprocessing.com.
- All imagery is registered in `src/lib/images.ts` with a `source` of `magna` (own facility photo) or `illustrative`; images render through `SiteImage`/`PageHero`, which label them, so representative photos are never presented as Magna's facility.
- Division and product detail pages are data-driven dynamic routes (`divisions.$slug.tsx`, `products.$slug.tsx`) that throw `notFound()` for unknown slugs.
- The contact form has no backend: it validates with `src/lib/inquiry.ts`, shows a clearly labelled demo state, and offers a prefilled mailto — never claim delivery until a real email integration is added.
- Scroll reveals use the IntersectionObserver `Reveal` component and CSS utilities in `src/styles.css` (no animation library) and respect reduced motion.
