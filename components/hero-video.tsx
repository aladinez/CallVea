"use client";

import * as React from "react";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Maximize,
} from "lucide-react";

export function HeroVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(15);
  const [showControls, setShowControls] = React.useState(false);

  // Handle video progress update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 15;
      setCurrentTime(current);
      setDuration(total);
      setProgress((current / total) * 100);
    }
  };

  // Sound toggle
  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
      // Ensure playback continues when unmuted
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  // Play / Pause toggle
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Restart video
  const restartVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    const s = Math.floor(secs % 60);
    return `0:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 sm:mt-16 relative">
      {/* Ambient background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/25 via-cyan-500/20 to-purple-600/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        className="relative rounded-2xl border border-zinc-800/90 bg-zinc-900/90 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300"
      >
        {/* Mock Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/80 border-b border-zinc-800/80 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/70 border border-rose-600/50" />
            <span className="w-3 h-3 rounded-full bg-amber-500/70 border border-amber-600/50" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70 border border-emerald-600/50" />
            <span className="ml-2 text-xs font-mono text-zinc-400 hidden sm:inline-block">
              callvea-demo-session.mp4
            </span>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-semibold text-indigo-300">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>15s Live Demo</span>
            </span>
          </div>
        </div>

        {/* Video Player Area */}
        <div
          onClick={togglePlay}
          className="relative bg-zinc-950 cursor-pointer aspect-[688/464] sm:aspect-video flex items-center justify-center overflow-hidden group"
        >
          <video
            ref={videoRef}
            src="/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-contain bg-zinc-950"
          />

          {/* Play/Pause Overlay indicator when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center pointer-events-none transition-opacity">
              <div className="w-16 h-16 rounded-full bg-indigo-600/90 border border-indigo-400/30 flex items-center justify-center text-white shadow-2xl scale-110 transition-transform">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
            </div>
          )}

          {/* Floating Sound CTA (always visible when muted, draws attention immediately) */}
          <button
            onClick={toggleSound}
            type="button"
            className={`absolute top-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold backdrop-blur-md transition-all shadow-lg hover:scale-105 ${
              isMuted
                ? "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border-zinc-700/80 ring-1 ring-cyan-500/40"
                : "bg-indigo-600/90 hover:bg-indigo-500 text-white border-indigo-400/50"
            }`}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Tap for Sound</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-white" />
                <span>Sound On</span>
              </>
            )}
          </button>

          {/* Quick replay button at bottom left when hovering */}
          <div
            className={`absolute bottom-6 left-4 z-20 flex items-center gap-2 transition-opacity duration-200 ${
              showControls || !isPlaying ? "opacity-100" : "opacity-0 sm:opacity-75"
            }`}
          >
            <button
              onClick={togglePlay}
              type="button"
              className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60 backdrop-blur-md transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
            </button>

            <button
              onClick={restartVideo}
              type="button"
              className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60 backdrop-blur-md transition-colors"
              title="Restart"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={toggleFullscreen}
              type="button"
              className="p-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60 backdrop-blur-md transition-colors"
              title="Fullscreen"
            >
              <Maximize className="w-3.5 h-3.5" />
            </button>

            <span className="text-xs font-mono text-zinc-300 bg-zinc-900/80 px-2.5 py-1.5 rounded-lg border border-zinc-700/60 backdrop-blur-md">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Subtle loop progress bar at very bottom of video */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800/80 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Footer info bar below video */}
        <div className="px-4 py-2.5 bg-zinc-950/90 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-zinc-300">
              Live AI conversation & scheduling flow
            </span>
          </div>
          <div className="text-[11px] text-zinc-500 font-mono">
            Auto-loops • 15 seconds
          </div>
        </div>
      </div>
    </div>
  );
}
