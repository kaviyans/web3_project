import {
  BookOpen,
  Bot,
  Command,
  LifeBuoy,
  Send,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./navMain"
import { NavSecondary } from "./NavSecondary"
import { NavUser } from "./NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard", 
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Prescription",
      url: "/prescription", 
      icon: Bot,
    },
    {
      title: "Documentation",
      url: "/documentation", 
      icon: BookOpen,
    },
  ],
  navSecondary: [
    { title: "Support", url: "#", icon: LifeBuoy },
    { title: "Feedback", url: "#", icon: Send },
  ],
};
console.log("appsidebar");

export function AppSidebar({ handleLogout, ...props }) {
  return (
    <Sidebar  className="text-white bg-black shadow-lg shadow-stone-300" variant="inset" {...props}>
      <SidebarHeader className="bg-black ">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="flex items-center space-x-2">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white text-black">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs text-gray-400">
                    Enterprise
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-black">
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="bg-black border-t border-gray-700">
        <NavUser user={data.user} handleLogout={handleLogout} />
      </SidebarFooter>
    </Sidebar>
  );
}
