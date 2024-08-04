/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro } from '../../chunks/astro/server_BFXbG3aY.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Hero, b as $$About, c as $$Footer } from '../../chunks/tabs_BAlWS5cC.mjs';
import { G as GymkhanaTeams, a as Gallery } from '../../chunks/Gallery_CuiHei6W.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="events" class="w-full py-12 md:py-24 px-0 lg:py-32"> <div class="container mx-auto space-y-8 px-10"> <div class="flex flex-col items-center justify-center space-y-4 text-center"> <div class="space-y-2"> <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Explore Our Events</div> <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Exciting Events</h2> <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
The Technical Committee of IIITV organizes a range of flagship events throughout the year, aimed at
            fostering innovation, building community, and empowering students.
</p> </div> </div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> <a href="#" class="rounded-lg bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg"> <div class="mb-4"> <img src="/placeholder.svg" alt="Introduction to React"${addAttribute(400, "width")}${addAttribute(225, "height")} class="rounded-lg object-cover"${addAttribute({ aspectRatio: "400/225", objectFit: "cover" }, "style")}> <h3 class="mt-4 text-xl font-bold text-foreground">Introduction to React</h3> <p class="text-muted-foreground">July 15, 2023</p> </div> <p class="text-muted-foreground">
Learn the fundamentals of React, a popular JavaScript library for building user interfaces. This event is
        perfect for beginners who want to get started with React.
</p> </a> <a href="#" class="rounded-lg bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg"> <div class="mb-4"> <img src="/placeholder.svg" alt="Competitive Programming Workshop"${addAttribute(400, "width")}${addAttribute(225, "height")} class="rounded-lg object-cover"${addAttribute({ aspectRatio: "400/225", objectFit: "cover" }, "style")}> <h3 class="mt-4 text-xl font-bold text-foreground">Competitive Programming Workshop</h3> <p class="text-muted-foreground">August 5, 2023</p> </div> <p class="text-muted-foreground">
Improve your problem-solving skills and learn advanced techniques for competitive programming. This
        workshop is suitable for both beginners and experienced coders.
</p> </a> <a href="#" class="rounded-lg bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg"> <div class="mb-4"> <img src="/placeholder.svg" alt="Machine Learning Meetup"${addAttribute(400, "width")}${addAttribute(225, "height")} class="rounded-lg object-cover"${addAttribute({ aspectRatio: "400/225", objectFit: "cover" }, "style")}> <h3 class="mt-4 text-xl font-bold text-foreground">Machine Learning Meetup</h3> <p class="text-muted-foreground">September 10, 2023</p> </div> <p class="text-muted-foreground">
Join us for a meetup where we'll discuss the latest trends and advancements in machine learning. Bring
        your questions and share your experiences with the community.
</p> </a> </div> </div> </section>`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/club/Events.astro", void 0);

const $$Astro = createAstro();
const $$club = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$club;
  const { club } = Astro2.params;
  const club_title = "The programmers";
  const club_description = "The IIITV coding club is a student-led organization dedicated to fostering a vibrant technical community at IIITV. We aim to empower students to explore their passions, develop their skills, and make a meaningful impact through various initiatives and events.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${club.charAt(0).toUpperCase() + club.slice(1)} club | IIIT Vadodara`, "description": club_description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/ui/Header.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Hero", $$Hero, { "title": `${club} club IIITV`, "tag_line": "Empowering students to explore the world of coding and technology.", "image": "/CodingClub.avif", "type_true": false, "p_button": { show: true, text: "Visit Now" }, "s_button": { show: false } })} ${renderComponent($$result2, "About", $$About, { "title": club_title, "desc": club_description })} ${renderComponent($$result2, "Members", GymkhanaTeams, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/committee/Members.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Events", $$Events, {})} ${renderComponent($$result2, "Gallery", Gallery, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/Gallery.jsx", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/pages/club/[club].astro", void 0);

const $$file = "E:/SYS/Gymkhana_Website/Gymkhana-website/src/pages/club/[club].astro";
const $$url = "/club/[club]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$club,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
