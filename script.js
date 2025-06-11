import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function headingsTrigger() {
  let headingElements = document.querySelectorAll(".heading-2");

  headingElements.forEach((heading) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading, // Set the trigger to the specific heading element
        start: "top 80%", // Adjust start position as needed
        // toggleActions: "play reverse play reverse", // Trigger the animation every time the element enters/leaves the viewport
      },
    });

    // Add animations to the timeline
    tl.set(heading, { autoAlpha: 1 }).from(heading, {
      opacity: 0,
      y: "3rem",
      duration: 0.5,
    });
  });
}

function servicesCardTrigger() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home_service",
      start: "top 60%",
    },
  });

  tl.from(".home_service_card", {
    opacity: 0,
    y: "1rem",
    stagger: { amount: 0.4 },
    duration: 2,
    from: "start",
  });
}

function photosTrigger() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home_about",
      start: "top 40%",
    },
  });

  tl.from(".home_about_image1", { opacity: 0, scale: 0.4, duration: 1 });
  tl.from(".home_about_image2", { opacity: 0, scale: 0.6, duration: 0.5 });
}

function faqTrigger() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home_faq",
      start: "top 60%",
    },
  });

  tl.from(".home_faq_question", {
    opacity: 0,
    y: "1rem",
    stagger: { amount: 0.4 },
    duration: 1.5,
    from: "start",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // animations trigger when webpage loads

  headingsTrigger();
  servicesCardTrigger();
  photosTrigger();
  faqTrigger();
  console.log("Custom code loaded successfully");
});

