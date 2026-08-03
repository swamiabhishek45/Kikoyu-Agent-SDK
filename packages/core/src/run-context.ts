export class RunContext<T = Record<string, unknown>> {
  readonly value: T;

  constructor(value: T) {
    this.value = value ?? ({} as T);
  }

  get<K extends keyof T>(key: K): T[K] {
    return (this.value as Record<string, unknown>)[key as string] as T[K];
  }

  set<K extends keyof T>(key: K, val: T[K]): void {
    (this.value as Record<string, unknown>)[key as string] = val;
  }

  setAll(newValues: Partial<T>): void {
    Object.assign(this.value as object, newValues);
  }

  static from<T = Record<string, unknown>>(
    context?: RunContext<T> | T
  ): RunContext<T> {
    if (!context) {
      return new RunContext<T>({} as T);
    }
    if (
      context instanceof RunContext ||
      (typeof context === 'object' && 'value' in context && typeof (context as any).get === 'function')
    ) {
      return context as RunContext<T>;
    }
    return new RunContext<T>({ ...(context as Record<string, unknown>) } as T);
  }
}
