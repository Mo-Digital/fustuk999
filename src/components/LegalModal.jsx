import { useEffect, useRef } from "react";

export default function LegalModal({ open, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Schließen"
        onClick={onClose}
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        tabIndex={-1}
        className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-sand-50 p-8 shadow-soft focus:outline-none sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <h2 id="legal-modal-title" className="font-serif text-2xl text-olive-900">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-olive-900 hover:bg-olive-900/5"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <div className="prose-legal mt-6 space-y-4 text-sm leading-relaxed text-ink-900/80">
          {children}
        </div>
      </div>
    </div>
  );
}
