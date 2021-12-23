import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(Draggable, TextPlugin);

// // note that gsap is not tree-shakeable
// // see https://greensock.com/forums/topic/26044-treeshaking-gsap-core/
// // import gsap from 'gsap';
// import gsap from 'gsap';
// import { Draggable } from 'gsap/all';

// // gsap plugins:
// // import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// // import { Flip } from 'gsap/dist/Flip';
// // import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

// // import ScrollTrigger from 'gsap/ScrollTrigger';
// // import Flip from 'gsap/Flip';
// // import Draggable from 'gsap/Draggable';

// // don't forget to register plugins
// gsap.registerPlugin(Draggable /*Flip, MotionPathPlugin*/);

gsap.defaults({
  duration: 2,
});
