// NavMenu
const navMenu = document.querySelector(".nav__menu");
// Toggle Button
const toggleBtn = document.querySelector(".btn_nav_toggle");
// Close Button
const closeBtn = document.querySelector(".btn_close");

// Check if "toggleBtn" exits
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show");
    // "stop_scroll" class added on body element
    document.body.classList.add("stop_scroll");
  });
}

// Check if "CloseBtn" exits
if (closeBtn) {
  // Add eventListener on it.
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show");
    // "stop_scroll" class removed from body element
    document.body.classList.remove("stop_scroll");
  });
}

// GSAP Animations

// LOGO & TOGGLE-BTN
gsap.from(".logo, .btn_nav_toggle", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list, .nav_menu_list_item", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});
// ==== MAIN HEADING  ==== //
gsap.from(".hero__heading", {
  opacity: 0,
  y: 20,
  delay: 2,
  duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".hero__subtext", {
  opacity: 0,
  y: 20,
  delay: 2.2,
  duration: 1,
});
// ==== HERO CTA BUTTONS ==== //
gsap.from(".hero__cta_btn", {
  opacity: 0,
  delay: 2.4,
  duration: 1.2,
});
// ==== HERO IMAGE ==== //
gsap.from(".hero__img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 2.6,
  duration: 1,
});
// ==== FEATURED-H4 ==== //
gsap.from(".featured_by h4", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== FEATURED-BRANDS ==== //
gsap.from(".featured_brands img ", {
  opacity: 0,
  y: -20,
  delay: 2.9,
  duration: 1,
  stagger: 0.2,
});
