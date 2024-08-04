import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, f as renderSlot, b as createAstro, d as renderComponent, m as maybeRenderHead } from './astro/server_BFXbG3aY.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { useMotionValue, motion, useMotionTemplate, useInView } from 'framer-motion';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description || "IIITV Student Gymkhana Website | Committees | Clubs", "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex bg-[#66fcf1] items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-non disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-[var(--base-color)] text-slate-100 hover:bg-[var(--base-color-hover)] disabled:bg-black/10 disabled:border-black/10 disabled:text-slate-200",
        destructive: "bg-red-900 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "rounded-none bg-black/10 border border-[var(--primary-color)] text-white order-slate-200 hover:text-slate-100 hover:bg-[var(--primary-color)]",
        outlineV2: "rounded-none bg-[var(--base-color)] border border-[var(--base-color)] text-slate-100 hover:bg-black/10 disabled:bg-black/10 disabled:border-black/10 disabled:text-slate-200",
        secondary: "bg-[var(--primary-color)] text-slate-100 hover:bg-[var(--primary-color-hover)]",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-[var(--primary-color)] underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const HeroHighlight = ({
  bgImage = "/hero-highligh-bg.avif",
  children,
  className,
  containerClassName
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative flex bg-black justify-center items-center w-full group",
        containerClassName
      ),
      onMouseMove: handleMouseMove,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full flex justify-center lg:justify-end", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: bgImage,
            alt: "placeholder",
            width: 400,
            height: 600,
            className: "object-cover max-w-full min-w-full min-h-full block absolte"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60 pointer-events-none" }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "pointer-events-none bg-dot-thick-slate-100   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
            style: {
              WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
              maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: cn("relative z-30", className), children })
      ]
    }
  );
};

