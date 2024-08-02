import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  export default function MenubarDemo() {
    return (
      <Menubar className="!bg-primary border-none hidden md:flex">
        <MenubarMenu>
            <MenubarTrigger>Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Office Bearers</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>PICs</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Committees</MenubarTrigger>
          <MenubarContent className="!bg-primary border-none">
            <MenubarSub>
              <MenubarSubTrigger>Technical</MenubarSubTrigger>
              <MenubarSubContent className="!bg-primary border-none">
                <MenubarItem>Members</MenubarItem>
                <MenubarItem>Events</MenubarItem>
                <MenubarItem>Gallery</MenubarItem>
                <MenubarSub>
                    <MenubarSubTrigger>Clubs</MenubarSubTrigger>
                    <MenubarSubContent className="!bg-primary border-none">
                        <MenubarSub>
                            <MenubarSubTrigger>Loda</MenubarSubTrigger>
                            <MenubarSubContent className="!bg-primary border-none">
                                <MenubarItem>Members</MenubarItem>
                                <MenubarItem>Events</MenubarItem>
                                <MenubarItem>Gallery</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSub>
                            <MenubarSubTrigger>Lassun</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Members</MenubarItem>
                                <MenubarItem>Events</MenubarItem>
                                <MenubarItem>Gallery</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarSubContent>
                </MenubarSub>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Events</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Gallery</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Constitution</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Contact US</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
  }
  