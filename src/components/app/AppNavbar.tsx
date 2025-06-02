import React, {useState, ReactNode} from 'react';
import {SidebarTrigger} from '@/components/ui/sidebar';
import {ThemeToggle} from '@/components/custom/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {MdLogout} from "react-icons/md";
import {useTranslation} from "react-i18next";
import {TbLockPassword} from "react-icons/tb";
import {Button} from "@/components/ui/button";
import {FaRegUser} from "react-icons/fa";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useAuthStore} from "@/stores/useAuthStore";
import DialogModal from "@/components/custom/DialogModal";
import {useLogoutMutation} from "@/service/auth";
import {twMerge} from "tailwind-merge";

type AppNavbarProps = {
  title: string | ReactNode;
};

const AppNavbar: React.FC<AppNavbarProps> = ({title}) => {
  const {t} = useTranslation();
  const appStore = useAuthStore();
  const openSideMenu = appStore?.openSideMenu ?? false;
  const user = appStore?.user ?? null;
  const [confirmationModal, setConfirmationModal] = useState<any>(null);

  const logOffMutation = useLogoutMutation();

  const onLogoutClick = () => {
    setConfirmationModal({
      title: t("dialog.logOutTitle"),
      desc: t("dialog.logOutDesc"),
      textConfirm: t("shared.logout"),
      textCancel: t("shared.cancel"),
      onConfirmClick: () => {
        logOffMutation.mutate(undefined, {
          onSuccess: () => setConfirmationModal(null),
          onError: () => setConfirmationModal(null),
        });
      },
      onCancelClick: () => setConfirmationModal(null),
    });
  };

  return (
    <header className={twMerge(
      "flex h-12 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12")}>
      <div className={twMerge("flex flex-row h-full w-full justify-between pr-0")}>
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger className="-ml-1" onClick={() => appStore.setOpenSideMenu(!openSideMenu)}/>
          {title}
        </div>

        <div className="flex items-center gap-2 px-3">
          <ThemeToggle/>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <FaRegUser/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-row gap-2 items-center">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage src={user?.image || ''} alt={user?.fullname || ''}/>
                    <AvatarFallback className="rounded-lg text-background font-bold bg-chart-3 shadow-md">
                      {user ? user?.fullname?.substring(0, 2)?.toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="truncate font-semibold">{user?.fullname ?? ""}</div>
                    <div className="text-xs text-muted-foreground">{user?.email ?? ""}</div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuItem className="flex items-center gap-2" onClick={() => {
              }}>
                <TbLockPassword/> {t("shared.changePassword")}
              </DropdownMenuItem>
              <DropdownMenuSeparator/>
              <DropdownMenuItem onClick={onLogoutClick}>
                <MdLogout/> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {confirmationModal && <DialogModal modal={confirmationModal}/>}
    </header>
  );
};

export default AppNavbar;
