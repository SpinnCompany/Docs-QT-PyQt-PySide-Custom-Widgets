import React, {useCallback, useEffect, useState} from 'react';

/**
 * Click-to-expand image. The thumbnail renders wherever it is placed; clicking
 * it opens the full-resolution image in a fixed overlay (click anywhere or
 * press Escape to close). Dependency-free on purpose — a lightbox library is
 * not worth a supply-chain edge for one overlay div.
 *
 * Inside a link card the zoom click must not navigate, hence the
 * preventDefault/stopPropagation.
 */
export default function Zoomable({src, alt}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="zoomable"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      />
      {open && (
        <div
          className="zoom-overlay"
          role="dialog"
          aria-label={alt}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            close();
          }}>
          <img src={src} alt={alt} />
          <button
            type="button"
            className="zoom-close"
            aria-label="Close"
            onClick={close}>
            ×
          </button>
        </div>
      )}
    </>
  );
}
