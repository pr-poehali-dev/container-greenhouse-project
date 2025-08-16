import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';


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
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/7a4f6c2e-4102-441b-889f-232906fd4fcf.jpg" 
              alt="HydroContainer Logo" 
              className="w-10 h-10 object-contain"
            />
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
              src="https://cdn.poehali.dev/files/6b4c9b6a-e272-40d7-8044-151bbbf5b902.jpg" 
              alt="Современная гидропонная система со стеллажами"
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

      {/* Галерея */}
      <section id="gallery" className="container mx-auto px-4 py-20 bg-gradient-to-br from-muted/30 to-background rounded-3xl my-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">📸 Галерея</Badge>
          <h3 className="text-4xl font-bold mb-4">Реальные проекты</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Фотографии действующих контейнерных ферм с настоящими системами выращивания
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Фото 1: Гидропонные стеллажи */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/5c6c8d04-5acf-4ac8-8ebc-fa1023e9c9bf.JPG" 
                alt="Гидропонные стеллажи с системой NFT"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-secondary">
                <Icon name="Sprout" size={14} />
                Система NFT
              </Badge>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Многоярусные стеллажи</h4>
              <p className="text-muted-foreground mb-4">
                Гидропонная система NFT с LED освещением полного спектра. 
                Каждый ярус оборудован индивидуальной системой подачи питательного раствора.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Layers" size={16} />
                  4 яруса
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Lightbulb" size={16} />
                  LED подсветка
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Фото 2: Пустые стеллажи */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/5253be31-bd02-4a97-9f4c-20141332f289.JPG" 
                alt="Пустые стеллажи готовые к посадке"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-primary">
                <Icon name="Settings" size={14} />
                Готов к работе
              </Badge>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Чистые стеллажи</h4>
              <p className="text-muted-foreground mb-4">
                Стерильная среда выращивания с профессиональными стеллажными системами. 
                Все готово к размещению растений и запуску производства.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Shield" size={16} />
                  Стерильно
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="CheckCircle" size={16} />
                  Готов к запуску
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Фото 3: Система управления */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/df217764-2a58-49c8-8192-e2620fc8cdf8.jpg" 
                alt="Система управления и мониторинга"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-accent">
                <Icon name="Cpu" size={14} />
                Автоматизация
              </Badge>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Центр управления</h4>
              <p className="text-muted-foreground mb-4">
                Полностью автоматизированная система управления климатом, поливом и освещением. 
                Мониторинг всех параметров в режиме 24/7.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Monitor" size={16} />
                  Контроль 24/7
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Zap" size={16} />
                  Авто-режим
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Фото 4: Внешний вид контейнера */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/f13aeb20-8dc3-4ee5-95c2-f9ec66de407d.JPG" 
                alt="Внешний вид контейнерной фермы"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-secondary">
                <Icon name="Box" size={14} />
                40ft контейнер
              </Badge>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Мобильная ферма</h4>
              <p className="text-muted-foreground mb-4">
                Стандартный морской контейнер, переоборудованный в высокотехнологичную ферму. 
                Можно установить в любом месте с доступом к электричеству.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Truck" size={16} />
                  Мобильный
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Home" size={16} />
                  Автономный
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Фото 5: Контейнер с открытыми дверьми */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/a3494b81-7add-479b-9159-f5ce5d202f31.jpg" 
                alt="Контейнерная ферма с открытыми дверьми"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-primary">
                <Icon name="Eye" size={14} />
                Открытый доступ
              </Badge>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Производственный процесс</h4>
              <p className="text-muted-foreground mb-4">
                Открытые двери демонстрируют работающую ферму с активно растущими культурами. 
                Видно аккуратные ряды растений и систему NFT в действии.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Seedling" size={16} />
                  Активный рост
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Sun" size={16} />
                  Естественный свет
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Фото 6: Многоуровневая система */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/18e063f5-2af0-45c5-9ca7-adc2fb6e84eb.jpg" 
                alt="Многоуровневая система выращивания"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-accent">
                <Icon name="BarChart3" size={14} />
                Максимальная плотность
              </Badge>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Оптимизация пространства</h4>
              <p className="text-muted-foreground mb-4">
                Многоярусная система позволяет выращивать максимум культур на минимальной площади. 
                Каждый лоток независим и может иметь свой микроклимат.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="TrendingUp" size={16} />
                  +400% площади
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Target" size={16} />
                  Точный контроль
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Статистика проектов */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Запущенных ферм</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Работа без перерывов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">50т</div>
            <div className="text-muted-foreground">Урожая в год</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Всхожесть семян</div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Видео-презентация</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Посмотрите, как устроены наши теплицы</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Основное видео */}
            <div className="relative">
              <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/j2DQfYfuMhc?rel=0&modestbranding=1"
                  title="Обзор гидропонной системы"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold mb-2">Обзор системы</h3>
                <p className="text-muted-foreground">Полный цикл выращивания</p>
              </div>
            </div>

            {/* Дополнительные видео */}
            <div className="space-y-6">
              <div className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => window.open('https://youtube.com/watch?v=INSTALLATION_VIDEO_ID', '_blank')}>
                <div className="aspect-video w-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="https://img.youtube.com/vi/INSTALLATION_VIDEO_ID/mqdefault.jpg" 
                    alt="Установка системы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Установка системы</h4>
                  <p className="text-sm text-muted-foreground">Пошаговое руководство по монтажу</p>
                  <div className="text-xs text-muted-foreground mt-1">5:32</div>
                </div>
              </div>

              <div className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => window.open('https://youtube.com/watch?v=RESULTS_VIDEO_ID', '_blank')}>
                <div className="aspect-video w-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="https://img.youtube.com/vi/RESULTS_VIDEO_ID/mqdefault.jpg" 
                    alt="Результаты выращивания"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Результаты выращивания</h4>
                  <p className="text-sm text-muted-foreground">Урожай через 30 дней</p>
                  <div className="text-xs text-muted-foreground mt-1">3:45</div>
                </div>
              </div>

              <div className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => window.open('https://youtube.com/watch?v=REVIEWS_VIDEO_ID', '_blank')}>
                <div className="aspect-video w-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="https://img.youtube.com/vi/REVIEWS_VIDEO_ID/mqdefault.jpg" 
                    alt="Отзывы клиентов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Отзывы клиентов</h4>
                  <p className="text-sm text-muted-foreground">Реальные истории успеха</p>
                  <div className="text-xs text-muted-foreground mt-1">8:15</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              <Icon name="Youtube" size={20} className="mr-2" />
              Смотреть все видео
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Стоимость</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящее решение для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Базовый</h3>
                <div className="text-3xl font-bold text-primary mb-2">₽1 500 000</div>
                <p className="text-muted-foreground">Полнофункциональная система</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Контейнер 40 футов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Тепло и гидроизоляция</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Растворный узел</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Электричество</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Технический свет</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Полный мониторинг и автоматизация</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Обогащение воздуха СО2</span>
                </li>
              </ul>
              <Button className="w-full">Заказать</Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary">
              <div className="text-center mb-6">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Популярный
                </div>
                <h3 className="text-xl font-bold mb-2">Профессиональный</h3>
                <div className="text-3xl font-bold text-primary mb-2">₽2 000 000</div>
                <p className="text-muted-foreground">Оптимальное решение</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Контейнер 40 футов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Тепло и гидроизоляция</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Растворный узел</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Электричество</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Технический свет + LED лампы полного спектра</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Стеллажи для выращивания</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>ПК, модем и роутер</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-green-500" />
                  <span>Обогащение воздуха СО2</span>
                </li>
              </ul>
              <Button className="w-full">Заказать</Button>
            </div>


          </div>
        </div>
      </section>

      {/* Installment Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Рассрочка</h2>
              <p className="text-lg text-muted-foreground">
                Удобные условия оплаты для развития вашего бизнеса
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Рассрочка с первоначальным взносом</h3>
                    <p className="text-muted-foreground">12 месяцев</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Первый взнос 50%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Оставшаяся сумма равными платежами</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Срок 12 месяцев</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Icon name="Wallet" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Рассрочка без первоначального взноса</h3>
                    <p className="text-muted-foreground">12 месяцев</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Без первоначального взноса</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Полная сумма равными платежами</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Срок 12 месяцев</span>
                  </li>
                </ul>
              </div>


            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Пример расчёта</h3>
                <p className="text-muted-foreground">Профессиональный комплект за ₽2 000 000</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">₽1 000 000</div>
                  <div className="text-muted-foreground">Первоначальный взнос (50%)</div>
                </div>
                <div className="text-center p-6 bg-secondary/5 rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-2">₽83 333</div>
                  <div className="text-muted-foreground">Ежемесячный платёж</div>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-2">12 мес.</div>
                  <div className="text-muted-foreground">Срок рассрочки</div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="mr-4">
                  Рассчитать рассрочку
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
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
                  <span className="text-sm">Челябинск, Россия</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm">+7 (963) 081-14-75</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm">foliani@mail.ru</span>
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