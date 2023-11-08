import gsap from "gsap";
import  ScrollTrigger  from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function animateOnScroll(end:any) {


  const timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: document.documentElement,
      start: 0,
      end: end,
      scrub: true,
      markers: true,
    },
  });
    return timeLine;

}