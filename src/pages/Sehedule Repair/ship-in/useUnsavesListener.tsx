import { useEffect } from "react";

export function UseunSavedChangesListener(
  ask: boolean,
  showCancelPopup: (e?: any) => void
) {
  useEffect(() => {
    // const beforeUnloadListener = (e: BeforeUnloadEvent) => {
    //   if (ask) {
    //     e.preventDefault();

    //     e.returnValue = 'hgvghc';
    //   }
    // };

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

    // window.addEventListener("beforeunload", beforeUnloadListener);

    return () => {
      updateNavigation(false);
      //   window.removeEventListener("beforeunload", beforeUnloadListener);
    };
  }, [ask, showCancelPopup]);
}
