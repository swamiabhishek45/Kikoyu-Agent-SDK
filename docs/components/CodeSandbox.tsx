import React, { useState } from 'react';
import { Play, Copy, Check, Terminal } from 'lucide-react';

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
      {/* Terminal Top Window Header Bar matching Image 1 */}
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
              className={`rounded-lg px-3.5 py-1 text-xs font-mono transition-all cursor-pointer ${
                activeTab === tab
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

      {/* Code Snippet Container */}
      <div className="overflow-x-auto p-6 text-sm font-mono leading-relaxed text-zinc-100 bg-[#030305]">
        <pre><code>{CODE_EXAMPLES[activeTab]}</code></pre>
      </div>

      {/* Terminal Console Output Bar matching Image 1 */}
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


