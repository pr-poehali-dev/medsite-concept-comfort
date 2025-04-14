import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, Phone, X, Calendar, Search } from "lucide-react";
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
import { useMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Блокировка прокрутки при открытом меню
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-medical-primary animate-breathe" />
          <Link to="/" className="text-xl font-bold text-medical-dark">МедЭксперт</Link>
        </div>

        {/* Навигация для настольных устройств */}
        <div className="hidden md:flex md:gap-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="accessibility-nav-item text-base">Услуги</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-6 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                    {medicalServices.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        icon={service.icon}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="accessibility-nav-item text-base">Врачи</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-medical-primary/20 to-medical-secondary/20 p-6 no-underline outline-none focus:shadow-md"
                          to="/doctors"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-medical-dark">
                            Наши специалисты
                          </div>
                          <p className="text-sm leading-tight text-medical-dark/70">
                            Команда профессионалов с многолетним опытом, готовых помочь вам и вашей семье.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/doctors/therapists" title="Терапевты">
                      Специалисты общей практики для взрослых
                    </ListItem>
                    <ListItem href="/doctors/pediatricians" title="Педиатры">
                      Детские врачи с особым подходом к маленьким пациентам
                    </ListItem>
                    <ListItem href="/doctors/specialists" title="Узкие специалисты">
                      Кардиологи, неврологи, офтальмологи и другие
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/prices" className="accessibility-nav-item text-base">
                  Цены
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="accessibility-nav-item text-base">
                  О клинике
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contacts" className="accessibility-nav-item text-base">
                  Контакты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          {!isMobile && (
            <a href="tel:+78001234567" className="flex items-center gap-2 text-medical-dark hover:text-medical-primary transition-colors">
              <Phone size={18} />
              <span className="font-medium">8 (800) 123-45-67</span>
            </a>
          )}
          
          <Button 
            className="flex items-center gap-2 bg-medical-primary hover:bg-medical-primary/90" 
            size={isMobile ? "sm" : "default"}
          >
            <Calendar size={16} />
            <span>{isMobile ? "Запись" : "Записаться на приём"}</span>
          </Button>
          
          {isMobile && (
            <button 
              className="p-2 rounded-full bg-medical-light text-medical-primary" 
              onClick={toggleMenu}
              aria-label="Меню"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Мобильное меню с плавной анимацией */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="container flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-medical-primary" />
              <Link to="/" className="text-xl font-bold">МедЭксперт</Link>
            </div>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full bg-medical-light text-medical-primary"
              aria-label="Закрыть меню"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="container mt-4">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="search"
                  placeholder="Поиск по сайту..."
                  className="w-full h-12 pl-10 pr-4 rounded-full border border-input bg-background"
                />
              </div>
            </div>
            
            <ul className="flex flex-col gap-4 animate-slide-in">
              <li>
                <Link to="/" className="text-xl flex items-center p-3 rounded-lg hover:bg-medical-light" onClick={toggleMenu}>
                  Главная
                </Link>
              </li>
              <li className="border-t pt-4">
                <h3 className="text-lg font-medium mb-2 text-muted-foreground">Услуги</h3>
                <ul className="pl-3 space-y-2">
                  {medicalServices.slice(0, 6).map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.href}
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-medical-light text-base"
                        onClick={toggleMenu}
                      >
                        <span className="text-medical-primary">{service.icon}</span>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      to="/services"
                      className="flex items-center gap-2 p-2 rounded-md text-medical-primary font-medium"
                      onClick={toggleMenu}
                    >
                      Все услуги →
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="border-t pt-4">
                <Link to="/doctors" className="text-xl flex items-center p-3 rounded-lg hover:bg-medical-light" onClick={toggleMenu}>
                  Врачи
                </Link>
              </li>
              <li className="border-t pt-4">
                <Link to="/prices" className="text-xl flex items-center p-3 rounded-lg hover:bg-medical-light" onClick={toggleMenu}>
                  Цены
                </Link>
              </li>
              <li className="border-t pt-4">
                <Link to="/about" className="text-xl flex items-center p-3 rounded-lg hover:bg-medical-light" onClick={toggleMenu}>
                  О клинике
                </Link>
              </li>
              <li className="border-t pt-4">
                <Link to="/contacts" className="text-xl flex items-center p-3 rounded-lg hover:bg-medical-light" onClick={toggleMenu}>
                  Контакты
                </Link>
              </li>
            </ul>
            
            <div className="mt-8 border-t pt-6">
              <a href="tel:+78001234567" className="flex items-center gap-2 text-xl mb-4">
                <Phone size={20} className="text-medical-primary" />
                <span>8 (800) 123-45-67</span>
              </a>
              <Button className="w-full flex items-center justify-center gap-2 bg-medical-primary hover:bg-medical-primary/90">
                <Calendar size={18} />
                <span>Записаться на приём</span>
              </Button>
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
  icon,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-light focus:bg-medical-light focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-medical-primary">{icon}</span>}
            <span className="text-sm font-medium leading-none">{title}</span>
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1 ml-6">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

// Иконки и данные для меню услуг
const medicalServices = [
  {
    icon: "👨‍⚕️",
    title: "Терапия",
    href: "/services/therapy",
    description: "Диагностика и лечение различных заболеваний у взрослых",
  },
  {
    icon: "❤️",
    title: "Кардиология",
    href: "/services/cardiology",
    description: "Профилактика и лечение сердечно-сосудистых заболеваний",
  },
  {
    icon: "🧠",
    title: "Неврология",
    href: "/services/neurology",
    description: "Диагностика и лечение заболеваний нервной системы",
  },
  {
    icon: "👶",
    title: "Педиатрия",
    href: "/services/pediatrics",
    description: "Забота о здоровье детей от рождения до 18 лет",
  },
  {
    icon: "👁️",
    title: "Офтальмология",
    href: "/services/ophthalmology",
    description: "Диагностика и лечение заболеваний глаз, коррекция зрения",
  },
  {
    icon: "🦷",
    title: "Стоматология",
    href: "/services/dentistry",
    description: "Профилактика и лечение заболеваний полости рта",
  },
  {
    icon: "🩻",
    title: "Диагностика",
    href: "/services/diagnostics",
    description: "УЗИ, МРТ, КТ, рентген и другие методы обследования",
  },
  {
    icon: "💉",
    title: "Вакцинация",
    href: "/services/vaccination",
    description: "Профилактика инфекционных заболеваний для детей и взрослых",
  },
];

export default Navbar;