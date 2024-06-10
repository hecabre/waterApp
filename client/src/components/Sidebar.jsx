import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { TfiDashboard } from "react-icons/tfi";
import { GiWaterTank } from "react-icons/gi";
import { GiWaterfall } from "react-icons/gi";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="items-start flex py-2">
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="min-h-full w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            
          </div>

          <List>
            <ListItem>
              <ListItemPrefix>
                <TfiDashboard className="h-5 w-5" />
              </ListItemPrefix>
              Panel de Control
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <GiWaterfall className="h-5 w-5" />
              </ListItemPrefix>
              Bomba 1
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <GiWaterfall className="h-5 w-5" />
              </ListItemPrefix>
              Bomba 2
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <GiWaterTank className="h-5 w-5" />
              </ListItemPrefix>
              Cisterna
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Cerrar Sesion
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
}
