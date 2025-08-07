import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ContainerScheme3D from '@/components/ContainerScheme3D';

export default function Index() {
  // Данные мониторинга растений
  const monitoringData = [
    { name: 'Температура', value: 22, unit: '°C', optimal: true, icon: 'Thermometer' },
    { name: 'pH воды', value: 6.2, unit: 'pH', optimal: true, icon: 'Droplets' },
    { name: 'Освещение', value: 85, unit: '%', optimal: true, icon: 'Sun' },
    { name: 'Влажность', value: 65, unit: '%', optimal: true, icon: 'CloudRain' },
  ];

  const plantProgress = [
    { crop: 'Клубника', growth: 78, days: 45, icon: '🍓' },
    { crop: 'Салат', growth: 92, days: 28, icon: '🥬' },
    { crop: 'Базилик', growth: 65, days: 21, icon: '🌿' },
    { crop: 'Шпинат', growth: 88, days: 35, icon: '🥗' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Leaf" size={32} className="text-secondary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HydroContainer
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">Технология</a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Продукция</a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Галерея</a>
          </div>
          <Button>Связаться</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                🚀 Инновационные агротехнологии
              </Badge>
              <h2 className="text-5xl font-bold leading-tight">
                Будущее сельского хозяйства в{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  морском контейнере
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Выращивайте клубнику и зелень круглый год с помощью передовых 
                гидропонных систем. Увеличьте урожайность в 10 раз при минимальном 
                использовании воды и пространства.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="PlayCircle" size={20} />
                Смотреть демо
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Download" size={20} />
                Скачать каталог
              </Button>
            </div>

            {/* Ключевые показатели */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10x</div>
                <div className="text-sm text-muted-foreground">Урожайность</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">90%</div>
                <div className="text-sm text-muted-foreground">Экономия воды</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">365</div>
                <div className="text-sm text-muted-foreground">Дней в году</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/img/f5eea15c-d126-4c4d-af1e-23a7cbd42943.jpg" 
              alt="Гидропонная теплица в контейнере"
              className="rounded-2xl shadow-2xl animate-fade-in"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-scale-in">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-green"></div>
                <span className="text-sm font-medium">Система активна</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Система мониторинга */}
      <section id="monitoring" className="container mx-auto px-4 py-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl my-20">
        <div className="text-center mb-12">
          <Badge className="mb-4">📊 Система мониторинга</Badge>
          <h3 className="text-4xl font-bold mb-4">Контроль роста в реальном времени</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Интеллектуальная система отслеживает все параметры выращивания и 
            автоматически оптимизирует условия для максимального урожая.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {monitoringData.map((item, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name={item.icon as any} size={24} className="text-muted-foreground" />
                  {item.optimal && (
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                      Оптимально
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">
                  {item.value} <span className="text-sm font-normal text-muted-foreground">{item.unit}</span>
                </div>
                <Progress value={85} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Прогресс роста растений */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" size={24} />
              Прогресс роста культур
            </CardTitle>
            <CardDescription>
              Отслеживание развития растений по дням
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="grid md:grid-cols-2 gap-6">
              {plantProgress.map((plant, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{plant.icon}</span>
                      <div>
                        <div className="font-medium">{plant.crop}</div>
                        <div className="text-sm text-muted-foreground">{plant.days} дней роста</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-secondary">{plant.growth}%</div>
                    </div>
                  </div>
                  <Progress value={plant.growth} className="h-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Технология */}
      <section id="technology" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">🔬 Технология</Badge>
          <h3 className="text-4xl font-bold mb-4">Как работает контейнерная ферма</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Изучите устройство контейнера в интерактивном 3D режиме. Переключайтесь между внешним и внутренним видом.
          </p>
        </div>

        {/* 3D Схема контейнера */}
        <div className="mb-20">
          <ContainerScheme3D />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Container" size={24} className="text-primary" />
              </div>
              <CardTitle>Морской контейнер 40ft</CardTitle>
              <CardDescription>
                Полностью изолированное пространство с климат-контролем
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Площадь выращивания: 28 м²</li>
                <li>• Многоярусная система</li>
                <li>• Автономное энергообеспечение</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Droplets" size={24} className="text-secondary" />
              </div>
              <CardTitle>Гидропонная система NFT</CardTitle>
              <CardDescription>
                Питательная пленочная техника для оптимального роста
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Циркуляция питательного раствора</li>
                <li>• Автоматический контроль pH</li>
                <li>• Минимальный расход воды</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Lightbulb" size={24} className="text-accent" />
              </div>
              <CardTitle>LED освещение полного спектра</CardTitle>
              <CardDescription>
                Оптимальный световой режим для фотосинтеза
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Энергоэффективные LED панели</li>
                <li>• Программируемые циклы</li>
                <li>• Имитация солнечного света</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Продукция */}
      <section id="products" className="container mx-auto px-4 py-20 bg-muted/30 rounded-3xl">
        <div className="text-center mb-16">
          <Badge className="mb-4">🌱 Продукция</Badge>
          <h3 className="text-4xl font-bold mb-4">Что мы выращиваем</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/img/978defd1-7296-425c-8c55-ea596b29d0be.jpg" 
              alt="Свежие овощи и ягоды"
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🍓</span>
                <div>
                  <h4 className="text-xl font-bold">Клубника</h4>
                  <p className="text-muted-foreground">Круглогодичное выращивание ремонтантных сортов</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Урожай:</span> 15 кг/м² в год
                </div>
                <div>
                  <span className="font-medium">Сезонность:</span> Круглый год
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🥬</span>
                <div>
                  <h4 className="text-xl font-bold">Листовая зелень</h4>
                  <p className="text-muted-foreground">Салаты, шпинат, руккола, базилик</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Цикл:</span> 25-35 дней
                </div>
                <div>
                  <span className="font-medium">Урожаи:</span> 12-15 в год
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="benefits" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">⚡ Преимущества</Badge>
          <h3 className="text-4xl font-bold mb-4">Почему контейнерное земледелие</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'TrendingUp',
              title: 'Высокая урожайность',
              description: 'До 10 раз больше урожая с квадратного метра по сравнению с открытым грунтом'
            },
            {
              icon: 'Droplets',
              title: 'Экономия воды',
              description: 'На 90% меньше водопотребления благодаря рециркуляции питательного раствора'
            },
            {
              icon: 'Shield',
              title: 'Защита от погоды',
              description: 'Независимость от климатических условий и сезонности'
            },
            {
              icon: 'Leaf',
              title: 'Экологичность',
              description: 'Без пестицидов, гербицидов и химических удобрений'
            },
            {
              icon: 'MapPin',
              title: 'Мобильность',
              description: 'Возможность размещения в любом месте с доступом к электричеству'
            },
            {
              icon: 'Zap',
              title: 'Автоматизация',
              description: 'Минимальное участие человека благодаря умным системам управления'
            }
          ].map((benefit, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon as any} size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Leaf" size={32} />
                <h2 className="text-2xl font-bold">HydroContainer</h2>
              </div>
              <p className="text-blue-100 mb-6 max-w-md">
                Инновационные решения для устойчивого сельского хозяйства. 
                Выращивайте больше, используя меньше ресурсов.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Продукты</h3>
              <ul className="space-y-2 text-blue-100">
                <li>Контейнерные фермы</li>
                <li>Гидропонные системы</li>
                <li>LED освещение</li>
                <li>Системы мониторинга</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">Москва, Россия</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm">info@hydrocontainer.ru</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-blue-100">
            <p>&copy; 2024 HydroContainer. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}