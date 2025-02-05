import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

const project = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: PeopleOutlinedIcon,
      breadcrumbs: false,
    },
  ],
};

export default project;
