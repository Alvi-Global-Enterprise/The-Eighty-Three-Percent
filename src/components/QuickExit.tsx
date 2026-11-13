"use client";

const EXIT_URL = "https://www.google.com/";

function leaveSite() {
  // New tab — Google often starts with empty history, so Back stays disabled there
  window.open(EXIT_URL, "_blank", "noopener,noreferrer");

  // Wipe this tab so therapy content cannot flash back
  try {
    document.documentElement.innerHTML = "";
  } catch {
    // ignore
  }

  // Close this tab if the browser allows it; otherwise blank it
  try {
    window.close();
  } catch {
    // ignore
  }

  window.location.replace("about:blank");
}

export function QuickExit() {
  return (
    <button
      type="button"
      onClick={leaveSite}
      className="fixed right-5 top-24 z-50 inline-flex rounded-[10px] bg-coral px-5 py-2.5 text-[14px] font-bold !text-white shadow-md transition-colors hover:bg-coral-deep md:right-8 md:top-28"
      aria-label="Quick exit to Google"
    >
      Quick Exit
    </button>
  );
}
