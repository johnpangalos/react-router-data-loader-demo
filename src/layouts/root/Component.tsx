import { Outlet } from "react-router-dom";
import { useState } from "react";
import { TopBar } from "./TopBar";
import { SidePanel } from "./SidePanel";
import { DesktopSidePanel } from "./DesktopSidePanel";

export function Component() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <SidePanel sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div>
        <DesktopSidePanel />
        <div className="lg:pl-72">
          <TopBar setSidebarOpen={setSidebarOpen} />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
