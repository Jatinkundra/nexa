// Sidebar imports
import Dashboard from "../assets/images/Dashboard.png";
import Schedule from "../assets/images/Schedule.png";
import Transaction from "../assets/images/Transaction.png";
import Products from "../assets/images/Products.png";
import Statistics from "../assets/images/Statistics.png";
import Setting from "../assets/images/Setting.png";
// Sidebar Data
export const Studentflow = [
  {
    icon: Dashboard,
    heading: "Dashboard",
    path: "dashboard",
  },
  {
    icon: Setting,
    heading: "Campaigns",
  },
];
export const Teachersflow = [
  {
    icon: Dashboard,
    heading: "Dashboard",
    path: "dashboard",
  },
  {
    icon: Schedule,
    heading: "Schedule",
    path: "schedule",
  },
  {
    icon: Transaction,
    heading: "Enrolled Students",
    path: "courses",
  },
  {
    icon: Products,
    heading: "Launch Compaign ",
    path: "campaign",
  },
  {
    icon: Statistics,
    heading: "Launch Educational Initiative",
    path: "eduinitiative",
  },
  {
    icon: Setting,
    heading: "Campaigns",
    path: "campaigns",
  },
];

export const AssesmentResult = {
  fields: [
    "ID",
    "Name",
    "Marks",
    "Percentage",
  ],
  data: [
    {
      "ID": "PRE2209",
      "Name": "John Smith",
      "Marks": "1185",
      "Percentage": "98",
    },
    {
      "ID": "PRE1245",
      "Name": "Jolie Hoskins",
      "Marks": "1195",
      "Percentage": "99.58%",
    },
    {
      "ID": "PRE1625",
      "Name": "Pennington Joy",
      "Marks": "1196",
      "Percentage": "99.67%",
    },
    {
      "ID": "PRE2516",
      "Name": "Millie Marsden",
      "Marks": "1187",
      "Percentage": "98.2%",
    },
    {
      "ID": "PRE2209",
      "Name": "John Smith",
      "Marks": "1185",
      "Percentage": "98",
    },
  ]
}
