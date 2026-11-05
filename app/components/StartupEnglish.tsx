"use client";

import { useState } from "react";
import Image from "next/image";
import "./StartupNext.css";
import "./StartupEnglish.css";

const mapExamples = [
  {
    id: "customer",
    question: "Who is the right customer for this business?",
    chain: ["Market", "Segments", "ICP", "Buying situation", "Customer needs", "Value proposition"],
    title: "Move from a broad audience to a specific buying situation.",
    text: "The system should connect market structure, segment attractiveness, the ideal customer profile and the job the customer is trying to accomplish. A customer definition is not treated as an isolated label: it affects positioning, offer design, channels and sales priorities.",
  },
  {
    id: "value",
    question: "Why should customers choose this company?",
    chain: ["Customer needs", "Alternatives", "Value proposition", "Positioning", "Evidence", "Offer"],
    title: "A claimed difference is not automatically a competitive advantage.",
    text: "The company’s promise must be compared with customer priorities and available alternatives. The system connects the value proposition with evidence that supports it and with the company’s actual ability to deliver what it promises.",
  },
  {
    id: "growth",
    question: "What is limiting growth?",
    chain: ["Business objective", "Market evidence", "Customer journey", "Sales process", "Capabilities", "Key constraint"],
    title: "Do not prescribe a marketing tool before understanding the constraint.",
    text: "Slow sales may be related to market choice, customer fit, product value, pricing, trust, distribution or execution. The system helps identify what needs to be investigated before committing resources to a solution.",
  },
] as const;

const managementTools = [
  {
    name: "Strategy",
    question: "Where should the company compete, and how?",
    detail: "Assess the business situation, markets, customers, value, positioning and strategic alternatives before choosing priorities.",
    result: "A reasoned strategic direction, priorities and initiatives.",
    stage: "Methodological framework developed; digital implementation is in progress.",
  },
  {
    name: "Annual plan",
    question: "What must happen during the year?",
    detail: "Translate strategic choices into objectives, initiatives, activities, responsibilities, timing, resources and measurable outcomes.",
    result: "An annual programme connected to strategic priorities.",
    stage: "Methodological framework developed; digital implementation is in progress.",
  },
  {
    name: "Budget",
    question: "What resources will the plan require?",
    detail: "Connect planned activities with quantities, costs, internal capacity, external spending and financial constraints.",
    result: "A resource plan and budget linked to activities.",
    stage: "Methodological model in development.",
  },
  {
    name: "Management & control",
    question: "What is working, and what should change?",
    detail: "Compare objectives with actual results, examine deviations, review assumptions and identify when plans or strategic decisions need reconsideration.",
    result: "A management cycle for monitoring, learning and corrective decisions.",
    stage: "Methodology and digital module are being designed.",
  },
] as const;

