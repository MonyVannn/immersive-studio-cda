"use client";

import { useEffect, useRef } from "react";

type ToastProps = {
  message: string;
  onDismiss: () => void;
  duration?: number;
};

export function Toast({ message, onDismiss, duration = 5000 }: ToastProps) {
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    const timer = setTimeout(() => onDismissRef.current(), duration);
    return () => clearTimeout(timer);
  }, [duration, message]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-8 left-1/2 z-50 flex w-[min(calc(100%-2rem),28rem)] -translate-x-1/2 items-start gap-4 rounded-lg bg-onyx px-5 py-4 text-body font-primary text-off-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]"
    >
      <p className="flex-1">{message}</p>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss notification"
        className="shrink-0 text-off-white/60 transition-colors hover:text-off-white"
      >
        ×
      </button>
    </div>
  );
}
