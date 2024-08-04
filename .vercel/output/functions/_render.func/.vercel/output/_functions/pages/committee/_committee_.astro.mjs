/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent } from '../../chunks/astro/server_BFXbG3aY.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Hero, b as $$About, c as $$Footer } from '../../chunks/tabs_BAlWS5cC.mjs';
import { G as GymkhanaTeams, a as Gallery } from '../../chunks/Gallery_CuiHei6W.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Clubs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Clubs;
  const { committee, club_line } = Astro2.params;
  console.log(committee, club_line);
  return renderTemplate`${maybeRenderHead()}<section id="clubs" class="w-full py-12 md:py-24 lg:py-32"> <div class="container mx-auto space-y-8 px-10"> <div class="flex flex-col items-center justify-center space-y-4 text-center"> <div class="space-y-2"> <div class="inline-block capitalize rounded-lg bg-muted text-black/90 px-3 py-1 text-sm"> ${committee}'s Clubs
</div> <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
Clubs within the ${committee} Committee
</h2> <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"> ${club_line} </p> </div> <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"> <div class="flex flex-col justify-center space-y-4"> <h3 class="text-xl font-bold">Coding Club</h3> <p class="text-muted-foreground">
The Coding Club emphasizes developing programming skills and creating software solutions. Members engage in collaborative projects, coding challenges, and learn about cutting-edge technologies and best practices in software development and competitive programming.
</p> <a href="/club/coding" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
Learn More
</a> </div> <img src="/CodingClub.avif" width="550" height="310" alt="Robotics Club" class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"> </div> <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"> <img src="/placeholder.svg" width="550" height="310" alt="AI Club" class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"> <div class="flex flex-col justify-center space-y-4"> <h3 class="text-xl font-bold">AI Club</h3> <p class="text-muted-foreground">
The AI Club focuses on exploring the latest advancements in
            artificial intelligence, machine learning, and deep learning.
            Members work on projects, attend workshops, and engage in
            discussions to deepen their understanding of these cutting-edge
            technologies.
</p> <a href="/club/ai" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
Learn More
</a> </div> </div> </div> </div> </section>`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/committee/Clubs.astro", void 0);

const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="events" class="w-full py-12 md:py-24 px-0 lg:py-32"> <div class="container mx-auto space-y-8 px-10"> <div class="flex flex-col items-center justify-center space-y-4 text-center"> <div class="space-y-2"> <div class="inline-block rounded-lg bg-muted text-black/90 px-3 py-1 text-sm">Flagship Events</div> <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Talk of the Town</h2> <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
The Technical Committee of IIITV organizes a range of flagship events throughout the year, aimed at
            fostering innovation, building community, and empowering students.
</p> </div> </div> <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 text-accent"> <div class="flex flex-col justify-center space-y-4"> <ul class="grid gap-6"> <li> <div class="grid gap-1"> <h3 class="text-xl font-bold">Hackathons</h3> <p class="text-muted-foreground">
Our annual hackathons challenge students to develop innovative solutions to real-world problems,
                  fostering creativity and collaboration.
</p> <a href="#" class="underline">Learn More</a> </div> </li> <li> <div class="grid gap-1"> <h3 class="text-xl font-bold">Tech Talks</h3> <p class="text-muted-foreground">
We invite industry experts and renowned speakers to share their insights and experiences,
                  inspiring students to explore new technologies and career paths.
</p> <a href="#" class="underline">Learn More</a> </div> </li> <li> <div class="grid gap-1"> <h3 class="text-xl font-bold">Workshops</h3> <p class="text-muted-foreground">
Our hands-on workshops cover a wide range of technical skills, from web development to machine
                  learning, empowering students to expand their expertise.
</p> <a href="#" class="underline">Learn More</a> </div> </li> </ul> </div> <img src="/placeholder.svg" width="550" height="310" alt="Events" class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"> </div> </div> </section>`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/components/committee/Events.astro", void 0);

const $$Astro = createAstro();
function getStaticPaths() {
  return {
    paths: [
      { params: { committee: "Technical" } },
      { params: { committee: "Cultural" } },
      { params: { committee: "Sports" } }
    ],
    fallback: false
  };
}
const $$committee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$committee;
  const { committee } = Astro2.params;
  const committee_title = "Empowering Innovation at IIITV";
  const committee_description = "The IIITV Technical Committee is a student-led organization dedicated to fostering a vibrant technical community at IIITV. We aim to empower students to explore their passions, develop their skills, and make a meaningful impact through various initiatives and events.";
  const club_line = "The IIITV Technical Committee comprises several specialized clubs that cater to different areas of technology and innovation.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${committee.charAt(0).toUpperCase() + committee.slice(1)} Committee | IIIT Vadodara`, "description": committee_description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/ui/Header.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Hero", $$Hero, { "title": `${committee} Committee IIITV`, "tag_line": "Empowering innovation and fostering a vibrant technical community at IIITV.", "image": "/placeholder.svg", "type_true": false, "p_button": { show: true, text: "explore events" }, "s_button": { show: true, text: "join now" } })} ${renderComponent($$result2, "About", $$About, { "title": committee_title, "desc": committee_description })} ${renderComponent($$result2, "Members", GymkhanaTeams, {})} ${renderComponent($$result2, "Events", $$Events, {})} ${renderComponent($$result2, "Gallery", Gallery, {})} ${renderComponent($$result2, "Clubs", $$Clubs, { "committee": committee, "club_line": club_line })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/SYS/Gymkhana_Website/Gymkhana-website/src/pages/committee/[committee].astro", void 0);

const $$file = "E:/SYS/Gymkhana_Website/Gymkhana-website/src/pages/committee/[committee].astro";
const $$url = "/committee/[committee]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$committee,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
