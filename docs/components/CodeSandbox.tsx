import React, { useState } from 'react';
import { Play, Copy, Check, Terminal } from 'lucide-react';
import { Button } from './ui/button';

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
    <section className="my-12 overflow-hidden rounded-2xl border border-orange-500/20 bg-zinc-950 shadow-2xl shadow-orange-500/10">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
        </div>

        <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
          {(['agent', 'tools', 'handoffs', 'stream'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-3 py-1 text-xs font-mono transition-colors ${
                activeTab === tab
                  ? 'bg-orange-500 text-white font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-orange-400'
              }`}
            >
              {tab}.ts
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopySnippet}
            className="h-8 gap-1.5 text-xs font-mono"
          >
            {codeCopied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-orange-500" />}
            <span>{codeCopied ? 'Copied' : 'Copy Code'}</span>
          </Button>

          <Button
            size="sm"
            onClick={runSimulation}
            disabled={isRunning}
            className="h-8 gap-1.5 text-xs font-semibold"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>{isRunning ? 'Running...' : 'Run Agent'}</span>
          </Button>
        </div>
      </div>

      {/* Code Body */}
      <div className="overflow-x-auto bg-zinc-950 p-6 text-sm font-mono leading-relaxed text-zinc-100">
        <pre><code>{CODE_EXAMPLES[activeTab]}</code></pre>
      </div>

      {/* Terminal Output */}
      <div className="border-t border-zinc-800 bg-black p-5 font-mono text-xs">
        <div className="mb-3 flex items-center justify-between border-b border-zinc-900 pb-2 text-zinc-500">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-orange-500" />
            <span className="font-semibold tracking-wide">LIVE AGENT TERMINAL OUTPUT</span>
          </div>
          <span>{isRunning ? 'STATUS: EXECUTING LOOP' : 'STATUS: READY'}</span>
        </div>
        {logs.length === 0 ? (
          <div className="italic text-zinc-600">
            Click "Run Agent" above to simulate real-time agent execution...
          </div>
        ) : (
          <div className="space-y-1.5">
            {logs.map((log, i) => (
              <div key={i} className="text-orange-400 font-medium">{log}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
