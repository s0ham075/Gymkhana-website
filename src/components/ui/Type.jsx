
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
      typeSpeed: 80,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el}></span>
    </div>
  );
}