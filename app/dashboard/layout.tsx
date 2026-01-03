import { Inter } from "next/font/google";
import { AppSidebar } from "@/components/app-sidebar"
import DashboardHeader from "@/components/DashboardHeader"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardFooter from "@/components/DashboardFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <div className={`${inter.variable} font-inter antialiased`}>
    <SidebarProvider>
                <AppSidebar />
                <main className="w-full">
                <DashboardHeader/>
                {children}
            </main>
    </SidebarProvider>
    <DashboardFooter/>
    </div>
    )
}