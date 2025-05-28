import {MdOutlineDashboard} from "react-icons/md";

export const UserNav = [
  {
    name: "MONITOR",
    items: [
      {
        name: "Dashboard",
        to: "/dashboard",
        icon: MdOutlineDashboard,
      },
      {
        name: "Projects",
        to: "/base",
        icon: MdOutlineDashboard,
        items: [
          {
            name: "List",
            to: "/projects",
          },
          {
            name: "Details",
            to: "/details",
            target: "_blank",
          }
        ]
      }
    ]
  }
]