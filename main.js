/* Progressive enhancement only — the site is fully readable without this file. */

document.documentElement.classList.remove("no-js");

/* Small-screen nav dropdown. On wide screens the links are always inline and
   the toggle is display:none, so the listeners here simply never fire. */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    if (open) {
      menu.setAttribute("data-open", "true");
    } else {
      menu.removeAttribute("data-open");
    }
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  }

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!isOpen());
  });

  // Clicking a link navigates; close so a back-nav doesn't restore it open.
  menu.addEventListener("click", function () {
    setOpen(false);
  });

  document.addEventListener("click", function (e) {
    if (!isOpen()) return;
    if (menu.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Resizing past the breakpoint reveals the inline links; drop the open state
  // so the toggle doesn't come back already expanded.
  var wide = window.matchMedia("(min-width: 621px)");
  var onChange = function (e) {
    if (e.matches) setOpen(false);
  };
  if (wide.addEventListener) {
    wide.addEventListener("change", onChange);
  } else if (wide.addListener) {
    wide.addListener(onChange);
  }
})();

(function () {
  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
