import React, { useState } from 'react';
import { Play, Copy, Check } from 'lucide-react';

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
  .setApiKey(process.env.KIKOYU_API_KEY!)
  .build();

// 2. Router Agent with Handoff
const triageRouter = Agent.builder()
  .setName('Triage Router')
  .setInstructions('Route math questions to Math Specialist.')
  .setApiKey(process.env.KIKOYU_API_KEY!)
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
  '[Kikoyu Engine] Initializing Agent "Triage Router"...',
  '[Input Guardrail] Checking prompt safety... PASSED (0.4ms)',
  '[Model Stream] Sending completion request (gpt-4o-mini)...',
  '[Tool Call Started] get_weather({"location": "Tokyo", "unit": "celsius"})',
  '[Tool Call Finished] get_weather -> {"temp": "22°C", "condition": "Sunny"}',
  '[Handoff Occurred] Triage Router -> Travel Specialist',
  '[Text Delta] "The weather in Tokyo is currently 22°C and sunny."',
  '[Run Complete] Execution finished in 480ms. Tokens: 142',
];

export function CodeSandbox() {
  const [activeTab, setActiveTab] = useState<'agent' | 'tools' | 'handoffs' | 'stream'>('agent');
  const [codeCopied, setCodeCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

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
    <div className="max-w-5xl mx-auto my-6 overflow-hidden rounded-2xl border border-zinc-800/90 bg-[#07070a] shadow-2xl">
      {/* Terminal Top Window Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800/80 bg-[#0b0c10] px-5 py-3.5 gap-3">
        {/* Left Mac Window Control Dots */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]"></span>
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]"></span>
          <span className="h-3 w-3 rounded-full bg-[#27c93f]"></span>
        </div>

        {/* Center Tabs Bar */}
        <div className="flex items-center gap-1 rounded-xl border border-zinc-800/90 bg-zinc-950/80 p-1">
          {(['agent', 'tools', 'handoffs', 'stream'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-3.5 py-1 text-xs font-mono transition-all cursor-pointer ${activeTab === tab
                ? 'bg-[#ff5500] text-white font-semibold shadow-md shadow-orange-500/25'
                : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
              {tab}.ts
            </button>
          ))}
        </div>

        {/* Right Actions: Copy Code & Run Agent */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopySnippet}
            className="h-8.5 px-3.5 text-xs font-mono rounded-lg border border-zinc-700/70 bg-[#191a22] text-zinc-200 hover:bg-[#22232e] hover:border-zinc-500 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            {codeCopied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5 text-orange-400" />}
            <span>{codeCopied ? 'Copied' : 'Copy Code'}</span>
          </button>

          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="h-8.5 px-4 text-xs font-semibold rounded-lg bg-[#ff5500] hover:bg-[#e04b00] text-white flex items-center gap-1.5 shadow-lg shadow-orange-500/30 transition-all cursor-pointer disabled:opacity-50"
          >
            <Play className="h-3 w-3 fill-current" />
            <span>{isRunning ? 'Running...' : 'Run Agent'}</span>
          </button>
        </div>
      </div>

      {/* Code Snippet Container with Rich Syntax Highlighting */}
      <div className="overflow-x-auto p-6 text-sm font-mono leading-relaxed bg-[#030305] text-zinc-100">
        {activeTab === 'agent' && (
          <pre>
            <code>
              <span className="text-[#c678dd] font-semibold">import</span> &#123; <span className="text-[#e5c07b]">Agent</span>, <span className="text-[#e5c07b]">Runner</span> &#125; <span className="text-[#c678dd] font-semibold">from</span> <span className="text-[#98c379]">'@kikoyu/core'</span>;{'\n\n'}
              <span className="text-[#5c6370] italic">// 1. Build agent with Kikoyu API Key</span>{'\n'}
              <span className="text-[#c678dd] font-semibold">const</span> <span className="text-[#e06c75]">agent</span> = <span className="text-[#e5c07b]">Agent</span>.<span className="text-[#61afef]">builder</span>(){'\n'}
              {'  '}.<span className="text-[#61afef]">setName</span>(<span className="text-[#98c379]">'Assistant'</span>){'\n'}
              {'  '}.<span className="text-[#61afef]">setInstructions</span>(<span className="text-[#98c379]">'You are a helpful AI assistant that responds in concise sentences.'</span>){'\n'}
              {'  '}.<span className="text-[#61afef]">setApiKey</span>(<span className="text-[#e06c75]">process</span>.<span className="text-[#e06c75]">env</span>.<span className="text-[#d19a66]">KIKOYU_API_KEY</span>!){'\n'}
              {'  '}.<span className="text-[#61afef]">build</span>();{'\n\n'}
              <span className="text-[#5c6370] italic">// 2. Execute multi-turn loop</span>{'\n'}
              <span className="text-[#c678dd] font-semibold">const</span> <span className="text-[#e06c75]">runner</span> = <span className="text-[#c678dd] font-semibold">new</span> <span className="text-[#e5c07b]">Runner</span>();{'\n'}
              <span className="text-[#c678dd] font-semibold">const</span> <span className="text-[#e06c75]">result</span> = <span className="text-[#c678dd] font-semibold">await</span> <span className="text-[#e06c75]">runner</span>.<span className="text-[#61afef]">run</span>(<span className="text-[#e06c75]">agent</span>, <span className="text-[#98c379]">'Hello! Who are you?'</span>);{'\n\n'}
              <span className="text-[#e06c75]">console</span>.<span className="text-[#61afef]">log</span>(<span className="text-[#e06c75]">result</span>.<span className="text-[#e06c75]">text</span>);
            </code>
          </pre>
        )}

        {activeTab === 'tools' && (
          <pre>
            <code>
              <span className="text-[#c678dd] font-semibold">import</span> &#123; <span className="text-[#61afef]">createTool</span>, <span className="text-[#e5c07b]">z</span> &#125; <span className="text-[#c678dd] font-semibold">from</span> <span className="text-[#98c379]">'@kikoyu/core'</span>;{'\n\n'}
              <span className="text-[#5c6370] italic">// Type-safe tool definition with Zod schema validation</span>{'\n'}
              <span className="text-[#c678dd] font-semibold">export const</span> <span className="text-[#61afef]">getWeatherTool</span> = <span className="text-[#61afef]">createTool</span>(&#123;{'\n'}
              {'  '}<span className="text-[#e06c75]">name</span>: <span className="text-[#98c379]">'get_weather'</span>,{'\n'}
              {'  '}<span className="text-[#e06c75]">description</span>: <span className="text-[#98c379]">'Lookup current weather conditions for a city.'</span>,{'\n'}
              {'  '}<span className="text-[#e06c75]">parameters</span>: <span className="text-[#e5c07b]">z</span>.<span className="text-[#61afef]">object</span>(&#123;{'\n'}
              {'    '}<span className="text-[#e06c75]">location</span>: <span className="text-[#e5c07b]">z</span>.<span className="text-[#61afef]">string</span>().<span className="text-[#61afef]">describe</span>(<span className="text-[#98c379]">'City name, e.g. Tokyo, Paris'</span>),{'\n'}
              {'    '}<span className="text-[#e06c75]">unit</span>: <span className="text-[#e5c07b]">z</span>.<span className="text-[#61afef]">enum</span>([<span className="text-[#98c379]">'celsius'</span>, <span className="text-[#98c379]">'fahrenheit'</span>]).<span className="text-[#61afef]">default</span>(<span className="text-[#98c379]">'celsius'</span>),{'\n'}
              {'  '}&#125;),{'\n'}
              {'  '}<span className="text-[#61afef]">execute</span>: <span className="text-[#c678dd] font-semibold">async</span> (&#123; <span className="text-[#e06c75]">location</span>, <span className="text-[#e06c75]">unit</span> &#125;) =&gt; &#123;{'\n'}
              {'    '}<span className="text-[#c678dd] font-semibold">return</span> &#123; <span className="text-[#e06c75]">location</span>, <span className="text-[#e06c75]">temp</span>: <span className="text-[#e06c75]">unit</span> === <span className="text-[#98c379]">'fahrenheit'</span> ? <span className="text-[#98c379]">'72°F'</span> : <span className="text-[#98c379]">'22°C'</span>, <span className="text-[#e06c75]">condition</span>: <span className="text-[#98c379]">'Sunny'</span> &#125;;{'\n'}
              {'  '}&#125;,{'\n'}
              &#125;);
            </code>
          </pre>
        )}

        {activeTab === 'handoffs' && (
          <pre>
            <code>
              <span className="text-[#c678dd] font-semibold">import</span> &#123; <span className="text-[#e5c07b]">Agent</span>, <span className="text-[#61afef]">createHandoff</span>, <span className="text-[#e5c07b]">Runner</span> &#125; <span className="text-[#c678dd] font-semibold">from</span> <span className="text-[#98c379]">'@kikoyu/core'</span>;{'\n\n'}
              <span className="text-[#5c6370] italic">// 1. Specialist Agent</span>{'\n'}
              <span className="text-[#c678dd] font-semibold">const</span> <span className="text-[#e06c75]">mathSpecialist</span> = <span className="text-[#e5c07b]">Agent</span>.<span className="text-[#61afef]">builder</span>(){'\n'}
              {'  '}.<span className="text-[#61afef]">setName</span>(<span className="text-[#98c379]">'Math Specialist'</span>){'\n'}
              {'  '}.<span className="text-[#61afef]">setInstructions</span>(<span className="text-[#98c379]">'Solve complex math expressions step-by-step.'</span>){'\n'}
              {'  '}.<span className="text-[#61afef]">setApiKey</span>(<span className="text-[#e06c75]">process</span>.<span className="text-[#e06c75]">env</span>.<span className="text-[#d19a66]">KIKOYU_API_KEY</span>!){'\n'}
              {'  '}.<span className="text-[#61afef]">build</span>();{'\n\n'}
              <span className="text-[#5c6370] italic">// 2. Router Agent with Handoff</span>{'\n'}
              <span className="text-[#c678dd] font-semibold">const</span> <span className="text-[#e06c75]">triageRouter</span> = <span className="text-[#e5c07b]">Agent</span>.<span className="text-[#61afef]">builder</span>(){'\n'}
              {'  '}.<span className="text-[#61afef]">setName</span>(<span className="text-[#98c379]">'Triage Router'</span>){'\n'}
              {'  '}.<span className="text-[#61afef]">setInstructions</span>(<span className="text-[#98c379]">'Route math questions to Math Specialist.'</span>){'\n'}
              {'  '}.<span className="text-[#61afef]">setApiKey</span>(<span className="text-[#e06c75]">process</span>.<span className="text-[#e06c75]">env</span>.<span className="text-[#d19a66]">KIKOYU_API_KEY</span>!){'\n'}
              {'  '}.<span className="text-[#61afef]">withHandoffs</span>(<span className="text-[#61afef]">createHandoff</span>(<span className="text-[#e06c75]">mathSpecialist</span>)){'\n'}
              {'  '}.<span className="text-[#61afef]">build</span>();
            </code>
          </pre>
        )}

        {activeTab === 'stream' && (
          <pre>
            <code>
              <span className="text-[#c678dd] font-semibold">import</span> &#123; <span className="text-[#e5c07b]">Agent</span>, <span className="text-[#e5c07b]">Runner</span> &#125; <span className="text-[#c678dd] font-semibold">from</span> <span className="text-[#98c379]">'@kikoyu/core'</span>;{'\n\n'}
              <span className="text-[#c678dd] font-semibold">const</span> <span className="text-[#e06c75]">runner</span> = <span className="text-[#c678dd] font-semibold">new</span> <span className="text-[#e5c07b]">Runner</span>();{'\n\n'}
              <span className="text-[#5c6370] italic">// Real-time event streaming via AsyncGenerator</span>{'\n'}
              <span className="text-[#c678dd] font-semibold">for await</span> (<span className="text-[#c678dd] font-semibold">const</span> <span className="text-[#e06c75]">event</span> <span className="text-[#c678dd] font-semibold">of</span> <span className="text-[#e06c75]">runner</span>.<span className="text-[#61afef]">stream</span>(<span className="text-[#e06c75]">agent</span>, <span className="text-[#98c379]">'Write a poem about space'</span>)) &#123;{'\n'}
              {'  '}<span className="text-[#c678dd] font-semibold">if</span> (<span className="text-[#e06c75]">event</span>.<span className="text-[#e06c75]">type</span> === <span className="text-[#98c379]">'text_delta'</span>) &#123;{'\n'}
              {'    '}<span className="text-[#e06c75]">process</span>.<span className="text-[#e06c75]">stdout</span>.<span className="text-[#61afef]">write</span>(<span className="text-[#e06c75]">event</span>.<span className="text-[#e06c75]">delta</span>);{'\n'}
              {'  '}&#125; <span className="text-[#c678dd] font-semibold">else if</span> (<span className="text-[#e06c75]">event</span>.<span className="text-[#e06c75]">type</span> === <span className="text-[#98c379]">'tool_call_started'</span>) &#123;{'\n'}
              {'    '}<span className="text-[#e06c75]">console</span>.<span className="text-[#61afef]">log</span>(<span className="text-[#98c379]">`Executing tool: $&#123;event.toolCall.name&#125;`</span>);{'\n'}
              {'  '}&#125;{'\n'}
              &#125;
            </code>
          </pre>
        )}
      </div>

      {/* Terminal Console Output Bar */}
      <div className="border-t border-zinc-800/80 bg-[#040406] p-5 font-mono text-xs">
        <div className="mb-3 flex items-center justify-between border-b border-zinc-900 pb-2.5 text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5500] font-bold">&gt;_</span>
            <span className="font-semibold tracking-wider text-zinc-400 text-[11px]">LIVE AGENT TERMINAL OUTPUT</span>
          </div>
          <span className="text-zinc-500 text-[11px]">{isRunning ? 'STATUS: EXECUTING LOOP' : 'STATUS: READY'}</span>
        </div>

        {logs.length === 0 ? (
          <div className="italic text-zinc-600 text-[11px]">
            Click "Run Agent" above to simulate real-time agent execution...
          </div>
        ) : (
          <div className="space-y-1.5">
            {logs.map((log, i) => (
              <div key={i} className="text-orange-400 font-medium text-[11px]">{log}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
