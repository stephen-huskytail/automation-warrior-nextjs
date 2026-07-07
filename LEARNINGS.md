# Automation Warrior — LEARNINGS.md

Tracks all published blog posts by category and date. Check this file before every run to avoid duplicate slugs.

## Affiliate Link Policy (2026-07-03)

- **Never paste raw affiliate URLs in posts.** Always link through the central redirect: `/go/<tool>`. Tracking codes live in one place: `app/go/[slug]/route.ts`.
- Available slugs: `/go/gohighlevel`, `/go/kartra`, `/go/ontraport`. More (n8n, make, zapier, openai, anthropic) will be added as affiliate codes are obtained — check the route file before linking.
- **Do not add inline disclosure blockquotes** (`> *Disclosure: ...*`) — the post template auto-renders a disclosure box on any post containing affiliate links.
- Review posts must set frontmatter `schema_type: "Review"`, `tool_name`, and `rating` (only if a numeric rating is stated in the post body) to get review rich snippets.
- Internal links must be relative paths (`/blog/foo`, `/book-a-call`), never `https://automationwarrior.ai/...`. Exception: a link to the bare homepage must be written `https://www.automationwarrior.ai/` (a bare `](/)` breaks the Velite build).

## Category Rotation Order

GoHighLevel → n8n → AI/AGI/Claude → Ontraport → Kartra → Make.com → OpenAI → Zapier → Hermes AI → Automation Tips → [repeat]

## Published Posts

### GoHighLevel
| Date | Slug |
|------|------|
| 2026-05-09 | go-high-level-review |
| 2026-05-11 | go-high-level-vs-hubspot |
| 2026-05-16 | go-high-level-vs-activecampaign |
| 2026-05-24 | what-is-gohighlevel |
| 2026-05-24 | gohighlevel-pricing |
| 2026-05-24 | gohighlevel-free-trial |
| 2026-05-24 | gohighlevel-for-agencies |
| 2026-05-24 | gohighlevel-for-local-business |
| 2026-05-24 | gohighlevel-ai-agents |
| 2026-05-24 | gohighlevel-automation-workflows |
| 2026-05-24 | gohighlevel-saas-mode |
| 2026-05-24 | gohighlevel-vs-clickfunnels |
| 2026-05-24 | gohighlevel-vs-salesforce |
| 2026-06-11 | gohighlevel-crm-tutorial |
| 2026-07-01 | gohighlevel-email-marketing |

### n8n
| Date | Slug |
|------|------|
| 2026-06-02 | what-is-n8n |
| 2026-06-13 | n8n-self-hosted-setup |
| 2026-07-03 | n8n-ai-agent-workflows |

### AI/AGI/Claude
| Date | Slug |
|------|------|
| 2026-06-03 | what-is-agi |
| 2026-06-15 | claude-ai-review |
| 2026-07-07 | claude-vs-chatgpt |

### Ontraport
| Date | Slug |
|------|------|
| 2026-06-04 | ontraport-review |
| 2026-06-17 | ontraport-vs-gohighlevel |

### Kartra
| Date | Slug |
|------|------|
| 2026-06-05 | kartra-vs-gohighlevel |
| 2026-06-19 | kartra-vs-kajabi |

### Make.com
| Date | Slug |
|------|------|
| 2026-06-06 | make-vs-zapier |
| 2026-06-21 | make-com-tutorial-for-beginners |

### OpenAI
| Date | Slug |
|------|------|
| 2026-06-07 | chatgpt-for-business |
| 2026-06-23 | chatgpt-api-guide |

### Zapier
| Date | Slug |
|------|------|
| 2026-06-08 | zapier-review |
| 2026-06-25 | zapier-pricing-guide |

### Hermes AI
| Date | Slug |
|------|------|
| 2026-06-09 | what-is-hermes-ai |
| 2026-06-27 | hermes-ai-vs-chatgpt |

### Automation Tips
| Date | Slug |
|------|------|
| 2026-06-10 | business-automation-guide |
| 2026-06-29 | automated-lead-followup-system |

## Draft Posts (not yet published)
| Slug | Category |
|------|----------|
| how-to-connect-chatgpt-to-n8n | n8n |
| kartra-review | Kartra |
| make-com-review | Make.com |
| n8n-vs-make | n8n |
| n8n-vs-zapier | n8n |

## Last Run
- **Date:** 2026-07-07
- **Category:** AI/AGI/Claude
- **Slug:** claude-vs-chatgpt
- **Next category in rotation:** Ontraport
