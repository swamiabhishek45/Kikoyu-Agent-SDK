import React, { useState } from 'react';
import Link from 'next/link';

const CODE_EXAMPLES = {
  agent: `import { Agent, Runner } from '@kikoyu/core';

// 1. Build agent with Kikoyu API Key
const agent = Agent.builder()
  .setName('Assistant')
  .setInstructions('You are a helpful AI assistant that responds in concise sentences.')
  .setApiKey(process.env.KIKOYU_API_KEY!)
  .build();

// 2. Execute multi-turn loop
const runner = new Runner();
const result = await runner.run(agent, 'Hello! Who are you?');

console.log(result.text);`,
  tools: `import { createTool, z } from '@kikoyu/core';

// Type-safe tool definition with Zod schema validation
export const getWeatherTool = createTool({
  name: 'get_weather',
  description: 'Lookup current weather conditions for a city.',
  parameters: z.object({
    location: z.string().describe('City name, e.g. Tokyo, Paris'),
    unit: z.enum(['celsius', 'fahrenheit']).default('celsius'),
  }),
  execute: async ({ location, unit }) => {
    return { location, temp: unit === 'fahrenheit' ? '72°F' : '22°C', condition: 'Sunny' };
  },
});`,
  handoffs: `import { Agent, createHandoff, Runner } from '@kikoyu/core';

// 1. Specialist Agent
const mathSpecialist = Agent.builder()
  .setName('Math Specialist')
  .setInstructions('Solve complex math expressions step-by-step.')
  .build();

// 2. Router Agent with Handoff
const triageRouter = Agent.builder()
  .setName('Triage Router')
  .setInstructions('Route math questions to Math Specialist.')
  .withHandoffs(createHandoff(mathSpecialist))
  .build();`,
  stream: `import { Agent, Runner } from '@kikoyu/core';

const runner = new Runner();

// Real-time event streaming via AsyncGenerator
for await (const event of runner.stream(agent, 'Write a poem about space')) {
  if (event.type === 'text_delta') {
    process.stdout.write(event.delta);
  } else if (event.type === 'tool_call_started') {
    console.log(\`Executing tool: \${event.toolCall.name}\`);
  }
}`,
};

