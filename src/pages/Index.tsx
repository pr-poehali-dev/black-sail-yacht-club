import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const services = [
    {
      icon: "Anchor",
      title: "Парковка и хранение",
      description: "Парковочные места для лодок и яхт. Отапливаемые помещения для круглогодичного хранения.",
      image: "https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/6105e625-bfe1-4ee0-8176-a370e5013acb.jpg"
    },
    {
      icon: "Wrench",
      title: "Обслуживание и ремонт",
      description: "Профессиональный ремонт и покраска судов. Услуга баржи с краном для погрузки на сушу.",
      image: "https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/d7954bd5-ffe5-4725-80ed-b8339c0a8e3b.jpg"
    },
    {
      icon: "Fuel",
      title: "Заправка топливом",
      description: "Качественное топливо для яхт, лодок и катеров. Быстрая и удобная заправка.",
      image: ""
    },
    {
      icon: "ShieldCheck",
      title: "Охрана территории",
      description: "Круглосуточная охрана и видеонаблюдение. Безопасность вашего судна гарантирована.",
      image: ""
    },
    {
      icon: "UtensilsCrossed",
      title: "Ресторан и банкеты",
      description: "Ресторан на берегу с панорамным видом на реку. Проведение банкетов и праздников.",
      image: "https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/e5e3173e-814f-47b0-9a64-6601693d9887.jpg"
    }
  ];

  const galleryImages = [
    "https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/6105e625-bfe1-4ee0-8176-a370e5013acb.jpg",
    "https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/d7954bd5-ffe5-4725-80ed-b8339c0a8e3b.jpg",
    "https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/b2daff34-4769-427f-be53-5f5136aa4f75.jpg"
  ];

  const handleYachtDelivery = () => {
    toast({
      title: "😄",
      description: "Мы не повезём вам яхту домой",
      duration: 3000,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "😴",
      description: "У нас выходной",
      duration: 3000,
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Anchor" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">Черный Парус</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="story-link text-sm font-medium text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="story-link text-sm font-medium text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('gallery')} className="story-link text-sm font-medium text-foreground hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('contact')} className="story-link text-sm font-medium text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')}>Связаться</Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/6105e625-bfe1-4ee0-8176-a370e5013acb.jpg" 
            alt="Yacht Club" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Черный Парус
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Премиальный яхт-клуб с полным спектром услуг для вашего судна
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection('services')} className="hover-scale">
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="bg-white/10 border-white text-white hover:bg-white hover:text-primary hover-scale">
                Забронировать место
              </Button>
              <Button size="lg" onClick={handleYachtDelivery} className="bg-accent hover:bg-accent/90 hover-scale">
                Заказать доставку яхты домой
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-5xl font-bold text-primary mb-2">2+</div>
              <p className="text-lg text-muted-foreground">минуты на рынке</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl font-bold text-primary mb-2">Много</div>
              <p className="text-lg text-muted-foreground">довольных клиентов</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl font-bold text-primary mb-2">25/8</div>
              <p className="text-lg text-muted-foreground">охрана территории</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для вашего комфорта и безопасности судна
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover-scale group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name={service.icon} size={24} className="text-secondary" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Парковка и хранение</h2>
              <div className="space-y-4 text-lg text-white/90">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-secondary mt-1" />
                  <p>Парковочные места для лодок и парусных яхт любого размера</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-secondary mt-1" />
                  <p>Отапливаемые помещения для хранения летом и зимой</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-secondary mt-1" />
                  <p>Услуга баржи с краном для безопасной погрузки на сушу</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-secondary mt-1" />
                  <p>Круглосуточная охрана и видеонаблюдение территории</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/6105e625-bfe1-4ee0-8176-a370e5013acb.jpg"
                alt="Marina"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-scale-in order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/d7954bd5-ffe5-4725-80ed-b8339c0a8e3b.jpg"
                alt="Repair Service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Обслуживание и ремонт</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Icon name="Wrench" size={24} className="text-secondary mt-1" />
                  <p>Профессиональный ремонт корпуса и технических систем</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Paintbrush" size={24} className="text-secondary mt-1" />
                  <p>Покраска судна с использованием качественных материалов</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Settings" size={24} className="text-secondary mt-1" />
                  <p>Техническое обслуживание двигателей и оборудования</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Fuel" size={24} className="text-secondary mt-1" />
                  <p>Заправка качественным топливом для любых типов судов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ресторан и банкеты</h2>
              <p className="text-lg text-white/90 mb-6">
                Проведите незабываемое мероприятие в нашем ресторане на берегу. 
                Прекрасный вид на широкую реку, изысканная кухня и безупречный сервис 
                создадут идеальную атмосферу для вашего праздника.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="UtensilsCrossed" size={20} className="text-secondary" />
                  <p>Панорамный вид на реку и яхты</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={20} className="text-secondary" />
                  <p>Банкеты до 5 человек</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Wine" size={20} className="text-secondary" />
                  <p>Авторская кухня и винная карта</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/18fd7270-8ab1-4b64-b748-635867cc95ca/files/e5e3173e-814f-47b0-9a64-6601693d9887.jpg"
                alt="Restaurant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">Атмосфера нашего яхт-клуба</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-80 rounded-lg overflow-hidden hover-scale animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img 
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">Ответим на все вопросы и поможем с выбором услуг</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 animate-scale-in">
                <h3 className="text-2xl font-semibold mb-6">Быстрая заявка</h3>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <Input placeholder="Ваш телефон" type="tel" className="text-lg" />
                  <Button type="submit" className="w-full" size="lg">Отправить заявку</Button>
                  <p className="text-sm text-muted-foreground text-center">Перезвоним в течение 5 минут</p>
                </form>
              </Card>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-muted-foreground">Где-то у берега реки</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">Otmiv_deneg@neskam.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-muted-foreground">Пока солнце светит</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Anchor" size={32} className="text-secondary" />
                <span className="text-2xl font-bold">Черный Парус</span>
              </div>
              <p className="text-white/80">Премиальный яхт-клуб с полным спектром услуг</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Парковка и хранение</li>
                <li>Обслуживание и ремонт</li>
                <li>Заправка топливом</li>
                <li>Ресторан и банкеты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>Otmiv_deneg@neskam.com</li>
                <li>Где-то у берега реки</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Черный Парус. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;