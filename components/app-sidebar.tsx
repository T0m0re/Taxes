import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Calculator",
    url: "#",
    icon: Home,
  },
  {
    title: "Tax Record",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Resources",
    url: "#",
    icon: Calendar,
  },
  {
    title: "AI Tax Assistnat",
    url: "#",
    icon: Search,
  }
]

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent className="py-9">
        <SidebarMenu className="border-b  border-gray-600/20">
          <Link href="/">Logo</Link>
        </SidebarMenu>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}