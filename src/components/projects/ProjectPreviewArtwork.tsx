import React from 'react';
import { Sun, Cpu, Wifi, Activity, ShoppingCart, Receipt, Database, Calendar, BookOpen, Dumbbell, Flame } from 'lucide-react';

interface ProjectPreviewArtworkProps {
  type: 'iot' | 'canteen' | 'campus' | 'fitness';
}

export const ProjectPreviewArtwork: React.FC<ProjectPreviewArtworkProps> = ({ type }) => {
  switch (type) {
    case 'iot':
      return (
        <div className="relative w-full h-56 sm:h-64 bg-background-secondary rounded-lg border border-border flex items-center justify-center p-6 overflow-hidden">
          {/* Hardware & Network Topology Diagram on Light Canvas */}
          <div className="relative z-10 w-full max-w-sm flex items-center justify-between gap-2">
            
            {/* Solar & Ambient Sensor Node */}
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-12 h-12 rounded-lg bg-background-card border border-border shadow-subtle flex items-center justify-center text-amber-600">
                <Sun className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] text-text-secondary font-medium">Solar / LDR</span>
            </div>

            {/* Signal Connection Line */}
            <div className="flex-1 h-px bg-border relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-primary" />
            </div>

            {/* Controller Node: ESP8266 */}
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-14 h-14 rounded-lg bg-background-card border border-accent-primary/40 shadow-card flex items-center justify-center text-accent-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] text-text-primary font-semibold">ESP8266</span>
            </div>

            {/* Signal Line */}
            <div className="flex-1 h-px bg-border" />

            {/* Wi-Fi & Web Server Node */}
            <div className="flex flex-col items-center gap-1.5 text-center">
              <div className="w-12 h-12 rounded-lg bg-background-card border border-border shadow-subtle flex items-center justify-center text-text-primary">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] text-text-secondary font-medium">Web AP</span>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-text-secondary bg-background-card px-3 py-1.5 rounded border border-border">
            <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              Battery: 86% · Auto-Dimming Active
            </span>
            <span className="text-text-muted">PWM Modulated</span>
          </div>
        </div>
      );

    case 'canteen':
      return (
        <div className="relative w-full h-56 sm:h-64 bg-background-secondary rounded-lg border border-border flex items-center justify-center p-6 overflow-hidden">
          {/* Canteen Interface Mockup on Light Canvas */}
          <div className="relative z-10 w-full max-w-sm space-y-3">
            
            {/* Food Order Card */}
            <div className="bg-background-card rounded-lg border border-border shadow-subtle p-3 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-accent-subtle text-accent-primary flex items-center justify-center">
                  <ShoppingCart className="w-3.5 h-3.5" />
                </div>
                <span className="text-text-primary font-medium">SRM Canteen Cart</span>
              </div>
              <span className="text-accent-primary font-semibold">3 Items</span>
            </div>

            {/* Order Token & Spreadsheet Sync Details */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="bg-background-card rounded-lg border border-border p-2.5 flex items-center gap-2">
                <Receipt className="w-3.5 h-3.5 text-text-muted" />
                <div>
                  <span className="text-text-muted block text-[10px]">Token ID</span>
                  <span className="text-text-primary font-medium">#ORD-8492</span>
                </div>
              </div>

              <div className="bg-background-card rounded-lg border border-border p-2.5 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-text-muted" />
                <div>
                  <span className="text-text-muted block text-[10px]">Datastore</span>
                  <span className="text-text-primary font-medium">Sheets Sync</span>
                </div>
              </div>
            </div>

          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-text-secondary bg-background-card px-3 py-1.5 rounded border border-border">
            <span>Node.js & Express Pipeline</span>
            <span className="text-emerald-700 font-medium">Order Logged</span>
          </div>
        </div>
      );

    case 'campus':
      return (
        <div className="relative w-full h-56 sm:h-64 bg-background-secondary rounded-lg border border-border flex items-center justify-center p-6 overflow-hidden">
          {/* Campus Suite Modules */}
          <div className="relative z-10 grid grid-cols-2 gap-3 w-full max-w-xs text-xs font-mono">
            <div className="bg-background-card border border-border rounded-lg p-3 space-y-1.5 shadow-subtle">
              <div className="flex items-center justify-between text-accent-primary">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">88%</span>
              </div>
              <span className="text-text-primary font-medium block">Attendance</span>
              <span className="text-[10px] text-text-muted block">Forecast Active</span>
            </div>

            <div className="bg-background-card border border-border rounded-lg p-3 space-y-1.5 shadow-subtle">
              <div className="flex items-center justify-between text-text-primary">
                <BookOpen className="w-4 h-4 text-text-muted" />
                <span className="font-semibold text-text-muted">Lab</span>
              </div>
              <span className="text-text-primary font-medium block">Code Lab</span>
              <span className="text-[10px] text-text-muted block">Monaco Editor</span>
            </div>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-text-secondary bg-background-card px-3 py-1.5 rounded border border-border">
            <span>Modular Student Architecture</span>
            <span className="text-text-muted">Concept Phase</span>
          </div>
        </div>
      );

    case 'fitness':
      return (
        <div className="relative w-full h-56 sm:h-64 bg-background-secondary rounded-lg border border-border flex items-center justify-center p-6 overflow-hidden">
          {/* Habit & Fitness Interface */}
          <div className="relative z-10 flex items-center justify-around w-full max-w-xs">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-emerald-600 bg-background-card flex items-center justify-center text-emerald-600 font-mono text-sm font-bold shadow-subtle">
                <Flame className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11px] text-text-primary font-medium mt-1.5">14-Day Streak</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-accent-primary bg-background-card flex items-center justify-center text-accent-primary font-mono text-sm font-bold shadow-subtle">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11px] text-text-primary font-medium mt-1.5">Split Tracker</span>
            </div>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-text-secondary bg-background-card px-3 py-1.5 rounded border border-border">
            <span>UI/UX Interface Model</span>
            <span className="text-text-muted">Design Phase</span>
          </div>
        </div>
      );
  }
};
