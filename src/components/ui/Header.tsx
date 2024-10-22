'use client';
import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';

import Menu from "./menu";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import { motion, type Variants } from 'framer-motion';
import animationData from './lottie-animation/menuButton.json';
import Lottie, { useLottie } from 'lottie-react';
import './header.css';
import { cn } from '@/lib/utils';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Header() {
  
  useEffect(() => {
    $(document).ready(function () {
      'use strict';

      var c, currentScrollTop = 0,
          navbar = $('.navbar');
    
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
  }, []);

  return (
    <header id="navbar" className="navbar fixed top-0 z-50 w-full">
      <div className=" container mx-auto  hidden lg:flex items-center justify-between bg-black/20 backdrop-blur-sm text-primary-foreground py-3 px-4 md:px-6 w-[90%] max-w-[1140px] mt-4 rounded-[10px]">
          <a href="#" className="flex items-center gap-2">
              <span className="text-lg font-normal">IIITV Gymkhana</span>
          </a>
          <Menu />
          {/* <Button variant="secondary" className="hidden max-w-[80px] md:inline-flex">Join Now</Button> */}
      </div>
      <ViewDownMenu />
    </header>
  );
};

const ViewDownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lottieRef = useRef(null);


  const lottieView = useLottie({
    animationData: animationData,
    loop: false,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    style:{
      height: 30,
      width: 30,
    }
  });

  lottieRef.current = lottieView;
  
  const handleBarClick = () => {
    setIsOpen(!isOpen);
    const dur = 168;
    lottieRef.current.setSpeed(3);

    if ( !isOpen ) {
      lottieRef.current.playSegments([0, dur/2], true);
    } else {
      lottieRef.current.playSegments([dur/2, 0], true);
    }
  };

  return (
    <>
      <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="px-[5%] lg:hidden"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleBarClick}
            id="nav-container"
            className="container mx-auto flex items-center justify-between bg-black/20 backdrop-blur-md text-primary-foreground py-4 px-4 sm:px-6 sm:py-5 md:px-6 w-full max-w-[1140px] mt-4 mb-2 rounded-[10px]"
          >
            <a href="#" className="flex items-center gap-2">
              <span className="text-lg font-normal">IIITV Gymkhana</span>
            </a>
            <div ref={lottieRef} className="">
              {lottieView.View}
            </div>
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            style={{
              pointerEvents: isOpen ? "auto" : "none",
              display: isOpen ? "flex" : "none"}}
            className="bg-black/25 backdrop-blur-md px-4 py-10 flex flex-col"
          >
            <SimpleTreeView className="flex flex-col gap-[2px]">
              <motion.li variants={itemVariants}>
                <TreeItem itemId="home" label="Home"/>
              </motion.li>
              <motion.li variants={itemVariants}>
                <TreeItem itemId="office-bearers" label="Office Bearers" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <TreeItem itemId="pics" label="PICs" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <TreeItem itemId="committees" label="Committees">
                  <TreeItem itemId="technical" label="Technical">
                    <TreeItem itemId="technical-members" label="Members" />
                    <TreeItem itemId="technical-events" label="Events" />
                    <TreeItem itemId="technical-gallery" label="Gallery" />
                  </TreeItem>
                </TreeItem>
              </motion.li>
              <motion.li variants={itemVariants}>
                <TreeItem itemId="events" label="Events" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <TreeItem itemId="gallery" label="Gallery" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <TreeItem itemId="more" label="More">
                  <TreeItem itemId="constitution" label="Constitution" />
                  <TreeItem itemId="contact-us" label="Contact Us" />
                </TreeItem>
              </motion.li>
            </SimpleTreeView>
          </motion.ul>
        </motion.nav>
    </>
  );
}

