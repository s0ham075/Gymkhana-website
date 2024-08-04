'use client';
import $ from 'jquery';
import { Button } from "../ui/button";
import './header.css';

import { cn } from '@/lib/utils';

export default function Header() {

  $(document).ready(function () {
    'use strict';

     var c, currentScrollTop = 0,
         navbar = $('#navbar');
  
     $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b + b) {
          navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });
    
  });

  return (
    <header id="navbar" className="navbar fixed top-0 z-50 bg-black/50 backdrop-blur-sm text-primary-foreground py-6 px-4 md:px-6 w-full">
      <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
              <span className="text-lg font-bold">IIITV Gymkhana</span>
          </a>
          <nav className="hidden md:flex items-center gap-4">
              <a href="#" className="text-sm font-medium hover:underline">Events</a>
              <a href="#" className="text-sm font-medium hover:underline"
                  >Activities</a>
              <a href="#" className="text-sm font-medium hover:underline"
                  >Achievements</a>
              <a href="#" className="text-sm font-medium hover:underline"
                  >Testimonials</a>
          </nav>
          <Button variant="secondary" className="hidden md:inline-flex">
              Join Now
          </Button>
      </div>
    </header>
  );
};