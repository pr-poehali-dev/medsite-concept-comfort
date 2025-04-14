import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone, Calendar, ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Колонка 1: О клинике */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-medical-accent" />
              <span className="text-xl font-bold">МедЭксперт</span>
            </div>
            <p className="mb-6 text-white/80 max-w-md">
              Современная многопрофильная клиника для всей семьи. Мы предлагаем полный спектр медицинских услуг на базе новейшего оборудования и передовых технологий.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Колонка 2: Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/adults" className="text-white/80 hover:text-white transition-colors">Для взрослых</Link>
              </li>
              <li>
                <Link to="/services/children" className="text-white/80 hover:text-white transition-colors">Для детей</Link>
              </li>
              <li>
                <Link to="/services/diagnostics" className="text-white/80 hover:text-white transition-colors">Диагностика</Link>
              </li>
              <li>
                <Link to="/services/specialists" className="text-white/80 hover:text-white transition-colors">Узкие специалисты</Link>
              </li>
              <li>
                <Link to="/services/checkups" className="text-white/80 hover:text-white transition-colors">Комплексные обследования</Link>
              </li>
              <li>
                <Link to="/price" className="inline-flex items-center gap-1 text-medical-accent hover:underline">
                  Все услуги и цены <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Колонка 3: Пациентам */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Пациентам</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/doctors" className="text-white/80 hover:text-white transition-colors">Врачи</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-white/80 hover:text-white transition-colors">Отзывы</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">Вопросы и ответы</Link>
              </li>
              <li>
                <Link to="/policy" className="text-white/80 hover:text-white transition-colors">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-white/80 hover:text-white transition-colors">Контакты</Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-white/80 hover:text-white transition-colors">Карта сайта</Link>
              </li>
            </ul>
          </div>
          
          {/* Колонка 4: Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-medical-accent mt-0.5" />
                <div>
                  <p className="text-white">г. Москва, ул. Медицинская, 123</p>
                  <p className="text-white/60 text-sm">5 минут от м. Здоровье</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-medical-accent mt-0.5" />
                <div>
                  <a href="tel:+78001234567" className="text-white hover:text-medical-accent transition-colors">8 (800) 123-45-67</a>
                  <p className="text-white/60 text-sm">Ежедневно с 8:00 до 20:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-medical-accent mt-0.5" />
                <a href="mailto:info@medexpert.ru" className="text-white hover:text-medical-accent transition-colors">info@medexpert.ru</a>
              </li>
              <li>
                <Button className="w-full flex items-center justify-center gap-2 bg-medical-accent hover:bg-medical-accent/90">
                  <Calendar size={16} />
                  Записаться
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Подписка на новости */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Подпишитесь на новости клиники</h3>
              <p className="text-white/80">Узнавайте первыми о новых услугах и акциях</p>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш e-mail" 
                className="h-11 bg-white/10 border-transparent text-white placeholder:text-white/60 focus:border-medical-accent"
              />
              <Button className="bg-medical-accent hover:bg-medical-accent/90 h-11">Подписаться</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Нижний футер */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} МедЭксперт. Все права защищены.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/accessibility" className="text-sm text-white/60 hover:text-white transition-colors">Доступность</Link>
            <Link to="/terms" className="text-sm text-white/60 hover:text-white transition-colors">Условия использования</Link>
            <Link to="/cookie" className="text-sm text-white/60 hover:text-white transition-colors">Политика cookie</Link>
            <Link to="/sitemap" className="text-sm text-white/60 hover:text-white transition-colors">Карта сайта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;