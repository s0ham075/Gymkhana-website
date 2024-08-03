import React, { useState, useEffect } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function MenubarDemo() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menubar-container') && nav) {
        setNav(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);

  return (
    <div className='relative'>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <div className='hidden md:flex'>
          
        </div>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 menubar-container'
            : 'ease-in-out duration-500 fixed left-[-100%] menubar-container'
        }
      >
        <Menubar className="bg-primary border-none flex flex-col">
          <MenubarMenu>
            <MenubarTrigger className='p-4 border-b border-gray-600'>Home</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className='p-4 border-b border-gray-600'>Office Bearers</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className='p-4 border-b border-gray-600'>PICs</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className='p-4 border-b border-gray-600'>Committees</MenubarTrigger>
            <MenubarContent className="bg-primary border-none">
              <MenubarSub>
                <MenubarSubTrigger className='p-4 border-b border-gray-600'>Technical</MenubarSubTrigger>
                <MenubarSubContent className="bg-primary border-none">
                  <MenubarItem className='p-4 border-b border-gray-600'>Members</MenubarItem>
                  <MenubarItem className='p-4 border-b border-gray-600'>Events</MenubarItem>
                  <MenubarItem className='p-4 border-b border-gray-600'>Gallery</MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger className='p-4 border-b border-gray-600'>Clubs</MenubarSubTrigger>
                    <MenubarSubContent className="bg-primary border-none">
                      <MenubarSub>
                        <MenubarSubTrigger className='p-4 border-b border-gray-600'>Loda</MenubarSubTrigger>
                        <MenubarSubContent className="bg-primary border-none">
                          <MenubarItem className='p-4 border-b border-gray-600'>Members</MenubarItem>
                          <MenubarItem className='p-4 border-b border-gray-600'>Events</MenubarItem>
                          <MenubarItem className='p-4 border-b border-gray-600'>Gallery</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSub>
                        <MenubarSubTrigger className='p-4 border-b border-gray-600'>Lassun</MenubarSubTrigger>
                        <MenubarSubContent className='bg-primary border-none'>
                          <MenubarItem className='p-4 border-b border-gray-600'>Members</MenubarItem>
                          <MenubarItem className='p-4 border-b border-gray-600'>Events</MenubarItem>
                          <MenubarItem className='p-4 border-b border-gray-600'>Gallery</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className='p-4 border-b border-gray-600'>Events</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className='p-4 border-b border-gray-600'>Gallery</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className='p-4 border-b border-gray-600'>Constitution</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className='p-4 border-b border-gray-600'>Contact US</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