const variants = {
  move: {
    up: { initial: (i) => ({ y: i, opacity: 0 }) },
    down: { initial: (i) => ({ y: -i, opacity: 0 }) },
    right: { initial: (i) => ({ x: -i, opacity: 0 }) },
    left: { initial: (i) => ({ x: i, opacity: 0 }) },
    expand: {
      animate: { y: 0, x: 0, opacity: 1 }
    }
  },
  zoom: {
    in: { initial: { scale: 0.8, opacity: 0 } },
    out: { scale: 1.2, opacity: 0 },
    expand: {
      animate: { scale: 1, opacity: 1 }
    }
  },
  card: {
    "3d": { initial: { rotateY: 20, rotateX: 20, rotateZ: 20, opacity: 0 } },
    flip: { rotateY: 180, opacity: 0 },
    expand: {
      animate: { rotateY: 0, rotateX: 0, rotateZ: 0, opacity: 1 }
    }
  }
};
const Move = ({
  custom = 35,
  animate = "up",
  onload = true,
  whileInView = false,
  onceView = false,
  animateOnHover = false,
  delay = null,
  transition,
  children,
  className
}) => {
  if (whileInView) {
    onload = false;
    animateOnHover = false;
  } else if (animateOnHover) {
    onload = false;
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (isInView && onceView) {
    onload = true;
  }
  return /* @__PURE__ */ jsx(
    motion.span,
    {
      ref,
      custom,
      initial: "initial",
      whileInView: whileInView && !onceView && "animate",
      animate: onload && "animate",
      whileHover: animateOnHover && "animate",
      transition: { delay, duration: 1.5, ease: [0.16, 1, 0.3, 1], ...transition },
      variants: { ...variants.move[animate], ...variants.move.expand },
      className: cn(
        `inline-block`,
        className
      ),
      children
    }
  );
};
const Zoom = ({
  custom = 35,
  animate = "in",
  onload = true,
  whileInView = false,
  onceView = false,
  animateOnHover = false,
  delay = null,
  transition,
  children,
  className
}) => {
  if (whileInView) {
    onload = false;
    animateOnHover = false;
  } else if (animateOnHover) {
    onload = false;
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (isInView && onceView) {
    onload = true;
  }
  return /* @__PURE__ */ jsx(
    motion.span,
    {
      ref,
      custom,
      initial: "initial",
      whileInView: whileInView && !onceView && "animate",
      animate: onload && "animate",
      whileHover: animateOnHover && "animate",
      transition: { delay, duration: 0.3, ease: [0.16, 1, 0.3, 1], ...{ type: "spring", stiffness: 250 }, ...transition },
      variants: { ...variants.zoom[animate], ...variants.zoom.expand },
      className: cn(
        `inline-block`,
        className
      ),
      children
    }
  );
};
const CardEffect = ({
  animate = "3d",
  transition,
  children,
  className
}) => {
  return /* @__PURE__ */ jsx(
    motion.span,
    {
      initial: "initial",
      animate: "animate",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], ...{ type: "spring", stiffness: 100 }, ...transition },
      variants: { ...variants.card[animate], ...variants.card.expand },
      className: cn(
        `relative inline-block`,
        className
      ),
      children
    }
  );
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, title_element, tag_line, image, type_true, p_button, s_button } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "HeroHighlight", HeroHighlight, { "client:load": true, "className": "bg-cover bg-center py-12 md:py-24 lg:py-32", "containerClassName": "", "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/ui/hero-highlight.tsx", "client:component-export": "HeroHighlight" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-cover bg-center py-12 md:py-24 lg:py-12"> <div class="container mx-auto px-4 md:px-6"> <div class="grid md:grid-cols-2 gap-8 items-center "> <div class="space-y-8 md:space-y-14 lg:space-y-14 h-full flex flex-col justify-center"> <div class="space-y-4"> <h1 class="text-4xl capitalize font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl text-center md:text-start"> ${renderComponent($$result2, "Move", Move, { "client:load": true, "transition": { duration: 1 }, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion.tsx", "client:component-export": "Move" }, { "default": ($$result3) => renderTemplate`${title}<br> <span class="text-[var(--base-color)]">${title_element}</span> ` })} </h1> <p class="text-lg text-primary-foreground/80 text-center md:text-start px-2"> ${renderComponent($$result2, "Move", Move, { "client:load": true, "transition": { duration: 2, delay: 0.2 }, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion.tsx", "client:component-export": "Move" }, { "default": ($$result3) => renderTemplate`${tag_line}` })} </p> </div> <div class="w-[100%] lg:w-[80%] flex justify-center md:justify-center gap-2 items-center "> ${p_button.show ? renderTemplate`${renderComponent($$result2, "Zoom", Zoom, { "client:load": true, "delay": 0.5, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion.tsx", "client:component-export": "Zoom" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", Button, { "variant": "outlineV2", "className": "capitalize p-6 rounded-none" }, { "default": ($$result4) => renderTemplate`${p_button.text}` })}` })}` : null} ${s_button.show ? renderTemplate`${renderComponent($$result2, "Zoom", Zoom, { "client:load": true, "delay": 0.7, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion.tsx", "client:component-export": "Zoom" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", Button, { "variant": "outline", "className": "capitalize text-white p-6" }, { "default": ($$result4) => renderTemplate`${s_button.text}` })}` })}` : null} </div> </div> ${renderComponent($$result2, "CardEffect", CardEffect, { "client:load": true, "className": "rounded-xl overflow-hidden", "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion.tsx", "client:component-export": "CardEffect" }, { "default": ($$result3) => renderTemplate` <img${addAttribute(image, "src")}${addAttribute(700, "width")}${addAttribute(400, "height")} alt="IIITV Gymkhana" class="rounded-xl object-cover"> ` })} </div> </div> </section> ` })} ${type_true ? renderTemplate(_a || (_a = __template([`<script>

    // Just ignore the errors here!

    !function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(t||self).Typed=s()}(this,function(){function t(){return(t=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,s){},onStringTyped:function(t,s){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,s){},onTypingResumed:function(t,s){},onReset:function(t){},onStop:function(t,s){},onStart:function(t,s){},onDestroy:function(t){}},e=new(function(){function e(){}var n=e.prototype;return n.load=function(e,n,i){if(e.el="string"==typeof i?document.querySelector(i):i,e.options=t({},s,n),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(t){return t.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(e.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)e.strings.push(r[a].innerHTML.trim())}for(var u in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[u]=u;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\\n        .typed-cursor{\\n          opacity: 1;\\n        }\\n        .typed-cursor.typed-cursor--blink{\\n          animation: typedjsBlink 0.7s infinite;\\n          -webkit-animation: typedjsBlink 0.7s infinite;\\n                  animation: typedjsBlink 0.7s infinite;\\n        }\\n        @keyframes typedjsBlink{\\n          50% { opacity: 0.0; }\\n        }\\n        @-webkit-keyframes typedjsBlink{\\n          0% { opacity: 1; }\\n          50% { opacity: 0.0; }\\n          100% { opacity: 1; }\\n        }\\n      ",document.body.appendChild(e)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\\n        .typed-fade-out{\\n          opacity: 0;\\n          transition: opacity .25s;\\n        }\\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\\n          -webkit-animation: 0;\\n          animation: 0;\\n        }\\n      ",document.body.appendChild(e)}},e}()),n=new(function(){function t(){}var s=t.prototype;return s.typeHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n,i=t.substring(s).charAt(0);if("<"===i||"&"===i){for(n="<"===i?">":";";t.substring(s+1).charAt(0)!==n&&!(1+ ++s>t.length););s++}return s},s.backSpaceHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n,i=t.substring(s).charAt(0);if(">"===i||";"===i){for(n=">"===i?"<":"&";t.substring(s-1).charAt(0)!==n&&!(--s<0););s--}return s},t}());return function(){function t(t,s){e.load(this,s,t),this.begin()}var s=t.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout(function(){s=n.typeHtmlChars(t,s,e);var i=0,o=t.substring(s);if("^"===o.charAt(0)&&/^\\^\\d+/.test(o)){var a=1;a+=(o=/\\d+/.exec(o)[0]).length,i=parseInt(o),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+a),e.toggleBlinking(!0)}if("\`"===o.charAt(0)){for(;"\`"!==t.substring(s+r).charAt(0)&&!(s+ ++r>t.length););var u=t.substring(0,s),p=t.substring(u.length+1,s+r);t=u+p+t.substring(s+r+1),r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},i)},i):this.setPauseStatus(t,s,!0)},s.keepTyping=function(t,s,e){0===s&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,s+=e);this.replaceText(n),this.typewrite(t,s)},s.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},s.backspace=function(t,s){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=n.backSpaceHtmlChars(t,s,e);var i=t.substring(0,s);if(e.replaceText(i),e.smartBackspace){var r=e.strings[e.arrayPos+1];e.stopNum=r&&i===r.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}else this.setPauseStatus(t,s,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&0!==t.el.value.length||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}()});

    var typed = new typed('#element', {
      strings: ['IIITV Gymkhana ^1000'],
      typeSpeed: 80,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    }); 
