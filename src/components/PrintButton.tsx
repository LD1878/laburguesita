"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print mt-6 border border-black-rich px-6 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-black-rich hover:text-white-pure"
    >
      Imprimir / Guardar PDF
    </button>
  );
}