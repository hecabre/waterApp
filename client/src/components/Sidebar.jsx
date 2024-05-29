import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
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
import { useBomb } from "../context/BombContext";

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { bombController } = useBomb();

  return (
    <Card
      className={`w-full max-w-[20rem] p-4 shadow-xl !rounded-tr-none !rounded-tl-none !rounded-bl-md !rounded-br-md transition-colors backdrop-blur-lg bg-white/5
      ${theme === "dark" ? " text-deep-sapphire-100" : "bg-white text-black"}`}
    >
      <div className="mb-2 p-4">
        <Typography
          variant="h5"
          className={
            bombController ? "!text-deep-sapphire-50" : "!text-black  "
          }
        >
          Water Flow App
        </Typography>
      </div>
      <List>
        <ListItem
          className={
            bombController
              ? "!text-deep-sapphire-50 hover:!bg-deep-sapphire-50 hover:!text-deep-sapphire-400 transition-colors"
              : "!text-black hover:!bg-black hover:!text-white transition-colors"
          }
        >
          <ListItemPrefix>
            <PresentationChartBarIcon className="w-5 h-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem
          className={
            bombController
              ? "!text-deep-sapphire-50 hover:!bg-deep-sapphire-50 hover:!text-deep-sapphire-400 transition-colors"
              : "!text-black hover:!bg-black hover:!text-white transition-colors"
          }
        >
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem
          className={
            bombController
              ? "!text-deep-sapphire-50 hover:!bg-deep-sapphire-50 hover:!text-deep-sapphire-400 transition-colors"
              : "!text-black hover:!bg-black hover:!text-white transition-colors"
          }
        >
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
        </ListItem>
        <ListItem
          className={
            bombController
              ? "!text-deep-sapphire-50 hover:!bg-deep-sapphire-50 hover:!text-deep-sapphire-400 transition-colors"
              : "!text-black hover:!bg-black hover:!text-white transition-colors"
          }
        >
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem
          className={
            bombController
              ? "!text-deep-sapphire-50 hover:!bg-deep-sapphire-50 hover:!text-deep-sapphire-400 transition-colors"
              : "!text-black hover:!bg-black hover:!text-white transition-colors"
          }
        >
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem
          className={
            bombController
              ? "!text-deep-sapphire-50 hover:!bg-deep-sapphire-50 hover:!text-deep-sapphire-400 transition-colors"
              : "!text-black  hover:!bg-black hover:!text-white transition-colors"
          }
        >
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
