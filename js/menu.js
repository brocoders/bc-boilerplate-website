(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  function toggleClasses() {
    const expanded = menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  }
  menuBtnRef.addEventListener("click", () => {
    toggleClasses();
  });
  document.addEventListener(
    "click",
    (e) => {
      if (
        !!menuBtnRef.classList.contains("is-open") &
        !mobileMenuRef.contains(e.target) &
        !menuBtnRef.contains(e.target)
      ) {
        toggleClasses();
      }
      return;
    },
    { passive: true }
  );
})();
