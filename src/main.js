import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smoothMobile: false,
});

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
    scroll.scrollTo(targetId);
  });
});

gsap.from("#about-one", {
  scrollTrigger: {
    trigger: "#about-one",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
  x: -300,
});

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
