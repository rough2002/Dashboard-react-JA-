import { ChartAreaIcon, FileIcon, History, Search, User } from "lucide-react";

export const navlinks = [
  {
    label: "Search CV",
    slug: "searchCv",
    icon: Search,
  },
  {
    label: "Shortlisted CV",
    slug: "shortlistedCvs",
    icon: FileIcon,
  },
  {
    label: "Transaction History",
    slug: "transactionHistory",
    icon: ChartAreaIcon,
  },
  { label: "Search History", slug: "searchHistory", icon: History },
  {
    label: "Profile",
    slug: "profile",
    icon: User,
  },
];
