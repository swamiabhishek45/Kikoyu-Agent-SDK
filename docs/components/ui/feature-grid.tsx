import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './card';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureGrid({ features }: { features: FeatureItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feat) => {
        const Icon = feat.icon;
        return (
          <Card key={feat.title} className="h-full">
            <CardHeader className="space-y-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-brand dark:border-zinc-800 dark:bg-zinc-900">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <CardTitle>{feat.title}</CardTitle>
                <CardDescription>{feat.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
