import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

if (window.innerWidth > 768) {
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { y: "-4px", duration: 0.2, ease: "power2.out" });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, { y: "0px", duration: 0.2, ease: "power2.out" });
    });
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = event.currentTarget.getAttribute("href");
      lenis.scrollTo(targetId);
    });
  });
}

document.querySelectorAll("#contact-section > a").forEach((link) => {
  // A little bit to the right and gray color on hover
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { x: "4px", color: "rgb(156 163 175)", duration: 0.2, ease: "power2.out" });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, { x: "0px", color: "", duration: 0.2, ease: "power2.out" });
  });
});

document.querySelectorAll("#socials > a").forEach((link) => {
  // Turn white on hover
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { color: "white", duration: 0.2, ease: "power2.out" });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, { color: "", duration: 0.2, ease: "power2.out" });
  });
});

// gsap.from("#about-one", {
//   scrollTrigger: {
//     trigger: "#about-one",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   },
//   x: -300,
// });

// Get the elements
const projects = document.querySelectorAll("a.project");

projects.forEach((project) => {
  const pname = project.querySelector(".pname");
  const prole = project.querySelector(".prole");

  // Animate the elements on hover
  project.addEventListener("mouseenter", () => {
    gsap.to(pname, {
      x: "-20px",
      color: "gray",
      duration: 0.2,
      ease: "power2.out",
    });
    gsap.to(prole, {
      x: "20px",
      color: "gray",
      duration: 0.2,
      ease: "power2.out",
    });
  });

  project.addEventListener("mouseleave", () => {
    gsap.to(pname, { x: "0px", color: "", duration: 0.2, ease: "power2.out" });
    gsap.to(prole, { x: "0px", color: "", duration: 0.2, ease: "power2.out" });
  });
});
