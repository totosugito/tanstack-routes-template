import * as React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { ChevronRight } from 'lucide-react';
import { useState, FC } from 'react';
import AppLogo from './AppLogo';
import { useMatchRoute, Link } from '@tanstack/react-router';

export type NavItem = {
  name: string;
  to?: string;
  icon?: React.ComponentType;
  target?: string;
  items?: NavItem[];
};

export type SidebarNavGroup = {
  name: string;
  items: NavItem[];
};

type AppSidebarProps = {
  navItems?: SidebarNavGroup[];
};

const AppSidebar: FC<AppSidebarProps> = ({ navItems = [] }) => {
  const matchPath = useMatchRoute();

  const matchRoute = (route?: string) => {
    if (route) {
      return !!matchPath({ to: route, fuzzy: true });
    }
    return false;
  };

  const NavIcon: FC<{ IconMenu: React.ComponentType }> = ({ IconMenu }) => (
    <span className="text-lg">
      <IconMenu />
    </span>
  );

  const NavSidebarGroup: FC<{ navs: SidebarNavGroup }> = ({ navs }) => (
    <SidebarGroup>
      <SidebarGroupLabel>{navs?.name}</SidebarGroupLabel>
      {navs?.items && (
        <SidebarGroupContent>
          <SidebarMenu>
            {navs?.items.map((nav, index) => (
              <NavSidebarExpandable key={`${index}-${nav?.name}`} navs={nav} />
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      )}
    </SidebarGroup>
  );

  const NavSidebarExpandable: FC<{ navs: NavItem }> = ({ navs }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    if (navs?.items) {
      return (
        <Collapsible
          key={navs?.name}
          asChild
          defaultOpen={isExpanded}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={navs?.name}>
                {navs.icon && <NavIcon IconMenu={navs.icon} />}
                <span>{navs?.name}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {navs?.items?.map((nav, index) => (
                  <SidebarMenuSubItem key={`${index}-${nav?.name}`}>
                    <SidebarMenuSubButton
                      asChild
                      isActive={matchRoute(nav.to)}
                    >
                      <Link to={nav?.to ?? ''} target={nav?.target ?? ''}>
                        {nav.icon && <NavIcon IconMenu={nav.icon} />}
                        <span className="no-underline">{nav.name}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
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
        isActive={matchRoute(navs.to)}
      >
        <Link to={navs?.to ?? ''} target={navs?.target ?? ''}>
          {navs.icon && <NavIcon IconMenu={navs.icon} />}
          <span>{navs?.name}</span>
        </Link>
      </SidebarMenuButton>
    );
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>

      <SidebarContent className="scrollbar overflow-x-hidden">
        {navItems.map((nav, index) => (
          <NavSidebarGroup key={`${nav.name}-${index}`} navs={nav} />
        ))}
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
