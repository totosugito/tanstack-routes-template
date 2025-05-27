import React, {useState} from 'react';
import {SidebarTrigger} from '../ui/sidebar';
import {Separator} from '../ui/separator';
import {ThemeToggle} from './ThemeToggle.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.js";
import {MdLogout} from "react-icons/md";
import {useTranslation} from "react-i18next";
import {TbLockPassword} from "react-icons/tb";
import {Button} from "@/components/ui/button.js";
import {FaRegUser} from "react-icons/fa";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.js";
import {useAuthStore} from "@/store/authStore.js";
import DialogModal from "@/components/custom/DialogModal.jsx";
import {useLogoutMutation} from "@/service/auth.js";

export default function AppNavbar({title}) {
  const {t} = useTranslation();
  const user = useAuthStore((state) => state?.user ?? null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const logOffMutation = useLogoutMutation();
  const onLogoutClick = () => {
    setConfirmationModal({
      title: t("dialog.logOutTitle"),
      desc: t("dialog.logOutDesc"),
      textConfirm: t("shared.logout"),
      textCancel: t("shared.cancel"),
      onConfirmClick: () => {
        logOffMutation.mutate({
          onSuccess: () => {
            setConfirmationModal(null);
          },
          onError: (error) => {
            setConfirmationModal(null);
          }
        });
      },
      onCancelClick: () => setConfirmationModal(null),
    })
  }

  return (
    <header
      className='flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' onClick={() => {}}/>
        <Separator orientation='vertical' className='mr-2 h-4'/>
        {title}
      </div>

      <div className='flex items-center gap-2 px-4'>
        <ThemeToggle/>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <FaRegUser/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div className={"flex flex-row gap-2 items-center"}>
                <Avatar className='h-8 w-8 rounded-full'>
                  <AvatarImage
                    src={user?.image || ''}
                    alt={user?.fullname || ''}
                  />
                  <AvatarFallback className='rounded-lg text-background font-bold bg-chart-3 shadow-md'>{user ? user?.fullname?.substring(0, 2)?.toUpperCase() : "U"}</AvatarFallback>
                </Avatar>
                <div className={"flex flex-col"}>
                  <div className='truncate font-semibold'>{user?.fullname ?? ""}</div>
                  <div className={'text-xs text-muted-foreground'}>{user?.email ?? ""}</div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className='flex items-center gap-2' onClick={()=> {}}>
              <TbLockPassword/> {t("shared.changePassword")}
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={onLogoutClick}><MdLogout/> Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {confirmationModal && <DialogModal modal={confirmationModal}/>}
    </header>
  );
}