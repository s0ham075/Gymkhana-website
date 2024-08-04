/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute } from '../chunks/astro/server_BFXbG3aY.mjs';
import 'kleur/colors';
import { M as Move, B as Button, T as Tabs, d as TabsList, e as TabsTrigger, f as TabsContent, Z as Zoom, a as $$Hero, b as $$About, H as HeroHighlight, c as $$Footer, $ as $$Layout } from '../chunks/tabs_BAlWS5cC.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Committees = createComponent(($$result, $$props, $$slots) => {
  const clubs = [
    {
      name: "Technical Committee",
      description: "Explore the latest technologies and build innovative projects.",
      imageUrl: "/placeholder.svg",
      link: "/committee/technical"
    },
    {
      name: "Cultural Committee",
      description: "Celebrate the diverse cultures and traditions of IIITV.",
      imageUrl: "/placeholder.svg",
      link: "/committee/cultural"
    },
    {
      name: "Academics Committee",
      description: "Enhance academic excellence and support student learning.",
      imageUrl: "/placeholder.svg",
      link: "/committee/academics"
    },
    {
      name: "Sports Committee",
      description: "Engage in a variety of sports and fitness activities.",
      imageUrl: "/placeholder.svg",
      link: "/committee/sports"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="clubs" class="py-12 md:py-24 px-6 bg-muted text-muted-header"> <div class="container mx-auto space-y-8"> <div class="flex flex-col items-center justify-center space-y-4 text-center"> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <div class="inline-block rounded-lg bg-white text-black/90 px-3 py-1 text-sm">
Our Committees
</div> ` })} ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0.2, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
Committees
</h2> ` })} ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0.4, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
Explore the diverse range of committees under the Student
                    Gymkhana, each dedicated to enriching student life.
