import {
  BookOpen,
  Bot,
  Command,
  LifeBuoy,
  Send,
  SquareTerminal,
  Pill,
} from "lucide-react";

import { NavMain } from "./navMain";
import { NavSecondary } from "./NavSecondary";
import { NavUser } from "./NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

export function AppSidebar({ handleLogout, role, ...props }) {
  // Dynamic `navMain` based on role
  const navMain =
    role === "doctor"
      ? [
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
        ]
      : [
          {
            title: "Dashboard",
            url: "/dashboardpat",
            icon: SquareTerminal,
            isActive: true,
          },
          {
            title: "Tablets",
            url: "/tablets",
            icon: Pill,
          },
        ];

  // Static `navSecondary`
  const navSecondary = [
    { title: "Support", url: "#", icon: LifeBuoy },
    { title: "Feedback", url: "#", icon: Send },
  ];

  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };

  return (
    <Sidebar
      className="text-white bg-black shadow-lg shadow-stone-300"
      variant="inset"
      {...props}
    >
      <SidebarHeader className="bg-black">
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
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="bg-black border-t border-gray-700">
        <NavUser user={user} handleLogout={handleLogout} />
      </SidebarFooter>
    </Sidebar>
  );
}
