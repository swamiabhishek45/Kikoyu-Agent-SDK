export class RunContext<T = Record<string, unknown>> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  get<K extends keyof T>(key: K): T[K] {
    return this.value[key];
  }

  static from<T = Record<string, unknown>>(
    context?: RunContext<T> | T
  ): RunContext<T> {
    if (context instanceof RunContext) {
      return context;
    }
    return new RunContext<T>((context ?? {}) as T);
  }
}
