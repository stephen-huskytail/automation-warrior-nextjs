import { FAQ } from "@/components/FAQ";

const items = [
  {
    q: "What does the agent actually do on day one?",
    a: "During setup we train it on your business — your services, pricing, tone, and tools. From day one it answers lead inquiries, drafts follow-ups and quotes for your approval, keeps your CRM updated, and sends you a morning brief. As it learns your preferences, you approve less and delegate more.",
  },
  {
    q: "How is this different from just using ChatGPT?",
    a: "ChatGPT waits for you to type. Your agent works on its own: it's connected to your actual tools, knows your business, acts on triggers like a new lead or an unpaid invoice, and reports back weekly. It's the difference between owning a toolbox and having an employee.",
  },
  {
    q: "What tools does it work with?",
    a: "It lives in Slack or Telegram and connects to the tools you already run your business on — GoHighLevel, Google Calendar, Gmail, and most common CRMs and booking systems. The AI Operator includes 2 integrations; the AI Operations Team includes 5.",
  },
  {
    q: "What happens if it makes a mistake?",
    a: "Anything outward-facing starts in approval mode — the agent drafts, you tap approve. You decide what it's allowed to do on its own, and you can expand that as trust builds. Every action is logged in your weekly report, and human support is included in every plan.",
  },
  {
    q: "Who sees my data?",
    a: "Your data stays in your accounts — the agent connects to your tools, it doesn't copy your business into ours. We never sell your data or use it to train public AI models.",
  },
  {
    q: "What if I cancel?",
    a: "No contracts — cancel anytime. And you keep the workflows, templates, and automations we built for you. If you outgrow the Operator, upgrade to the Operations Team anytime and we'll credit your setup fee.",
  },
];

export default function HomeFaqSection() {
  return (
    <section id="faq" className="approach-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <FAQ items={items} />
        </div>
      </div>
    </section>
  );
}
