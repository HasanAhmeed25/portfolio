import React from 'react';
import type { ArchitectureNode } from '../../types';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  type: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ nodes, type }) => {
  return (
    <div className="p-6 rounded-xl bg-background-secondary border border-border my-6">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-primary" />
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
            System Architecture & Data Workflow
          </h4>
        </div>
        <span className="font-mono text-[11px] text-text-muted capitalize">
          {type.replace('-', ' ')}
        </span>
      </div>

      {/* Nodes Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 relative">
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;

          return (
            <div key={index} className="relative flex flex-col">
              <div className="p-4 rounded-lg bg-background-card border border-border shadow-subtle flex-1 flex flex-col justify-between">
                <div>
                  {/* Node Title */}
                  <h5 className="font-display font-semibold text-sm text-text-primary mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
                    <span>{node.title}</span>
                  </h5>

                  {/* Node Description */}
                  <p className="text-text-secondary text-xs leading-relaxed mb-3 font-normal">
                    {node.description}
                  </p>
                </div>

                {/* Tech Badge */}
                <div className="pt-2.5 border-t border-border">
                  <span className="font-mono text-[10px] text-text-primary bg-background-secondary px-2 py-0.5 rounded border border-border inline-block">
                    {node.tech}
                  </span>
                </div>
              </div>

              {/* Arrow Connector */}
              {!isLast && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-text-muted pointer-events-none">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
              {!isLast && (
                <div className="flex md:hidden justify-center py-1 text-text-muted">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