const SIMULATED_LOGS = [
  '⚡ [Kikoyu Engine] Initializing Agent "Triage Router"...',
  '🛡️ [Input Guardrail] Checking prompt safety... PASSED (0.4ms)',
  '🤖 [Model Stream] Sending completion request (gpt-4o-mini)...',
  '⚡ [Tool Call Started] get_weather({"location": "Tokyo", "unit": "celsius"})',
  '✅ [Tool Call Finished] get_weather -> {"temp": "22°C", "condition": "Sunny"}',
  '🔄 [Handoff Occurred] Triage Router -> Travel Specialist',
  '💬 [Text Delta] "The weather in Tokyo is currently 22°C and sunny."',
  '✨ [Run Complete] Execution finished in 480ms. Tokens: 142',
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'agent' | 'tools' | 'handoffs' | 'stream'>('agent');
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handleCopy = () => {
    navigator.clipboard.writeText('pnpm add @kikoyu/core zod');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[activeTab]);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);

    SIMULATED_LOGS.forEach((log, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === SIMULATED_LOGS.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <div className="vk-layout">
      {/* Top Navbar Header */}
      <header className="vk-header">
        <div className="vk-header-content">
          <Link href="/" className="vk-brand">
            <div className="vk-brand-icon">K</div>
            <div>
              <span className="vk-brand-name">Kikoyu</span>
              <span className="vk-brand-tag">Agent SDK</span>
            </div>
          </Link>

          <nav className="vk-nav-links">
            <Link href="/concepts/agent" className="vk-nav-link">Quickstart</Link>
            <Link href="/concepts/agent" className="vk-nav-link">Concepts</Link>
            <Link href="/api-reference/README" className="vk-nav-link">API Reference</Link>
            <Link href="/examples/single-agent-tools" className="vk-nav-link">Examples</Link>
            <a href="https://github.com/swamiabhishek45/Kikoyu-Agent-SDK" target="_blank" rel="noreferrer" className="vk-nav-link">GitHub</a>
          </nav>

          <div>
            <Link href="/concepts/agent" className="vk-btn-primary" style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>
              Get Started →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="vk-main">
        {/* Hero Section */}
        <section className="vk-hero">
          <div className="vk-badge">
            <span className="vk-badge-dot"></span>
            <span>Kikoyu Agent SDK v0.1.0 is now live</span>
          </div>

          <h1 className="vk-hero-title">
            Develop AI Agents with Type-Safe Precision.
          </h1>

          <p className="vk-hero-subtitle">
            The lightweight, production-grade Agent SDK for Node.js & TypeScript. Build tool-calling loops, zero-latency guardrails, multi-agent handoffs, session memory, and streaming in seconds.
          </p>

          {/* Action CTAs */}
          <div className="vk-cta-group">
            <Link href="/concepts/agent" className="vk-btn-primary">
              Start Building Now →
            </Link>

            <button onClick={handleCopy} className="vk-btn-secondary">
              <span>{copied ? '✓ Copied to clipboard!' : 'pnpm add @kikoyu/core zod'}</span>
            </button>
          </div>
        </section>

        {/* Interactive Code Window & Live Runner */}
        <section className="vk-code-window">
          {/* Header Bar */}
          <div className="vk-code-header">
            <div className="vk-dots">
              <span className="vk-dot vk-dot-red"></span>
              <span className="vk-dot vk-dot-yellow"></span>
              <span className="vk-dot vk-dot-green"></span>
            </div>

            <div className="vk-tab-bar">
              {(['agent', 'tools', 'handoffs', 'stream'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`vk-tab-btn ${activeTab === tab ? 'vk-tab-btn-active' : ''}`}
                >
                  {tab}.ts
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={handleCopySnippet}
                className="vk-btn-secondary"
                style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '6px' }}
              >
                {codeCopied ? '✓ Copied' : '📋 Copy Code'}
              </button>

              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="vk-run-btn"
              >
                {isRunning ? '⏳ Running...' : '⚡ Run Agent'}
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="vk-code-body">
            <pre><code>{CODE_EXAMPLES[activeTab]}</code></pre>
          </div>

          {/* Terminal Output */}
          <div className="vk-terminal">
            <div className="vk-terminal-top">
              <span>LIVE AGENT TERMINAL OUTPUT</span>
              <span>{isRunning ? 'STATUS: EXECUTING LOOP' : 'STATUS: READY'}</span>
            </div>
            {logs.length === 0 ? (
              <div style={{ color: '#555', fontStyle: 'italic' }}>
                Click "⚡ Run Agent" above to simulate real-time agent execution...
              </div>
            ) : (
              <div>
                {logs.map((log, i) => (
                  <div key={i} className="vk-terminal-log">{log}</div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Metrics Banner */}
        <section className="vk-metrics-grid">
          <div>
            <div className="vk-metric-num" style={{ color: '#0070f3' }}>0ms</div>
            <div className="vk-metric-label">Cold-Start Overhead</div>
          </div>
          <div>
            <div className="vk-metric-num" style={{ color: '#50e3c2' }}>100%</div>
            <div className="vk-metric-label">Type-Safe Zod Schemas</div>
          </div>
          <div>
            <div className="vk-metric-num" style={{ color: '#ffffff' }}>22 / 22</div>
            <div className="vk-metric-label">Verified Test Suite</div>
          </div>
          <div>
            <div className="vk-metric-num" style={{ color: '#7928ca' }}>ESM + CJS</div>
            <div className="vk-metric-label">Dual Target Output</div>
          </div>
        </section>

        {/* Bento Grid Feature Section */}
        <section className="vk-section-title">
          <h2>Everything You Need to Build Autonomous Systems.</h2>
          <p>A comprehensive toolkit engineered for reliability, safety, and modern TypeScript workflows.</p>
        </section>

        <section className="vk-bento-grid">
          <div className="vk-bento-card">
            <div className="vk-bento-icon">🛠️</div>
            <h3>Zod Tool Registry</h3>
            <p>Define tools with Zod schemas. Function arguments are strictly validated before execution with auto-generated JSON schema definitions.</p>
          </div>

          <div className="vk-bento-card">
            <div className="vk-bento-icon">🛡️</div>
            <h3>Concurrent Guardrails</h3>
            <p>Execute input safety filters in parallel with model requests for zero added latency. Abort malicious prompt injections cleanly.</p>
          </div>

          <div className="vk-bento-card">
            <div className="vk-[#222]">🔄</div>
            <h3>Multi-Agent Handoffs</h3>
            <p>Decompose complex agent logic into specialized agents. Control transfers dynamically between triage routers and specialist agents.</p>
          </div>

          <div className="vk-bento-card">
            <div className="vk-bento-icon">🧠</div>
            <h3>Session Memory</h3>
            <p>Storage-agnostic session managers (`MemoryStore`) retain conversation turn history across multiple separate `Runner.run()` calls.</p>
          </div>

          <div className="vk-bento-card">
            <div className="vk-bento-icon">⚡</div>
            <h3>Async Generator Streaming</h3>
            <p>Stream token text deltas, tool call lifecycle events, and handoff transitions in real time directly to your user interface.</p>
          </div>

          <div className="vk-bento-card">
            <div className="vk-bento-icon">✨</div>
            <h3>Fluent AgentBuilder</h3>
            <p>Construct immutable agent configurations using chainable builder methods with strict `.build()` validation.</p>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="vk-comparison-box">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>Why Kikoyu Agent SDK?</h3>
            <p style={{ color: 'var(--vk-text-muted)', margin: 0, fontSize: '0.9rem' }}>Designed to eliminate complex framework boilerplate without sacrificing flexibility.</p>
          </div>

          <table className="vk-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th style={{ color: '#ffffff' }}>Kikoyu SDK</th>
                <th>Traditional Frameworks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>Type Safety</td>
                <td className="vk-table-highlight">100% Strict Zod Inferenced</td>
                <td style={{ color: 'var(--vk-text-muted)' }}>Partial / Manual Casting</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Guardrails Overhead</td>
                <td className="vk-table-highlight">0ms (Concurrent Parallel)</td>
                <td style={{ color: 'var(--vk-text-muted)' }}>Sequential (+500ms Latency)</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Agent Handoffs</td>
                <td className="vk-table-highlight">Built-in First Class Tool Primitives</td>
                <td style={{ color: 'var(--vk-text-muted)' }}>Custom Graph Routing Boilerplate</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>API & HTTP Streaming</td>
                <td className="vk-table-highlight">Native Next.js App Router Package</td>
                <td style={{ color: 'var(--vk-text-muted)' }}>Manual Adapter Wiring</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      {/* Footer */}
      <footer className="vk-footer">
        <div className="vk-footer-content">
          <div className="vk-brand">
            <div className="vk-brand-icon" style={{ width: '24px', height: '24px', fontSize: '0.8rem' }}>K</div>
            <span style={{ fontSize: '0.85rem' }}>Kikoyu Agent SDK © 2026</span>
          </div>

          <div className="vk-nav-links" style={{ gap: '1.5rem' }}>
            <Link href="/concepts/agent" className="vk-nav-link">Docs</Link>
            <Link href="/api-reference/README" className="vk-nav-link">API Reference</Link>
            <a href="https://github.com/swamiabhishek45/Kikoyu-Agent-SDK" target="_blank" rel="noreferrer" className="vk-nav-link">GitHub</a>
            <a href="https://www.npmjs.com/package/@kikoyu/core" target="_blank" rel="noreferrer" className="vk-nav-link">npm</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
