// note that gsap is not tree-shakeable
// see https://greensock.com/forums/topic/26044-treeshaking-gsap-core/
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { TextPlugin } from 'gsap/TextPlugin';
import { Flip } from 'gsap/Flip';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// see https://greensock.com/forums/topic/28784-gsap-react-gsap-defaults-duration/

gsap.registerPlugin(Draggable, TextPlugin, Flip, MotionPathPlugin);

// set GSAP defaults here
gsap.defaults({
  duration: 2,
});