</p> ` })} </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${clubs.map((club, index) => renderTemplate`${renderComponent($$result, "Move", Move, { "client:load": true, "custom": 67, "whileInView": true, "delay": index * 0.3, "transition": { duration: 2 }, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <div class="bg-card rounded-lg overflow-hidden shadow-lg"> <img${addAttribute(club.imageUrl, "src")}${addAttribute(600, "width")}${addAttribute(400, "height")}${addAttribute(club.name, "alt")} class="w-full h-48 object-cover"> <div class="p-4"> <h3 class="text-xl font-bold text-white">${club.name}</h3> <p class="text-muted-foreground mt-2"> ${club.description} </p> ${renderComponent($$result2, "Button", Button, { "variant": "outline", "className": "mt-4", "data-sex": "committee", "data-addr": club.link }, { "default": ($$result3) => renderTemplate`
Learn More
` })} </div> </div> ` })}`)} </div> </div> </section> `;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/landing/Committees.astro", void 0);

const GymkhanaTeams = () => {
  return /* @__PURE__ */ jsx("section", { className: "w-full py-12 md:py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsx(Move, { whileInView: true, onceView: true, delay: 0, children: /* @__PURE__ */ jsx("div", { className: "inline-block rounded-lg bg-muted text-black/90 px-3 py-1 text-sm", children: "Gymkhana Leadership" }) }),
      /* @__PURE__ */ jsx(Move, { whileInView: true, onceView: true, delay: 0.2, children: /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl", children: "Meet the Gymkhana Teams" }) }),
      /* @__PURE__ */ jsx(Move, { whileInView: true, onceView: true, delay: 0.4, children: /* @__PURE__ */ jsx("p", { className: "max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed", children: "The IIITV Gymkhana is led by dedicated student representatives across various teams." }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "executive", className: "mt-8", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "flex flex-wrap justify-center gap-4 mb-6 bg-transparent", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "executive", children: "Executive Team" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "events", children: "Events Team" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "activities", children: "Activities Team" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "outreach", children: "Outreach Team" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "executive", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12", children: [
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "John Doe",
            role: "President",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        ),
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Sarah Adams",
            role: "Vice President",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        ),
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Michael Kim",
            role: "Secretary",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "events", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12", children: [
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Emily Chen",
            role: "Events Coordinator",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        ),
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Mia Chinaar",
            role: "Sponsorship Lead",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "activities", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12", children: [
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Emily Chen",
            role: "Events Coordinator",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        ),
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Los Engela",
            role: "Sponsorship Lead",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "outreach", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12", children: [
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Emily Chen",
            role: "Events Coordinator",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        ),
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Chu Chin",
            role: "Sponsorship Lead",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        )
      ] }) })
    ] })
  ] }) });
};
const TeamMember = ({ name, role, imageUrl, link }) => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };
  return /* @__PURE__ */ jsx(Zoom, { whileInView: true, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: imageUrl,
        width: "550",
        height: "310",
        alt: "Team Member",
        className: "w-full h-[300px] object-cover object-center"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-2", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-black/65 text-lg font-bold", children: name }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: role }),
      /* @__PURE__ */ jsx(Button, { variant: "default", className: "w-full", "data-sex": "member-mail", onClick: () => {
        handleRedirect(link);
      }, children: "Email" })
    ] })
  ] }) });
};

const $$Events = createComponent(($$result, $$props, $$slots) => {
  const events = [
    {
      title: "Cerebro",
      description: "Explore the latest technologies and participate in exciting competitions.",
      date: "April 15, 2023",
      category: "Technical",
      imageUrl: "/placeholder.svg",
      link: "https://cerebro.iiitvadodara.ac.in"
    },
    {
      title: "Kreiva X Alfaaz",
      description: "Celebrate the diverse cultures and traditions of IIITV with music, dance, and food.",
      date: "May 20, 2023",
      category: "Cultural | Academics",
      imageUrl: "/placeholder.svg",
      link: "https://kreiva-x-alfaax.iiitvadodara.ac.in"
    },
    {
      title: "Ventura",
      description: "Compete in a variety of sports and showcase your athletic talents.",
      date: "June 10, 2023",
      category: "Sports",
      imageUrl: "/placeholder.svg",
      link: "https://ventura.iiitvadodara.ac.in"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-muted text-muted-header w-full py-12 px-2 md:py-24 lg:py-32"> <div class="container mx-auto space-y-8"> <div class="flex flex-col items-center justify-center space-y-4 text-center"> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <div class="inline-block rounded-lg bg-white px-3 py-1 text-sm">
Explore Our Events
</div> ` })} ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0.2, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
Exciting Events
</h2> ` })} ${renderComponent($$result, "Move", Move, { "client:load": true, "whileInView": true, "onceView": true, "delay": 0.4, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
Explore the diverse range of events organized by the IIITV
                    Gymkhana, from cultural celebrations to technical workshops.
</p> ` })} </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${events.map((event, index) => {
    let animate = null;
    switch (index % 3) {
      case 0:
        animate = "left";
        break;
      case 1:
        animate = "up";
        break;
      case 2:
        animate = "right";
        break;
    }
    return renderTemplate`${renderComponent($$result, "Move", Move, { "custom": 55, "client:load": true, "animate": animate, "whileInView": true, "delay": 0, "transition": { duration: 2 }, "client:component-hydration": "load", "client:component-path": "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/motion/framerMotion", "client:component-export": "Move" }, { "default": ($$result2) => renderTemplate` <div class="bg-card rounded-lg overflow-hidden shadow-lg"> <div class="relative"> <img${addAttribute(event.imageUrl, "src")}${addAttribute(600, "width")}${addAttribute(400, "height")}${addAttribute(event.title, "alt")} class="w-full h-48 object-cover"> <div class="absolute top-4 left-4 bg-[var(--base-color)] text-primary-foreground px-3 py-1 rounded-md text-sm"> ${event.category} </div> </div> <div class="p-4"> <h3 class="text-xl font-bold text-foreground">${event.title}</h3> <p class="text-muted-foreground mt-2 h-[50px]"> ${event.description} </p> <div class="mt-4 flex justify-between items-center"> <span class="text-sm font-medium text-muted-foreground"> ${event.date} </span> ${renderComponent($$result2, "Button", Button, { "variant": "default", "size": "sm", "data-sex": "event", "data-addr": event.link }, { "default": ($$result3) => renderTemplate`
Learn More
` })} </div> </div> </div> ` })}`;
  })} </div> </div> </section> `;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/landing/Events.astro", void 0);

const $$Quote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-24 px-6"> <div class="container mx-auto"> <blockquote class="text-center text-2xl font-medium italic">
"To be creative means to be in love with life. You can be creative
            only if you love life enough that you want to enhance its beauty,
            you want to bring a little more music to it, a little more poetry to
            it, a little more dance to it."
</blockquote> <div class="mt-6 text-center text-muted-foreground">- Osho</div> </div> </section>`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/Quote.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Student Gymkhana | IIIT Vadodara", "description": "IIITV Student Gymkhana | Committees | Clubs" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/ui/Header.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Unleash Your Potential at", "title_element": "IIITV Gymkhana", "tag_line": "Discover a vibrant community of students dedicated to personal growth, fitness, and campus life", "image": "/hero-highlight-svg.svg", "type_true": true, "p_button": { show: true, text: "Reach Us" }, "s_button": { show: false, text: "Contact Us" } })} ${renderComponent($$result2, "About", $$About, { "title": "About Student Gymkhana", "desc": "The IIITV Gymkhana is the student government body that represents the diverse interests and aspirations of the student community at IIIT Vadodara. We are committed to fostering a vibrant campus life, promoting student welfare, and empowering our peers to reach new heights." })} ${renderComponent($$result2, "Clubs", $$Committees, {})} ${renderComponent($$result2, "HeroHighlight", HeroHighlight, { "client:load": true, "containerClassName": "", "client:component-hydration": "load", "client:component-path": "@/components/ui/hero-highlight", "client:component-export": "HeroHighlight" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GymkhanaTeams", GymkhanaTeams, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/landing/Leadership", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Events", $$Events, {})} ${renderComponent($$result2, "Quote", $$Quote, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/pages/index.astro", void 0);

const $$file = "E:/SYS/Gymkhana_Website/Gymkhana-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
