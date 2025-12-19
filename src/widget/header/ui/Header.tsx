import { NavLink, Link} from "react-router-dom";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import PersonalAccountIcon from "@/shared/assets/icons/logoPersonalAcount.svg?react";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Календарь", href: "/calendar" },
  { label: "Статистика", href: "/statistic" },
  { label: "Цели", href: "/goals" },
  { label: "Платежи", href: "/payments" },
  { label: "Группы", href: "/groups" },
];

export const Header = () => {
  return (
    <header className="w-[67.34vw] min-h-[3.75rem] ml-[31.30vw] mr-[1.35vw] mt-[1.625rem] bg-background rounded-4xl px-[1.72vw] flex item-center fixed top-0 left-0">
      <div className="w-full flex items-center justify-between">
        <nav className="h-full flex items-center gap-[2.25rem]">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-base h-[3.375rem] flex items-center rounded-2xl px-[3px] ${isActive ? "bg-foreground text-background" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {/* Пока что только верстка, без логики, потом надо будет объединить с entities/user/ui/userBadge */}
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-base">
                <PersonalAccountIcon />
                Имя
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-none">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to="/settings">Настройки</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/logout">Выход</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
