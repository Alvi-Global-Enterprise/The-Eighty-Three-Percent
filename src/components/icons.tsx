export function Sparkles({ className = "" }: { className?: string }) {
  return (
    <span className={`sparkles ${className}`} aria-hidden>
      <span />
      <span />
      <span />
    </span>
  );
}

export function IconStepPerson({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="3.5" />
      <path
        d="M14 52c2.5-11 12-16 18-16s15.5 5 18 16"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M44 18c4 1 7 5 7 10"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconStepCalendar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="12"
        y="16"
        width="40"
        height="36"
        rx="8"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path d="M12 28h40" stroke="currentColor" strokeWidth="3.5" />
      <path
        d="M24 12v8M40 12v8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="38" r="2.5" fill="currentColor" />
      <circle cx="32" cy="38" r="2.5" fill="currentColor" />
      <circle cx="40" cy="38" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function IconStepConfirm({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="14"
        y="12"
        width="36"
        height="44"
        rx="8"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        d="M24 32l6 6 12-14"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconInstagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedIn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.5 9.5H4V20h2.5V9.5zM5.25 4A1.75 1.75 0 105.26 7.5 1.75 1.75 0 005.25 4zM20 20h-2.5v-5.6c0-1.55-.55-2.6-1.9-2.6-1.04 0-1.66.7-1.93 1.38-.1.24-.12.57-.12.9V20H11V9.5h2.5v1.43c.42-.65 1.18-1.58 2.88-1.58 2.1 0 3.62 1.37 3.62 4.32V20z" />
    </svg>
  );
}

export function IconFacebook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.5 20v-7.2h2.4l.36-2.8h-2.76V8.3c0-.8.22-1.35 1.38-1.35H17.5V4.45C17.12 4.4 15.98 4.3 14.66 4.3c-2.76 0-4.66 1.68-4.66 4.77v2.63H7.5v2.8h2.5V20h4.5z" />
    </svg>
  );
}
