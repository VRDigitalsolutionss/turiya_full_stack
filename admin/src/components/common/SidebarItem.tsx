// import { ListItemButton, ListItemIcon } from "@mui/material";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import colorConfigs from "../../configs/colorConfigs";
// import { RootState } from "../../redux/store";
// import { RouteType } from "../../routes/config";

// type Props = {
//   item: RouteType;
// };

// const SidebarItem = ({ item }: Props) => {
//   const { appState } = useSelector((state: RootState) => state.appState);

//   return (
//     item.sidebarProps && item.path ? (
//       <ListItemButton
//         component={Link}
//         to={item.path}
//         sx={{
//           "&: hover": {
//             backgroundColor: colorConfigs.sidebar.hoverBg,
//             color:colorConfigs.sidebar.hoverColor
//           },
//           backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
//           paddingY: "12px",
//           paddingX: "24px"
//         }}
//       >
//         <ListItemIcon sx={{
//           color: colorConfigs.sidebar.color,
//           "&: hover": {
           
//             color:colorConfigs.sidebar.hoverColor
//           },
//         }}>
//           {item.sidebarProps.icon && item.sidebarProps.icon}
//         </ListItemIcon>
//         {item.sidebarProps.displayText}
//       </ListItemButton>
//     ) : null
//   );
// };

// export default SidebarItem;

// =========================================================

// import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import colorConfigs from "../../configs/colorConfigs";
// import { RootState } from "../../redux/store";
// import { RouteType } from "../../routes/config";

// type Props = {
//   item: RouteType;
// };

// const SidebarItem = ({ item }: Props) => {
//   const { appState } = useSelector((state: RootState) => state.appState);

//   return (
//     item.sidebarProps && item.path ? (
//       <ListItemButton
//         component={Link}
//         to={item.path}
//         sx={{
//           "&:hover": {
//             backgroundColor: colorConfigs.sidebar.hoverBg,
//             color: colorConfigs.sidebar.hoverColor,
//           },
//           backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
//           color: appState === item.state ? "white" : colorConfigs.sidebar.color, // Set text color to white if active
//           paddingY: "12px",
//           paddingX: "24px",
//         }}
//       >
//         <ListItemIcon
//           sx={{
//             color: appState === item.state ? "white" : colorConfigs.sidebar.color, // Set icon color to white if active
//             "&:hover": {
//               color: colorConfigs.sidebar.hoverColor,
//             },
//           }}
//         >
//           {item.sidebarProps.icon && item.sidebarProps.icon}
//         </ListItemIcon>
//         <Typography
//           variant="body1"
//           sx={{
//             color: appState === item.state ? "white" : colorConfigs.sidebar.color, // Set text color to white if active
//             "&:hover": {
//               color: colorConfigs.sidebar.hoverColor,
//             },
//           }}
//         >
//           {item.sidebarProps.displayText}
//         </Typography>
//       </ListItemButton>
//     ) : null
//   );
// };

// export default SidebarItem;

// ==========================================================

import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);

  const isActive = appState === item.state;

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&:hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
            color: colorConfigs.sidebar.hoverColor, // Change text color on hover
          },
          backgroundColor: isActive ? colorConfigs.sidebar.activeBg : "unset",
          color: isActive ? "white" : colorConfigs.sidebar.color, // Text color for active state
          paddingY: "12px",
          paddingX: "24px",
        }}
      >
        <ListItemIcon
          sx={{
            color: isActive ? "white" : colorConfigs.sidebar.color, // Icon color for active state
            "&:hover": {
              color: colorConfigs.sidebar.hoverColor, // Change icon color on hover
            },
          }}
        >
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        <Typography
          variant="body1"
          sx={{
            color: isActive ? "white" : colorConfigs.sidebar.color, // Text color for active state
            "&:hover": {
              color: colorConfigs.sidebar.hoverColor, // Change text color on hover
            },
          }}
        >
          {item.sidebarProps.displayText}
        </Typography>
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;

