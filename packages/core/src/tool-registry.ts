import type { ModelToolDefinition, Tool } from './types.js';
import { zodToJsonSchema } from './utils/zod-converter.js';

export class ToolRegistry {
  private toolsMap = new Map<string, Tool>();

  constructor(tools: Tool[] = []) {
    for (const tool of tools) {
      this.register(tool);
    }
  }

  register(tool: Tool): void {
    if (this.toolsMap.has(tool.name)) {
      throw new Error(`Tool with name "${tool.name}" is already registered.`);
    }
    this.toolsMap.set(tool.name, tool);
  }

  get(name: string): Tool | undefined {
    return this.toolsMap.get(name);
  }

  has(name: string): boolean {
    return this.toolsMap.has(name);
  }

  list(): Tool[] {
    return Array.from(this.toolsMap.values());
  }

  toModelDefinitions(): ModelToolDefinition[] {
    return this.list().map((tool) => ({
      name: tool.name,
      description: tool.description,
      parameters: zodToJsonSchema(tool.parameters),
    }));
  }
}
