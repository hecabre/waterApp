import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useTheme } from "../context/ThemeContext";

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Card
      className={`h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl
      ${
        theme === "dark"
          ? "!bg-gradient-to-br from-deep-sapphire-400 to-deep-sapphire-600 text-deep-sapphire-100"
          : "bg-white text-black"
      }`}
    >
      <div className="mb-2 p-4">
        <Typography
          variant="h5"
          className={
            theme === "dark" ? "!text-deep-sapphire-50" : "!text-slate-200"
          }
        >
          Sidebar
        </Typography>
        <button onClick={toggleTheme} className="mt-4 p-2 border rounded">
          Cambiar Tema
        </button>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
