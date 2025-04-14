import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Type, Moon, Sun, Minus, Plus, RotateCcw } from "lucide-react";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Применение настроек доступности
  useEffect(() => {
    // Изменение размера шрифта
    document.documentElement.style.setProperty('--font-size-multiplier', fontSize.toString());
    
    // Включение/выключение высококонтрастного режима
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    // Включение/выключение темного режима
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [fontSize, highContrast, darkMode]);
  
  // Сброс всех настроек
  const resetSettings = () => {
    setFontSize(1);
    setHighContrast(false);
    setDarkMode(false);
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
      {/* Кнопка виджета */}
      <Button 
        variant="outline" 
        size="icon" 
        className="h-12 w-12 rounded-full bg-white border-medical-primary text-medical-primary shadow-md hover:bg-medical-primary hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Настройки доступности"
      >
        <Eye size={24} />
      </Button>
      
      {/* Панель настроек доступности */}
      {isOpen && (
        <div className="absolute right-14 top-0 -translate-y-1/4 bg-white rounded-lg shadow-lg p-4 w-64 border border-medical-primary/20 animate-fade-in">
          <h3 className="font-medium mb-3 flex items-center gap-2 text-medical-dark">
            <Eye size={16} />
            Настройки доступности
          </h3>
          
          <div className="space-y-4">
            {/* Размер шрифта */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm flex items-center gap-1">
                  <Type size={14} />
                  Размер текста
                </span>
                <div className="flex items-center gap-1">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={() => setFontSize(Math.max(0.8, fontSize - 0.1))}
                    disabled={fontSize <= 0.8}
                    aria-label="Уменьшить размер текста"
                  >
                    <Minus size={12} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={() => setFontSize(Math.min(1.4, fontSize + 0.1))}
                    disabled={fontSize >= 1.4}
                    aria-label="Увеличить размер текста"
                  >
                    <Plus size={12} />
                  </Button>
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-medical-primary rounded-full transition-all" 
                  style={{ width: `${((fontSize - 0.8) / 0.6) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Высокий контраст */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                <Eye size={14} />
                Высокий контраст
              </span>
              <Button 
                variant={highContrast ? "default" : "outline"} 
                size="sm" 
                className={highContrast ? "bg-medical-primary hover:bg-medical-primary/90 h-7" : "h-7"}
                onClick={() => setHighContrast(!highContrast)}
              >
                {highContrast ? "Вкл" : "Выкл"}
              </Button>
            </div>
            
            {/* Темный режим */}
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-1">
                {darkMode ? <Moon size={14} /> : <Sun size={14} />}
                Темный режим
              </span>
              <Button 
                variant={darkMode ? "default" : "outline"} 
                size="sm" 
                className={darkMode ? "bg-medical-primary hover:bg-medical-primary/90 h-7" : "h-7"}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Вкл" : "Выкл"}
              </Button>
            </div>
            
            {/* Сброс настроек */}
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-2 flex items-center justify-center gap-1 h-8"
              onClick={resetSettings}
            >
              <RotateCcw size={14} />
              Сбросить настройки
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;