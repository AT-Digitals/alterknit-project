import { useEffect } from "react";

export function UseunSavedChangesListener(
  ask: boolean,
  showCancelPopup: (e?: any) => void
) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ask) {
        event.preventDefault();
        const currentUrl = (
          event.currentTarget as HTMLInputElement
        ).getAttribute("href");
        showCancelPopup(currentUrl);
      }
    };

    const links = document.querySelectorAll("a");

    const updateNavigation = (enable: boolean) => {
      links.forEach((link) => {
        if (enable) {
          link.addEventListener("click", handleClick);
        } else {
          link.removeEventListener("click", handleClick);
        }
      });
    };

    updateNavigation(true);

    return () => {
      updateNavigation(false);
    };
  }, [ask, showCancelPopup]);
}
