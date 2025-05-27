import * as React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  ChevronRight,
} from 'lucide-react';
import {useState} from "react";
import AppLogo from "./AppLogo.jsx";
import {useTranslation} from "react-i18next";

export default function AppSidebar({navItems = []}) {
  const {t} = useTranslation();

  const matchRoute = (route) => {
    if (route) {
      // return !!(matchPath({path: route}, location.pathname));
    }
    return false;
  };

  const handleNavigate = (route, target) => {
    if(target === "") {
      // navigate(route);
    }
    else {
      window.open(route, target);
    }
  }

  const NavIcon = ({IconMenu}) => {
    return (
      <span className={"text-lg"}><IconMenu/></span>
    )
  }

  const NavSidebarGroup = ({navs}) => {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>{navs?.name}</SidebarGroupLabel>
        {navs?.items &&
          <SidebarGroupContent>
            <SidebarMenu>
              {navs?.items.map((nav, index) => {
                return (
                  <NavSidebarExpandable key={`${index}-${nav?.name}`} navs={nav}/>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        }
      </SidebarGroup>
    )
  }

  const NavSidebarExpandable = ({navs}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    if (navs?.items) {
      return (
        <Collapsible
          key={navs?.name}
          asChild
          defaultOpen={isExpanded}
          className='group/collapsible'
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                tooltip={navs?.name}
                // isActive={isExpanded}
              >
                {navs.icon && <div onClick={() => {
                }}><NavIcon IconMenu={navs.icon}/></div>}
                <span>{navs?.name}</span>
                <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90'/>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {navs?.items?.map((nav, index) => {
                  return (
                    <SidebarMenuSubItem key={`${index}-${nav?.name}`}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={matchRoute(nav["to"])}
                      >
                        <div onClick={()=> handleNavigate(nav.to, nav?.target ?? "")} className={"cursor-pointer"}>
                          {nav.icon && <NavIcon IconMenu={nav.icon}/>}
                          <span className={"no-underline"}>{nav.name}</span>
                        </div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  )
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      );
    }

    return (
      <SidebarMenuButton
        asChild
        tooltip={navs?.name}
        isActive={matchRoute(navs["to"])}
      >
        <div onClick={()=> handleNavigate(navs.to, navs?.target ?? "")} className={"cursor-pointer"}>
          {navs.icon && <NavIcon IconMenu={navs.icon}/>}
          <span>{navs?.name}</span>
        </div>
      </SidebarMenuButton>
    )
  }

  return (
    <Sidebar collapsible={"icon"}>
      <SidebarHeader>
        <AppLogo/>
      </SidebarHeader>

      <SidebarContent className='scrollbar overflow-x-hidden'>
        {navItems.map((nav, index) => {
          if (nav?.to ?? "" === "") {
            return (<NavSidebarGroup key={`${nav.name}-${index}`} navs={nav}/>)
          }
        })}
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  );
}