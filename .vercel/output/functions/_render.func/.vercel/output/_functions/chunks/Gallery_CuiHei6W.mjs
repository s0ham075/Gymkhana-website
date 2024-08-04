import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { T as Tabs, d as TabsList, e as TabsTrigger, f as TabsContent, B as Button, g as cn } from './tabs_BAlWS5cC.mjs';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GymkhanaTeams = () => {
  return /* @__PURE__ */ jsx("section", { className: "w-full py-12 md:py-24 lg:py-32 bg-muted text-muted-header ", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block rounded-lg bg-white px-3 py-1 text-sm", children: "Team Technical" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl", children: "Technical Committee Team" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed", children: "The IIITV Gymkhana is led by dedicated student representatives across various teams." })
    ] }) }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "leads", className: "mt-8", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "flex flex-wrap justify-center gap-4 mb-6 bg-muted", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "leads", children: "Committee Leads" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "core", children: "Core Team" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "trainee", children: "Trainees" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "leads", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12", children: [
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "John Doe",
            role: "Gymkhana President",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        ),
        /* @__PURE__ */ jsx(
          TeamMember,
          {
            name: "Sarah Adams",
            role: "General Secretary",
            imageUrl: "/placeholder.svg",
            link: "mailto:202351030@iiitvadodara.ac.in"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "core", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12", children: [
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
      /* @__PURE__ */ jsx(TabsContent, { value: "trainee", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12", children: [
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
      ] }) })
    ] })
  ] }) });
};
const TeamMember = ({ name, role, imageUrl, link }) => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: [
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
      /* @__PURE__ */ jsx(Button, { variant: "default", className: "w-full outline-none border-none", "data-sex": "member-mail", onClick: () => {
        handleRedirect(link);
      }, children: "Email" })
    ] })
  ] });
};

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "default", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full border-none",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "default", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full border-none",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

const Gallery = () => {
  return /* @__PURE__ */ jsx("section", { className: "w-full py-12 md:py-24 lg:py-32 bg-muted text-muted-header", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto space-y-8 px-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block rounded-lg bg-white px-3 py-1 text-sm", children: "Sneak Peeks" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl", children: "Explore Our Gallery" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed", children: "Take a look at our gallery to see the vibrant events and activities organized by the IIITV Technical Committee." })
    ] }),
    /* @__PURE__ */ jsxs(Carousel, { className: "w-full max-w-5xl", children: [
      /* @__PURE__ */ jsxs(CarouselContent, { children: [
        /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/placeholder.svg",
            width: "1200",
            height: "675",
            alt: "Gallery Image 1",
            className: "aspect-video w-full overflow-hidden rounded-xl object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/placeholder.svg",
            width: "1200",
            height: "675",
            alt: "Gallery Image 2",
            className: "aspect-video w-full overflow-hidden rounded-xl object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/placeholder.svg",
            width: "1200",
            height: "675",
            alt: "Gallery Image 3",
            className: "aspect-video w-full overflow-hidden rounded-xl object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/placeholder.svg",
            width: "1200",
            height: "675",
            alt: "Gallery Image 4",
            className: "aspect-video w-full overflow-hidden rounded-xl object-cover"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:flex" }),
      /* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:flex" })
    ] })
  ] }) }) });
};

export { GymkhanaTeams as G, Gallery as a };
