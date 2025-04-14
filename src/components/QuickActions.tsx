import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageSquare, MapPin, ChevronUp } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const QuickActions = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-medical-primary/10 z-40 transition-all duration-300 ${isExpanded ? 'translate-y-0' : 'translate-y-[90%]'}`}>
      {/* Заголовок панели */}
      <div 
        className="flex items-center justify-between px-4 py-2 bg-medical-primary text-white cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium flex items-center gap-2">
          <span>Быстрые действия</span>
        </h3>
        <ChevronUp className={`transition-transform ${!isExpanded ? 'rotate-180' : ''}`} size={18} />
      </div>
      
      {/* Кнопки быстрых действий */}
      <div className="flex items-center justify-between gap-2 p-4">
        <a 
          href="tel:+78001234567" 
          className="text-medical-primary hover:text-medical-primary/80 flex flex-col items-center gap-1"
        >
          <div className="bg-medical-light p-3 rounded-full">
            <Phone size={20} />
          </div>
          <span className="text-xs font-medium">Позвонить</span>
        </a>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-medical-primary hover:bg-medical-primary/90 flex flex-col h-auto py-2 px-5">
              <Calendar size={20} />
              <span className="text-xs font-medium mt-1">Записаться</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto max-h-[70vh]">
            <SheetHeader>
              <SheetTitle>Быстрая запись</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quick-name">ФИО</Label>
                    <Input id="quick-name" placeholder="Иванов Иван Иванович" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quick-phone">Телефон</Label>
                    <Input id="quick-phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quick-service">Специалист или услуга</Label>
                  <Select>
                    <SelectTrigger id="quick-service">
                      <SelectValue placeholder="Выберите специалиста или услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="therapist">Терапевт</SelectItem>
                      <SelectItem value="cardio">Кардиолог</SelectItem>
                      <SelectItem value="neuro">Невролог</SelectItem>
                      <SelectItem value="checkout">Комплексное обследование</SelectItem>
                      <SelectItem value="ultrasound">УЗИ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-medical-primary hover:bg-medical-primary/90">Записаться</Button>
              </form>
            </div>
          </SheetContent>
        </Sheet>
        
        <a 
          href="#" 
          className="text-medical-primary hover:text-medical-primary/80 flex flex-col items-center gap-1"
        >
          <div className="bg-medical-light p-3 rounded-full">
            <MessageSquare size={20} />
          </div>
          <span className="text-xs font-medium">Чат</span>
        </a>
        
        <a 
          href="/contacts" 
          className="text-medical-primary hover:text-medical-primary/80 flex flex-col items-center gap-1"
        >
          <div className="bg-medical-light p-3 rounded-full">
            <MapPin size={20} />
          </div>
          <span className="text-xs font-medium">Как проехать</span>
        </a>
      </div>
    </div>
  );
};

export default QuickActions;