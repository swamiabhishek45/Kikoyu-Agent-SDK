import React, { useState } from 'react';
import { Play, Copy, Check } from 'lucide-react';
import {
  CODE_EXAMPLES,
  CODE_EXAMPLE_TABS,
  SIMULATED_LOGS,
  type CodeExampleTab,
} from '../lib/code-examples';
import { CodeBlock } from './ui/code-block';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { cn } from '../lib/utils';

export function CodeSandbox() {
  const [activeTab, setActiveTab] = useState<CodeExampleTab>('agent');
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

    const preset = SIMULATED_LOGS[activeTab];
    preset.forEach((log, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === preset.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 300);
    });
  };

  return (
    <Card className="overflow-hidden p-0">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
        <div className="flex flex-wrap items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-900/50">
          {CODE_EXAMPLE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'rounded px-2.5 py-1 font-mono text-xs transition-colors',
                activeTab === tab.id
                  ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5 font-mono" onClick={handleCopySnippet}>
            {codeCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {codeCopied ? 'Copied' : 'Copy'}
          </Button>
          <Button variant="primary" size="sm" className="gap-1.5" onClick={runSimulation} disabled={isRunning}>
            <Play className="h-3 w-3" />
            {isRunning ? 'Simulating…' : 'Simulate run'}
          </Button>
        </div>
      </div>

      <CodeBlock
        code={CODE_EXAMPLES[activeTab]}
        className="rounded-none border-0 border-b border-zinc-200 dark:border-zinc-800"
      />

      <div className="px-4 py-3 font-mono text-xs text-zinc-500">
        <div className="mb-2 flex items-center justify-between border-b border-zinc-200 pb-2 dark:border-zinc-900">
          <span>Output preview (simulated)</span>
          <span>{isRunning ? 'Running' : 'Ready'}</span>
        </div>
        {logs.length === 0 ? (
          <p className="text-zinc-600">Click Simulate run to preview event logs for this example.</p>
        ) : (
          <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
            {logs.map((log) => (
              <div key={log}>{log}</div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