export default function StartupEnglish() {
  const [mapChoice, setMapChoice] = useState(0);
  const [managementChoice, setManagementChoice] = useState(0);
  const selectedMap = mapExamples[mapChoice];
  const selectedTool = managementTools[managementChoice];

  return (
    <main className="sn sn-en" id="top">
      <nav className="product-nav">
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Marketing Studio home">
            <span className="wordmark">
              <strong>MARKETING STUDIO</strong>
              <em>MAP · RESEARCH · STRATEGY · MANAGEMENT</em>
            </span>
          </a>
          <div className="nav-end">
            <div className="links">
              <a href="#architecture">Product</a>
              <a href="#map">Marketing Map</a>
              <a href="#management">Management</a>
              <a href="#stage">Development stage</a>
              <a href="#pilot">Pilot</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="startup-hero en-hero" id="intro">
        <div className="wrap">
          <a className="founder-intro" href="/es/about" aria-label="About the founder Vladimir Shashkov">
            <Image src="/about-photo.webp" alt="Vladimir Shashkov" width={80} height={80} />
            <span>
              <strong>Vladimir Shashkov</strong>
              <small>Founder · 25+ years in business and marketing</small>
              <em>Founder background →</em>
            </span>
          </a>

          <div className="new-status">
            <span className="new-status-dot" aria-hidden="true" />
            TECHNOLOGY PROJECT IN DEVELOPMENT · OPEN TO PILOT COLLABORATION
          </div>

          <div className="editorial-head">
            <div className="hero-mission">Professional marketing should not be a privilege of large companies.</div>
            <h1>Give a small business access to the work of a professional marketing team.</h1>
            <p className="founder-lead">
              Small companies face the same strategic questions as large ones: which markets to choose, which customers to serve, how to compete and where to invest. Yet they rarely have the resources for systematic research and marketing management.
            </p>
            <div className="new-proposition">
              <div className="new-proposition-label">ONE INTEGRATED SYSTEM · THREE CONNECTED CAPABILITIES</div>
              <h2>From a business question to informed marketing decisions.</h2>
              <p>
                Marketing Studio is being developed as a technology system that applies professional marketing methodologies to the specific context of each company — connecting research, marketing knowledge, strategy, planning and management.
              </p>
              <div className="founder-action">
                <a className="founder-primary" href="#pilot">Discuss a pilot <span aria-hidden="true">→</span></a>
                <a className="founder-secondary" href="#architecture">Explore the system <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="hero-proof">
              <span>DEVELOPMENT STATUS</span>
              <strong>
                Methodologies, research standards, structured tools and experimental prototypes exist. The fully integrated software platform is not yet operational.
              </strong>
            </div>
          </div>
        </div>
      </header>

      <section className="startup-section en-architecture" id="architecture">
        <div className="wrap">
          <div className="sectionhead">
            <div className="eyebrow">01 · PRODUCT ARCHITECTURE</div>
            <h2>Three capabilities. One company-specific marketing model.</h2>
            <p>
              Marketing Studio is not a collection of unrelated marketing apps. Its three areas are designed to work with the same evolving model of a company and to pass knowledge and results from one activity to another.
            </p>
          </div>
          <div className="en-architecture-grid">
            <article className="en-capability en-capability-primary">
              <span className="en-index">01</span>
              <div className="eyebrow">RESEARCH HARNESS</div>
              <h3>Business &amp; Competitive Intelligence</h3>
              <p>
                Structured research into companies, markets, customers, products and competitors using public information, source verification and repeatable analytical procedures.
              </p>
              <div className="en-output"><strong>Output</strong><span>Evidence-based research with sources, comparisons, findings and explicit knowledge limitations.</span></div>
            </article>
            <article className="en-capability">
              <span className="en-index">02</span>
              <div className="eyebrow">MARKETING MAP</div>
              <h3>Professional knowledge and company model</h3>
              <p>
                A connected structure of marketing concepts, methods, metrics and dependencies, applied to the specific entities of a company: its markets, segments, customers, products, value propositions and positioning.
              </p>
              <div className="en-output"><strong>Output</strong><span>A structured, evolving model of the company's marketing — not just a set of separate documents.</span></div>
            </article>
            <article className="en-capability">
              <span className="en-index">03</span>
              <div className="eyebrow">MARKETING MANAGEMENT SYSTEM</div>
              <h3>Strategy, planning, budget and control</h3>
              <p>
                Connected management tools that translate research and strategic choices into annual plans, resource allocation, execution and performance review.
              </p>
              <div className="en-output"><strong>Output</strong><span>Management decisions and plans connected to the same company model and supporting evidence.</span></div>
            </article>
          </div>
          <div className="en-architecture-note">
            <strong>The connecting principle</strong>
            <p>
              Research findings become reusable company knowledge. That knowledge informs strategic choices. Strategy shapes plans and budgets. Results and new evidence can trigger a review of earlier assumptions and decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="startup-section en-map-section" id="map">
        <div className="wrap">
          <div className="sectionhead">
            <div className="eyebrow">02 · MARKETING MAP</div>
            <h2>Marketing decisions are connected. The system must show how.</h2>
            <p>
              A business question rarely belongs to one marketing concept. Explore how a question can lead to related entities, methods and decisions.
            </p>
          </div>
          <div className="en-map-demo">
            <div className="en-map-questions" role="group" aria-label="Choose a business question">
              {mapExamples.map((item, index) => (
                <button key={item.id} type="button" className={mapChoice === index ? "is-selected" : ""} aria-pressed={mapChoice === index} onClick={() => setMapChoice(index)}>
                  <span>0{index + 1}</span><strong>{item.question}</strong><b aria-hidden="true">→</b>
                </button>
              ))}
            </div>
            <div className="en-map-answer" aria-live="polite">
              <div className="eyebrow">CONNECTED ENTITIES</div>
              <div className="en-map-chain">
                {selectedMap.chain.map((item, index) => <span key={item}>{item}{index < selectedMap.chain.length - 1 && <i aria-hidden="true">→</i>}</span>)}
              </div>
              <h3>{selectedMap.title}</h3>
              <p>{selectedMap.text}</p>
              <small>Concept demonstration. This interactive example does not run an actual company analysis or save results.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="startup-section en-management-section" id="management">
        <div className="wrap">
          <div className="sectionhead">
            <div className="eyebrow">03 · MARKETING MANAGEMENT</div>
            <h2>From understanding the market to managing action.</h2>
            <p>
              Four connected management instruments form a professional cycle. Each one depends on the decisions and information established before it.
            </p>
          </div>
          <div className="en-management-tabs" role="tablist" aria-label="Management instruments">
            {managementTools.map((tool, index) => (
              <button key={tool.name} type="button" role="tab" aria-selected={managementChoice === index} className={managementChoice === index ? "is-selected" : ""} onClick={() => setManagementChoice(index)}>
                <span>0{index + 1}</span><strong>{tool.name}</strong>
              </button>
            ))}
          </div>
          <div className="en-management-panel" role="tabpanel">
            <div>
              <div className="eyebrow">THE CENTRAL QUESTION</div>
              <h3>{selectedTool.question}</h3>
              <p>{selectedTool.detail}</p>
              <div className="en-output"><strong>Intended output</strong><span>{selectedTool.result}</span></div>
            </div>
            <aside>
              <span>DEVELOPMENT STATUS</span>
              <p>{selectedTool.stage}</p>
            </aside>
          </div>
          <div className="en-cycle-line">STRATEGY <i>→</i> ANNUAL PLAN <i>→</i> BUDGET <i>→</i> MANAGEMENT &amp; CONTROL <i>→</i> REVIEW</div>
        </div>
      </section>

      <section className="startup-section en-evidence-section">
        <div className="wrap">
          <div className="sectionhead">
            <div className="eyebrow">04 · EVIDENCE AND TRACEABILITY</div>
            <h2>From public sources to decisions — without hiding uncertainty.</h2>
            <p>
              The research approach is designed to distinguish documented facts, company claims, analytical interpretations, hypotheses and unanswered questions.
            </p>
          </div>
          <div className="en-evidence-flow">
            {["Public source", "Verified fact", "Comparison & context", "Finding & limitation", "Decision to consider"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
          </div>
          <p className="en-evidence-note">
            A product catalogue does not prove sales. A project reference does not automatically establish who purchased the product. A hypothesis is not presented as a fact. Important findings should remain traceable to their sources and dates.
          </p>
        </div>
      </section>

      <section className="startup-section en-company-model">
        <div className="wrap">
          <div className="sectionhead">
            <div className="eyebrow">05 · THE COMPANY'S MARKETING KNOWLEDGE</div>
            <h2>A living marketing model, not a folder of disconnected reports.</h2>
            <p>
              Research, definitions, assumptions, decisions and results are intended to accumulate in one structured company knowledge environment — so that previous work can inform the next question.
            </p>
          </div>
          <div className="en-company-model-grid">
            <div><span>MARKET</span><strong>Markets &amp; alternatives</strong><small>Demand, competitors, industry forces</small></div>
            <div><span>CUSTOMER</span><strong>Segments &amp; buying needs</strong><small>ICP, decision-makers, jobs and criteria</small></div>
            <div><span>OFFER</span><strong>Products &amp; value</strong><small>Value proposition, positioning, evidence</small></div>
            <div><span>GO-TO-MARKET</span><strong>Sales &amp; channels</strong><small>Routes to market, promotion, customer journey</small></div>
            <div><span>MANAGEMENT</span><strong>Strategy &amp; resources</strong><small>Objectives, initiatives, plans, budget</small></div>
            <div><span>LEARNING</span><strong>Results &amp; change</strong><small>Performance, assumptions, revisions</small></div>
          </div>
          <div className="en-company-book">
            <strong>The Marketing Book of the Company</strong>
            <p>
              A proposed consolidated view of the company's marketing model — a way to understand its current state, decisions, evidence and priorities. It is a product concept under development, not a finished automated feature.
            </p>
          </div>
        </div>
      </section>

      <section className="startup-section en-stage-section" id="stage">
        <div className="wrap">
          <div className="sectionhead">
            <div className="eyebrow">06 · CURRENT DEVELOPMENT STAGE</div>
            <h2>What exists today — and what is still being built.</h2>
            <p>
              Marketing Studio is not presented as a finished SaaS platform. The current work combines methodological assets, research experiments, specifications and early software components.
            </p>
          </div>
          <div className="en-stage-grid">
            <article><span className="en-stage-mark">01</span><h3>Methodological foundations</h3><p>Structured marketing strategy and annual planning methods, professional knowledge sources, analytical procedures and validation rules.</p><b>Developed / documented</b></article>
            <article><span className="en-stage-mark">02</span><h3>Research and analytical experiments</h3><p>Research Harness workflows, structured report architecture, source traceability principles and experimental company research runs.</p><b>Developed / tested experimentally</b></article>
            <article><span className="en-stage-mark">03</span><h3>Integrated product</h3><p>Connecting research, Marketing Map and management tools into one company-specific workflow, with reusable data and consistent decisions.</p><b>In development</b></article>
            <article><span className="en-stage-mark">04</span><h3>Commercial validation</h3><p>Customer discovery, pilot testing, willingness-to-pay research and refinement of the business model with Chilean SMEs.</p><b>Next validation stage</b></article>
          </div>
        </div>
      </section>

      <section className="startup-section en-founder-section">
        <div className="wrap founder-editorial">
          <Image src="/about-photo.webp" alt="Vladimir Shashkov, founder of Marketing Studio" width={640} height={800} />
          <div>
            <div className="eyebrow">THE FOUNDER</div>
            <h2>Built from experience inside businesses.</h2>
            <p className="founder-voice">
              I have spent more than 25 years working across marketing, business development, technology and operations. My experience has shown me that marketing decisions cannot be separated from a company's products, sales, capabilities and ability to deliver on its promises.
            </p>
            <div className="founder-credentials">
              <div>25+ years in business development, marketing and management</div>
              <div>Executive MBA · Graduate School of Management, Saint Petersburg State University</div>
              <div>Operations Management · HKUST Business School, Hong Kong</div>
              <div>Experience across industrial, technology, consumer and service businesses</div>
            </div>
            <div className="founder-name">Vladimir Shashkov <span>· Founder</span></div>
            <a href="mailto:vladimir.v.shashkov@gmail.com?subject=Marketing%20Studio%20-%20Chile%20pilot">Contact the founder →</a>
          </div>
        </div>
      </section>

      <section className="startup-section pilot en-pilot-section" id="pilot">
        <div className="wrap">
          <div className="collab-intro">
            <div>
              <div className="eyebrow">CHILE · PILOT COLLABORATION</div>
              <h2>Help test professional marketing tools against real SME challenges.</h2>
            </div>
            <p>
              We are interested in speaking with Chilean business owners, SME managers, marketing professionals, consultants and potential technology partners. The goal is to understand real workflows, test selected product capabilities and learn where the system creates practical value.
            </p>
          </div>
          <div className="en-pilot-grid">
            <article><span>01 / SMEs</span><h3>For business owners and managers</h3><p>Bring a real marketing or business question. Help assess whether the research and decision process is useful for your company.</p><a href="mailto:vladimir.v.shashkov@gmail.com?subject=Marketing%20Studio%20-%20SME%20pilot">Discuss an SME pilot →</a></article>
            <article><span>02 / PROFESSIONALS</span><h3>For marketers and consultants</h3><p>Review the methodology, challenge the analytical logic and identify what would be needed for professional use.</p><a href="mailto:vladimir.v.shashkov@gmail.com?subject=Marketing%20Studio%20-%20Professional%20feedback">Share professional feedback →</a></article>
            <article><span>03 / PARTNERS</span><h3>For ecosystem and technology partners</h3><p>Explore collaboration around product development, access to SMEs, research and market validation in Chile.</p><a href="mailto:vladimir.v.shashkov@gmail.com?subject=Marketing%20Studio%20-%20Partnership">Explore collaboration →</a></article>
          </div>
          <div className="en-pilot-footer">
            <strong>Start with one real business question.</strong>
            <span>Direct contact with the founder · No purchase commitment</span>
          </div>
        </div>
      </section>

      <footer className="en-footer">
        <div className="wrap">
          <a className="brand" href="#top"><strong>MARKETING STUDIO</strong><span>Professional marketing management for SMEs</span></a>
          <div><a href="mailto:vladimir.v.shashkov@gmail.com">Email</a><a href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Telegram</a><a href="/es">Founder website</a></div>
          <small>Vladimir Shashkov · Marketing Studio · Project in development</small>
        </div>
      </footer>
    </main>
  );
}
