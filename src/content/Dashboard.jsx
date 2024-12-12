import { AppSidebar } from "../components/demo/AppSidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"
import { Separator } from "../components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,   
} from "../components/ui/sidebar"

function Dashboard() {
    console.log("hello");
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="bg-black -ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList className="text-gray-700">
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className=" grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-green-400 rounded-xl bg-muted/50" />
            <div className="bg-green-400 aspect-video rounded-xl bg-muted/50" />
            <div className="bg-green-400 aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="bg-blue-400 min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Dashboard;
