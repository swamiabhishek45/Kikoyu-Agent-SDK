'use client';

import { Children, isValidElement, type ReactNode } from 'react';
import { CodeBlock } from '@/components/ui/code-block';

function extractCode(children: ReactNode): string {
  let code = '';

  Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      code += child;
      return;
    }
    if (!isValidElement(child)) return;

    const props = child.props as { children?: ReactNode };
    if (props.children !== undefined) {
      code += extractCode(props.children);
    }
  });

  return code;
}

export function NextraPre({
  children,
  className,
  ...props
}: React.ComponentProps<'pre'> & {
  'data-language'?: string;
  'data-filename'?: string;
}) {
  const language = props['data-language'] ?? 'text';
  const filename = props['data-filename'];
  const code = extractCode(children);

  return (
    <CodeBlock
      code={code}
      language={language}
      filename={filename}
      accent="#f97316"
      className={className ?? 'not-prose my-6'}
    />
  );
}
