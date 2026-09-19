"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  PhoneCall,
  Play,
  RotateCcw,
  SkipForward,
  Pause,
  Zap,
  Activity,
  CheckCircle2,
  AlertCircle,
  Database,
  ArrowRight,
  ShieldCheck,
  User,
  Bot,
  Layers,
  Clock,
  Sparkles,
  ChevronRight,
  Building2,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CALL_SCENARIOS, Scenario, DialogMessage } from "@/lib/data";

export function CallSimulator() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("hvac-emergency");
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [liveLatency, setLiveLatency] = useState<number>(342);
  const [extractedItems, setExtractedItems] = useState<{ label: string; value: string; type: string }[]>([]);
  const [dispatchedActions, setDispatchedActions] = useState<{ system: string; action: string; status: string }[]>([]);

  const dialogContainerRef = useRef<HTMLDivElement>(null);
  const scenario = CALL_SCENARIOS.find((s) => s.id === activeScenarioId) || CALL_SCENARIOS[0];

  // Fluctuate live latency subtly during play
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        // Random fluctuation between 320ms and 410ms
        const nextLatency = Math.floor(Math.random() * (410 - 320 + 1)) + 320;
        setLiveLatency(nextLatency);
      }, 900);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const commitTurn = React.useCallback(
    (index: number) => {
      const turn = scenario.dialog[index];
      if (!turn) return;

      if (turn.latencyMs) {
        setLiveLatency(turn.latencyMs);
      }
      if (turn.extractedEntity) {
        setExtractedItems((prev) => [
          ...prev,
          {
            label: turn.extractedEntity!.label,
            value: turn.extractedEntity!.value,
            type: turn.extractedEntity!.type,
          },
        ]);
      }
      if (turn.crmAction) {
        setDispatchedActions((prev) => [
          ...prev,
          {
            system: turn.crmAction!.system,
            action: turn.crmAction!.action,
            status: turn.crmAction!.status,
          },
        ]);
      }

      setCurrentTurnIndex((prev) => prev + 1);

      // Smooth auto scroll
      setTimeout(() => {
        if (dialogContainerRef.current) {
          dialogContainerRef.current.scrollTop = dialogContainerRef.current.scrollHeight;
        }
      }, 100);
    },
    [scenario]
  );

  // Handle auto-advance when isPlaying is true
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && currentTurnIndex < scenario.dialog.length) {
      const nextTurn = scenario.dialog[currentTurnIndex];
      const isAgent = nextTurn.role === "agent";

      // Show typing indicator briefly for AI responses
      if (isAgent) {
        setIsTyping(true);
        timer = setTimeout(() => {
          setIsTyping(false);
          commitTurn(currentTurnIndex);
        }, 1200);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          commitTurn(currentTurnIndex);
        }, 1800);
      }
    } else if (currentTurnIndex >= scenario.dialog.length) {
      setIsPlaying(false);
    }

    return () => clearTimeout(timer);
  }, [isPlaying, currentTurnIndex, scenario, commitTurn]);


  const handleNextStep = () => {
    if (currentTurnIndex < scenario.dialog.length) {
      commitTurn(currentTurnIndex);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setIsTyping(false);
    setCurrentTurnIndex(0);
    setExtractedItems([]);
    setDispatchedActions([]);
    setLiveLatency(scenario.telephonySpecs.avgLatency);
    if (dialogContainerRef.current) {
      dialogContainerRef.current.scrollTop = 0;
    }
  };

  const handleScenarioChange = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    setIsPlaying(false);
    setIsTyping(false);
    setCurrentTurnIndex(0);
    setExtractedItems([]);
    setDispatchedActions([]);
    const found = CALL_SCENARIOS.find((s) => s.id === scenarioId);
    if (found) {
      setLiveLatency(found.telephonySpecs.avgLatency);
    }
  };

  const handleStartSimulation = () => {
    if (currentTurnIndex >= scenario.dialog.length) {
      handleReset();
      setTimeout(() => setIsPlaying(true), 150);
    } else {
      setIsPlaying(true);
    }
  };

  const activeMessages = scenario.dialog.slice(0, currentTurnIndex);
  const progressPercent = Math.round((currentTurnIndex / scenario.dialog.length) * 100);

  return (
    <section id="simulator" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
          <Badge variant="indigo" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Interactive Telephony Console
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Live Call Console & Telephony HUD
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Inspect live conversational turns in real time. Watch turn-taking latency meters, live structured entity extraction, and automated CRM dispatches without delay.
          </p>
        </div>

        {/* Scenario Tabs Bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-2xl max-w-3xl w-full">
            {CALL_SCENARIOS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScenarioChange(item.id)}
                className={`flex flex-col items-center justify-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeScenarioId === item.id
                    ? "bg-zinc-800 text-white shadow-md border border-zinc-700/60"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                }`}
              >
                <span className="font-semibold">{item.title}</span>
                <span className="text-[11px] text-zinc-500 font-normal">{item.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Simulator Deck: Split Screen HUD */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: Conversation Stream (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl border border-zinc-800/90 bg-zinc-900/70 backdrop-blur-xl shadow-2xl overflow-hidden">
            
            {/* Console Header Bar */}
            <div className="px-5 py-4 bg-zinc-900/90 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <PhoneCall className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-zinc-100">{scenario.title}</h3>
                    <Badge variant="secondary" className="text-[10px] uppercase font-mono">
                      {scenario.badge}
                    </Badge>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Caller: <strong className="text-zinc-200 font-medium">{scenario.caller.name}</strong> • {scenario.caller.phone}
                  </div>
                </div>
              </div>

              {/* Progress and control buttons */}
              <div className="flex items-center gap-2">
                {isPlaying ? (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsPlaying(false)}
                    className="h-8 text-xs gap-1.5 border-zinc-700 bg-zinc-800/90 text-zinc-200"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    Pause
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={handleStartSimulation}
                    className="h-8 text-xs gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    {currentTurnIndex === 0 ? "Start Call Simulation" : currentTurnIndex >= scenario.dialog.length ? "Replay Call" : "Resume"}
                  </Button>
                )}

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleNextStep}
                  disabled={currentTurnIndex >= scenario.dialog.length || isPlaying}
                  className="h-8 text-xs gap-1 text-zinc-300 hover:text-white"
                  title="Next Conversation Turn"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                  Next Turn
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleReset}
                  className="h-8 w-8 p-0 text-zinc-400 hover:text-zinc-200"
                  title="Reset Call"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* Step Progress Tracker */}
            <div className="w-full bg-zinc-800/40 h-1.5">
              <div
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Conversation Stream Scroll Body */}
            <div
              ref={dialogContainerRef}
              className="p-5 overflow-y-auto max-h-[460px] min-h-[420px] space-y-4 bg-zinc-950/50"
            >
              {activeMessages.length === 0 && !isTyping && (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                    <PhoneCall className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="max-w-xs space-y-1">
                    <p className="text-sm font-semibold text-zinc-200">Call Channel Ready</p>
                    <p className="text-xs text-zinc-500">
                      Click <span className="text-indigo-400 font-medium">&quot;Start Call Simulation&quot;</span> to watch Callvea answer in under 400ms and stream the live transcript.
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={handleStartSimulation}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs gap-1.5 mt-2"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    Simulate First Ring
                  </Button>
                </div>
              )}

              {activeMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === "agent" ? "items-start" : "items-end"
                  } space-y-1.5 animate-in fade-in-50 slide-in-from-bottom-2 duration-200`}
                >
                  <div className="flex items-center gap-2 px-1 text-[11px] text-zinc-500">
                    {msg.role === "agent" ? (
                      <>
                        <Bot className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-semibold text-cyan-400">{msg.speaker}</span>
                        {msg.latencyMs && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            ⚡ {msg.latencyMs}ms
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="font-medium text-zinc-400">{msg.speaker}</span>
                        <User className="w-3.5 h-3.5 text-zinc-400" />
                      </>
                    )}
                    <span className="text-zinc-600 font-mono">{msg.timestamp}</span>
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "agent"
                        ? "bg-gradient-to-br from-indigo-950/50 to-zinc-900 border border-indigo-500/30 text-zinc-100 shadow-md shadow-indigo-950/20"
                        : "bg-zinc-800/90 border border-zinc-700/60 text-zinc-200"
                    }`}
                  >
                    {msg.text}

                    {/* In-bubble entity tag highlight */}
                    {msg.extractedEntity && (
                      <div className="mt-2.5 pt-2 border-t border-zinc-700/50 flex items-center gap-2 text-[11px]">
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Extracted {msg.extractedEntity.label}
                        </span>
                        <span className="font-mono text-zinc-300 font-semibold truncate">
                          {msg.extractedEntity.value}
                        </span>
                      </div>
                    )}

                    {/* In-bubble CRM action dispatched */}
                    {msg.crmAction && (
                      <div className="mt-2.5 pt-2 border-t border-emerald-500/20 flex items-center justify-between gap-2 text-[11px] bg-emerald-950/20 -mx-2 -mb-1 px-2.5 py-1.5 rounded-lg">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{msg.crmAction.action}</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900/80 px-1.5 py-0.5 rounded border border-zinc-800">
                          {msg.crmAction.system}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-2 text-xs text-zinc-400 animate-pulse">
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono text-cyan-400 text-xs">Callvea AI synthesizing response...</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="px-5 py-3 bg-zinc-900/90 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span>Zero-Latency Stream • WebRTC SIP Bridge</span>
              </div>
              <span className="font-mono text-zinc-400">
                Turn {currentTurnIndex} of {scenario.dialog.length}
              </span>
            </div>

          </div>

          {/* RIGHT: Live Telephony Telemetry Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Turn-Taking Latency HUD Card */}
            <Card className="bg-zinc-900/80 border-zinc-800/90 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Live Telephony Telemetry
                  </span>
                </div>
                <Badge variant="cyan" className="font-mono text-[10px]">
                  OPUS 48kHz
                </Badge>
              </div>

              {/* Real-time Latency Meter Display */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-zinc-950/70 p-3 rounded-xl border border-zinc-800/80">
                  <div className="text-[11px] text-zinc-500 font-mono uppercase mb-1">Turn Latency</div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold font-mono text-white tracking-tight">
                      {liveLatency}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">ms</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5" /> Target &lt; 500ms Met
                  </div>
                </div>

                <div className="bg-zinc-950/70 p-3 rounded-xl border border-zinc-800/80">
                  <div className="text-[11px] text-zinc-500 font-mono uppercase mb-1">Confidence Score</div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold font-mono text-emerald-400 tracking-tight">
                      {scenario.telephonySpecs.confidence}
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-1">Intent Accuracy</div>
                </div>
              </div>

              {/* Latency Meter Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>300ms (Human parity)</span>
                  <span>500ms threshold</span>
                  <span>1000ms+ (Legacy AI)</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 transition-all duration-300"
                    style={{ width: `${Math.min(100, Math.max(10, (liveLatency / 600) * 100))}%` }}
                  />
                  {/* Visual marker at 500ms */}
                  <div className="absolute top-0 bottom-0 left-[83%] w-0.5 bg-rose-500/80" title="Max allowed SLA" />
                </div>
              </div>
            </Card>

            {/* Live Structured Data Extraction Feed Card */}
            <Card className="bg-zinc-900/80 border-zinc-800/90 p-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Live Entity Extraction
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">JSON Schema Parsed</span>
              </div>

              <div className="space-y-2 flex-1 overflow-y-auto max-h-[220px]">
                {/* Caller default details */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/70 text-xs">
                  <span className="text-zinc-500 font-mono text-[11px]">Caller Identity</span>
                  <span className="font-medium text-zinc-200 font-mono">{scenario.caller.name}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/70 text-xs">
                  <span className="text-zinc-500 font-mono text-[11px]">Phone Carrier</span>
                  <span className="font-medium text-zinc-200 font-mono">{scenario.caller.phone}</span>
                </div>

                {/* Dynamically extracted items */}
                {extractedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-indigo-950/30 border border-indigo-500/30 text-xs animate-in fade-in-50 slide-in-from-right-2 duration-200"
                  >
                    <span className="text-indigo-300 font-mono text-[11px] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {item.label}
                    </span>
                    <span className="font-semibold text-white font-mono text-right max-w-[55%] truncate">
                      {item.value}
                    </span>
                  </div>
                ))}

                {extractedItems.length === 0 && (
                  <div className="py-6 text-center text-xs text-zinc-600 font-mono">
                    Entities will extract dynamically as the caller speaks...
                  </div>
                )}
              </div>
            </Card>

            {/* Automated CRM & Dispatch Feed Card */}
            <Card className="bg-zinc-900/80 border-zinc-800/90 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Automated Action Dispatch
                  </span>
                </div>
                <Badge variant="emerald" className="font-mono text-[10px]">
                  2-WAY SYNC
                </Badge>
              </div>

              <div className="space-y-2">
                {dispatchedActions.length === 0 ? (
                  <div className="p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/60 text-xs text-zinc-500 text-center font-mono">
                    Awaiting trigger threshold in dialogue...
                  </div>
                ) : (
                  dispatchedActions.map((action, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/30 to-zinc-950 border border-emerald-500/30 flex items-center justify-between text-xs animate-in zoom-in-95 duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <div className="font-semibold text-emerald-300">{action.action}</div>
                          <div className="text-[10px] text-zinc-400 font-mono">{action.system}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        EXECUTED
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Target CRM destination */}
              <div className="mt-3 pt-3 border-t border-zinc-800/70 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Target CRM: <strong className="text-zinc-200">{scenario.crmResult.platform}</strong></span>
                <span>Ref: <strong className="text-indigo-400">{scenario.crmResult.recordId}</strong></span>
              </div>
            </Card>

          </div>

        </div>

        {/* Bottom Banner callout */}
        <div className="mt-10 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-100">Deterministic RAG Safeguards Enforced</div>
              <div className="text-xs text-zinc-400">
                Callvea never hallucinates answers outside your approved documentation or quotes unapproved prices.
              </div>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => {
              const el = document.querySelector("#pricing");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs shrink-0 flex items-center gap-1.5"
          >
            Configure For Your Business
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
