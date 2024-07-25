"use client";

import {
  Link,
  SettingsIcon,
  MailsIcon,
  UserIcon,
  ChevronUpIcon,
} from "lucide-react";
import { Button } from "./button";
import SearchBarTwo from "./search-bar-two";

export default function Header() {
  return (
    <header className="bg-background text-primary-foreground py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <ChevronUpIcon />
        <nav>
          <ul className="flex items-center space-x-10 font-bold text-foreground text-lg">
            <li className="hover:underline">Overview</li>
            <li className="hover:underline">Prices</li>
            <li className="hover:underline">Portfolio</li>
          </ul>
        </nav>
      </div>

      <div className="md:flex items-center space-x-4 text-foreground hidden">
        <SearchBarTwo />
        <Button variant="secondary">Buy & Sell</Button>

        <Button variant="ghost">
          <SettingsIcon className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button variant="ghost">
          <MailsIcon className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost">
          <UserIcon className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </header>
  );
}