<\/script>`], [`<script>

    // Just ignore the errors here!

    !function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(t||self).Typed=s()}(this,function(){function t(){return(t=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,s){},onStringTyped:function(t,s){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,s){},onTypingResumed:function(t,s){},onReset:function(t){},onStop:function(t,s){},onStart:function(t,s){},onDestroy:function(t){}},e=new(function(){function e(){}var n=e.prototype;return n.load=function(e,n,i){if(e.el="string"==typeof i?document.querySelector(i):i,e.options=t({},s,n),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(t){return t.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(e.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)e.strings.push(r[a].innerHTML.trim())}for(var u in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[u]=u;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\\\\n        .typed-cursor{\\\\n          opacity: 1;\\\\n        }\\\\n        .typed-cursor.typed-cursor--blink{\\\\n          animation: typedjsBlink 0.7s infinite;\\\\n          -webkit-animation: typedjsBlink 0.7s infinite;\\\\n                  animation: typedjsBlink 0.7s infinite;\\\\n        }\\\\n        @keyframes typedjsBlink{\\\\n          50% { opacity: 0.0; }\\\\n        }\\\\n        @-webkit-keyframes typedjsBlink{\\\\n          0% { opacity: 1; }\\\\n          50% { opacity: 0.0; }\\\\n          100% { opacity: 1; }\\\\n        }\\\\n      ",document.body.appendChild(e)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\\\\n        .typed-fade-out{\\\\n          opacity: 0;\\\\n          transition: opacity .25s;\\\\n        }\\\\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\\\\n          -webkit-animation: 0;\\\\n          animation: 0;\\\\n        }\\\\n      ",document.body.appendChild(e)}},e}()),n=new(function(){function t(){}var s=t.prototype;return s.typeHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n,i=t.substring(s).charAt(0);if("<"===i||"&"===i){for(n="<"===i?">":";";t.substring(s+1).charAt(0)!==n&&!(1+ ++s>t.length););s++}return s},s.backSpaceHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n,i=t.substring(s).charAt(0);if(">"===i||";"===i){for(n=">"===i?"<":"&";t.substring(s-1).charAt(0)!==n&&!(--s<0););s--}return s},t}());return function(){function t(t,s){e.load(this,s,t),this.begin()}var s=t.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout(function(){s=n.typeHtmlChars(t,s,e);var i=0,o=t.substring(s);if("^"===o.charAt(0)&&/^\\\\^\\\\d+/.test(o)){var a=1;a+=(o=/\\\\d+/.exec(o)[0]).length,i=parseInt(o),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+a),e.toggleBlinking(!0)}if("\\\`"===o.charAt(0)){for(;"\\\`"!==t.substring(s+r).charAt(0)&&!(s+ ++r>t.length););var u=t.substring(0,s),p=t.substring(u.length+1,s+r);t=u+p+t.substring(s+r+1),r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},i)},i):this.setPauseStatus(t,s,!0)},s.keepTyping=function(t,s,e){0===s&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,s+=e);this.replaceText(n),this.typewrite(t,s)},s.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},s.backspace=function(t,s){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=n.backSpaceHtmlChars(t,s,e);var i=t.substring(0,s);if(e.replaceText(i),e.smartBackspace){var r=e.strings[e.arrayPos+1];e.stopNum=r&&i===r.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}else this.setPauseStatus(t,s,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&0!==t.el.value.length||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}()});

    var typed = new typed('#element', {
      strings: ['IIITV Gymkhana ^1000'],
      typeSpeed: 80,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    }); 
<\/script>`]))) : null}`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/ui/Hero.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary text-primary-foreground py-6 px-6"> <div class="container mx-auto flex items-center justify-between"> <a href="/club/dot"><p class="text-sm">&copy; 2024 Student Gymkhana IIITV | Dot</p></a> <div class="flex items-center gap-4"> <a href="#" class="hover:underline">Privacy Policy</a> <a href="#" class="hover:underline">Terms of Service</a> </div> </div> </footer>`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/ui/Footer.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { title, desc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-12 md:py-24 px-6"> <div class="container mx-auto space-y-8"> <div class="flex flex-col items-center justify-center space-y-4 text-center"> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <div class="inline-block rounded-lg bg-muted text-black/90 px-3 py-1 text-sm">
Who We Are
</div> ` })} ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0.2, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">${title}</h2> ` })} ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0.4, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">${desc}</p> ` })} </div> </div> </div> </section>`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/ui/About.astro", void 0);

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { $$Layout as $, Button as B, HeroHighlight as H, Move as M, Tabs as T, Zoom as Z, $$Hero as a, $$About as b, $$Footer as c, TabsList as d, TabsTrigger as e, TabsContent as f, cn as g };
