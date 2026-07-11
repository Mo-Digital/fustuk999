export const LEGAL_MODAL_EVENT = "fustuk999:open-legal-modal";

export function openLegalModal(section) {
  window.dispatchEvent(new CustomEvent(LEGAL_MODAL_EVENT, { detail: section }));
}
