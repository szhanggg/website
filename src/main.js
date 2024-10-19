import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 768) {
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { y: "-4px", duration: 0.2, ease: "power2.out" });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, { y: "0px", duration: 0.2, ease: "power2.out" });
    });
    link.addEventListener("click", (event) => {
      // event.preventDefault();
      //
      // const targetId = event.currentTarget.getAttribute("href");
      // lenis.scrollTo(targetId);
    });
  });

  document.querySelectorAll("#contact-section > a").forEach((link) => {
    // A little bit to the right and gray color on hover
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        x: "4px",
        color: "rgb(156 163 175)",
        duration: 0.2,
        ease: "power2.out",
      });
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

  const projects = document.querySelectorAll("a.project");
  const cursor = document.querySelector("#cursor");
  const cursorImg = cursor.querySelector("img");
  const cursorText = document.querySelector("#cursor-click");

  let xCTo = gsap.quickTo("#cursor", "left", {
    duration: 0.3,
    // ease: "power3",
  });
  let yCTo = gsap.quickTo("#cursor", "top", {
    duration: 0.3,
    // ease: "power3",
  });
  let xDTo = gsap.quickTo("#cursor-click", "left", {
    duration: 0.4,
    // ease: "power3",
  });
  let yDTo = gsap.quickTo("#cursor-click", "top", {
    duration: 0.4,
    // ease: "power3",
  });

  let mousePosition = { x: 0, y: 0 };

  function moveCursor() {
    const cursorPosition = {
      left: mousePosition.x + window.scrollX,
      top: mousePosition.y + window.scrollY,
    };
    xCTo(cursorPosition.left);
    yCTo(cursorPosition.top);
    xDTo(cursorPosition.left);
    yDTo(cursorPosition.top);
  }

  document.addEventListener("mousemove", (e) => {
    mousePosition = { x: e.clientX, y: e.clientY };
    moveCursor();
  });

  document.addEventListener("scroll", () => {
    moveCursor();
  });

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
      gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(cursorText, {
        scale: 1,
        duration: 0.2,
      });
      cursorImg.src = project.querySelector("img").src;
    });

    project.addEventListener("mouseleave", () => {
      gsap.to(pname, { x: "0px", color: "", duration: 0.2, ease: "power2.out" });
      gsap.to(prole, { x: "0px", color: "", duration: 0.2, ease: "power2.out" });
      gsap.to(cursor, {
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(cursorText, {
        scale: 0,
        duration: 0.2,
      });
    });
  });
}

// // Setup timeline
// const tl = gsap.timeline({
//   defaults: {
//     duration: 0.5,
//     ease: "power2.in",
//     opacity: 0,
//   },
// });
//
// // Animate the name on pageload
// // Flip the s from upside down to right side up
// tl.from("#letter-one", {
//   rotation: 90,
//   x: -100,
// }, "1");
// // the g will dangle from the right side in
// t1.from("#letter-twelve", {
//   rotate: -60,
// }, "1");
//
// // Start the animation
// tl.play();
