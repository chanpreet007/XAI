import * as React from "react";
import { useRouter } from "next/router";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
// import { useContext } from "react";
import { useAppContext } from "../context/state";

export const MainListItems = ({userType}) => {
  const router = useRouter();
  const currentUser = useAppContext();

  function handleClick(e: any) {
    e.preventDefault();
    if (e.target.textContent == "Dashboard") {
      router.push("./dashboard");
    }
    if (e.target.textContent == "Upload Data") {
      router.push("./uploadData");
    }
    if (e.target.textContent == "Request Data") {
      router.push("./requestData");
    }
    if (e.target.textContent == "GenerateQRCode") {
      router.push("./generateQRCode");
    }
  }

  function getCurrentUserType() {
    const { sharedState } = currentUser;
    return sharedState && sharedState.user && sharedState.user.role;
  }

  return (
    <React.Fragment>
      <ListItemButton onClick={(e) => handleClick(e)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {userType != "clinic" && (
        <ListItemButton onClick={(e) => handleClick(e)}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText
            primary={userType == "business" ? "Request Data" : "Upload Data"}
          />
         
        </ListItemButton>
        
      )}
       {
          userType == "user" &&
          <ListItemButton onClick={(e) => handleClick(e)}>
          <ListItemIcon>
            <QrCode2Icon />
          </ListItemIcon>
          <ListItemText primary="GenerateQRCode" />
        </ListItemButton>


          
         }

      {/* <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton> */}
      {/* <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton> */}
    </React.Fragment>
  );
};

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
