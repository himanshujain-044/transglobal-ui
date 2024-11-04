export const headerMenu = [
  { label: "Home", route: "/home" },
  { label: "Services", route: "/services" },
  {
    label: "Project",
    route: "/project",
    nestedMenu: [
      {
        nestedLabel: "Hydrocracking Processes",
        nestedRoute: "/hydrocracking-processes",
      },
      { nestedLabel: "Refining Processes", nestedRoute: "/refining-processes" },
      {
        nestedLabel: "Refinery Operations",
        nestedRoute: "/refinery-operations",
      },
    ],
  },
  {
    label: "About Us",
    route: "/about-us",
  },
  { label: "Contact", route: "/contact" },
];
