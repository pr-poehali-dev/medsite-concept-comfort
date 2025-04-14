import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-medical-blue" />
          <Link to="/" className="text-xl font-bold">МедЦентр</Link>
        </div>

        {/* Навигация для настольных устройств */}
        <div className="hidden md:flex md:gap-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/doctors" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Врачи
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  О нас
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contacts" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Контакты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+78001234567" className="hidden md:flex items-center gap-2">
            <Phone size={18} />
            <span>8 (800) 123-45-67</span>
          </a>
          <Button size="sm">Записаться</Button>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-medical-blue" />
              <Link to="/" className="text-xl font-bold">МедЦентр</Link>
            </div>
            <button onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <nav className="container mt-8">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-xl" onClick={toggleMenu}>Главная</Link>
              </li>
              <li>
                <Link to="/services" className="text-xl" onClick={toggleMenu}>Услуги</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-xl" onClick={toggleMenu}>Врачи</Link>
              </li>
              <li>
                <Link to="/about" className="text-xl" onClick={toggleMenu}>О нас</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-xl" onClick={toggleMenu}>Контакты</Link>
              </li>
            </ul>
            <div className="mt-8">
              <a href="tel:+78001234567" className="flex items-center gap-2 text-xl">
                <Phone size={18} />
                <span>8 (800) 123-45-67</span>
              </a>
              <Button className="mt-4 w-full">Записаться на приём</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const services = [
  {
    title: "Диагностика",
    href: "/services/diagnostics",
    description: "Комплексные обследования с использованием современного оборудования",
  },
  {
    title: "Терапия",
    href: "/services/therapy",
    description: "Лечение и профилактика различных заболеваний",
  },
  {
    title: "Хирургия",
    href: "/services/surgery",
    description: "Квалифицированная хирургическая помощь",
  },
  {
    title: "Педиатрия",
    href: "/services/pediatrics",
    description: "Забота о здоровье детей от рождения до подросткового возраста",
  },
];

export default Navbar;