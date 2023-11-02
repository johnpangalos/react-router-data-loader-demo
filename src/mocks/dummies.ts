import { Navigation, Person, Stat } from "../types.ts";
export const navigation: Navigation[] = [
  { name: "Dashboard", href: "#", icon: "HomeIcon", current: true },
  { name: "Team", href: "#", icon: "UsersIcon", current: false },
  { name: "Projects", href: "#", icon: "FolderIcon", current: false },
  { name: "Calendar", href: "#", icon: "CalendarIcon", current: false },
  {
    name: "Documents",
    href: "#",
    icon: "DocumentDuplicateIcon",
    current: false,
  },
  { name: "Reports", href: "#", icon: "ChartPieIcon", current: false },
];

export const people: Person[] = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton1@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton2@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton3@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton4@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton5@example.com",
    role: "Member",
  },
];

export const stats: Stat[] = [
  {
    name: "Total Subscribers",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Open Rate",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Avg. Click Rate",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
];
