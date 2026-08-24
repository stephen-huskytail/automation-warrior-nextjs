# Automation Warrior — LEARNINGS.md

Tracks all published blog posts by category and date. Check this file before every run to avoid duplicate slugs.

## Publication Control

Follow [`BLOG_PUBLISHING_SOP.md`](BLOG_PUBLISHING_SOP.md) for the authoritative remote/live dedupe, 48-hour cadence controller, recovery, and release-verification procedure. A local checkout or scheduler status alone is not publication proof.

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
| 2026-07-25 | gohighlevel-missed-call-text-back |
| 2026-08-07 | gohighlevel-calendar-setup |

### n8n
| Date | Slug |
|------|------|
| 2026-06-02 | what-is-n8n |
| 2026-06-13 | n8n-self-hosted-setup |
| 2026-07-03 | n8n-ai-agent-workflows |
| 2026-07-26 | n8n-error-handling-workflow-recovery |
| 2026-08-09 | n8n-webhook-security |

### AI/AGI/Claude
| Date | Slug |
|------|------|
| 2026-06-03 | what-is-agi |
| 2026-06-15 | claude-ai-review |
| 2026-07-07 | claude-vs-chatgpt |
| 2026-07-27 | claude-code-automation-business |
| 2026-08-10 | claude-mcp-guide |

### Ontraport
| Date | Slug |
|------|------|
| 2026-06-04 | ontraport-review |
| 2026-06-17 | ontraport-vs-gohighlevel |
| 2026-07-09 | ontraport-pricing |
| 2026-07-28 | ontraport-lead-scoring |
| 2026-08-12 | ontraport-campaign-automation |

### Kartra
| Date | Slug |
|------|------|
| 2026-06-05 | kartra-vs-gohighlevel |
| 2026-06-19 | kartra-vs-kajabi |
| 2026-07-05 | kartra-vs-clickfunnels |
| 2026-07-14 | kartra-pricing |
| 2026-07-29 | kartra-email-marketing |
| 2026-08-14 | kartra-landing-page-builder |

### Make.com
| Date | Slug |
|------|------|
| 2026-06-06 | make-vs-zapier |
| 2026-06-21 | make-com-tutorial-for-beginners |
| 2026-07-15 | make-com-pricing |
| 2026-07-30 | make-error-handling-reliable-automations |
| 2026-08-16 | make-data-stores-guide |

### OpenAI
| Date | Slug |
|------|------|
| 2026-06-07 | chatgpt-for-business |
| 2026-06-23 | chatgpt-api-guide |
| 2026-07-17 | openai-pricing |
| 2026-07-31 | custom-gpts-for-business |
| 2026-08-18 | openai-responses-api-guide |

### Zapier
| Date | Slug |
|------|------|
| 2026-06-08 | zapier-review |
| 2026-06-25 | zapier-pricing-guide |
| 2026-07-20 | zapier-agents-guide |
| 2026-08-01 | zapier-tables-guide |
| 2026-08-20 | zapier-paths-guide |

### Hermes AI
| Date | Slug |
|------|------|
| 2026-06-09 | what-is-hermes-ai |
| 2026-06-27 | hermes-ai-vs-chatgpt |
| 2026-07-22 | hermes-agent-business-automation |
| 2026-08-03 | hermes-agent-cron-jobs |
| 2026-08-22 | hermes-agent-skills-guide |

### Automation Tips
| Date | Slug |
|------|------|
| 2026-06-10 | business-automation-guide |
| 2026-06-29 | automated-lead-followup-system |
| 2026-07-23 | small-business-workflow-automation |
| 2026-07-24 | ai-automation-audit |
| 2026-08-05 | human-in-the-loop-automation |
| 2026-08-24 | business-process-documentation-for-automation |

## Draft Posts (not yet published)
| Slug | Category |
|------|----------|
| how-to-connect-chatgpt-to-n8n | n8n |
| kartra-review | Kartra |
| make-com-review | Make.com |
| n8n-vs-make | n8n |
| n8n-vs-zapier | n8n |

## Last Run
- **Date:** 2026-08-24
- **Category:** Automation Tips
- **Slug:** business-process-documentation-for-automation
- **Next category in rotation:** GoHighLevel
