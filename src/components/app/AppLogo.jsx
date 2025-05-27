import React from "react";
import {useSidebar} from "@/components/ui/sidebar.js";
import {twMerge} from "tailwind-merge";

const AppLogo = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className='content-center flex flex-row cursor-pointer' onClick={() => {}}>
      <div className={twMerge("flex items-center justify-center justify-items-center rounded-full bg-card shadow-sm", isCollapsed ? "p-[4px]" : "p-[6px]")} >
        {/*<img src={COMPANY?.logo} width={isCollapsed ? 26 : 28} height={isCollapsed ? 26 : 28} alt={"shadow-sm"}/>*/}
      </div>
      <div className={twMerge('grid flex-1 text-left text-sm leading-tight', isCollapsed ? "" : "ml-2")}>
        {/*<span className='truncate font-semibold'>{COMPANY?.name}</span>*/}
        {/*<span className='truncate text-xs'>{COMPANY?.plan}</span>*/}
      </div>
    </div>
  )
}
export default AppLogo