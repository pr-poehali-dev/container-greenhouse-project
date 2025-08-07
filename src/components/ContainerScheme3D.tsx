import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SystemPoint {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  icon: string;
  color: string;
}

export default function ContainerScheme3D() {
  const [selectedSystem, setSelectedSystem] = useState<SystemPoint | null>(null);
  const [viewMode, setViewMode] = useState<'external' | 'internal'>('external');
  const [isRotating, setIsRotating] = useState(true);

  const systems: SystemPoint[] = [
    {
      id: 'hvac',
      name: 'Климат-контроль',
      description: 'Система вентиляции и поддержания температуры 20-25°C',
      x: 85,
      y: 15,
      icon: 'Wind',
      color: 'bg-blue-500'
    },
    {
      id: 'lighting',
      name: 'LED освещение',
      description: 'Полноспектральные LED панели для фотосинтеза растений',
      x: 50,
      y: 25,
      icon: 'Lightbulb',
      color: 'bg-yellow-500'
    },
    {
      id: 'hydro',
      name: 'Гидропонная система',
      description: 'NFT система с циркуляцией питательного раствора',
      x: 30,
      y: 45,
      icon: 'Droplets',
      color: 'bg-green-500'
    },
    {
      id: 'monitoring',
      name: 'Датчики мониторинга',
      description: 'Контроль pH, EC, температуры, влажности в реальном времени',
      x: 70,
      y: 60,
      icon: 'Gauge',
      color: 'bg-purple-500'
    },
    {
      id: 'power',
      name: 'Энергосистема',
      description: 'LED драйверы, блоки питания, системы резервирования',
      x: 15,
      y: 80,
      icon: 'Zap',
      color: 'bg-orange-500'
    },
    {
      id: 'growing',
      name: 'Зоны выращивания',
      description: 'Многоярусные стеллажи для клубники и листовой зелени',
      x: 60,
      y: 70,
      icon: 'Sprout',
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* 3D Схема контейнера */}
      <div className="relative">
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Box" size={24} />
                  Интерактивная схема контейнера
                </CardTitle>
                <CardDescription>
                  Нажмите на точки для изучения систем
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'external' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('external')}
                >
                  Внешний вид
                </Button>
                <Button
                  variant={viewMode === 'internal' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('internal')}
                >
                  Внутри
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 min-h-[400px] overflow-hidden">
              {/* 3D Контейнер */}
              <div 
                className={`absolute inset-4 transition-transform duration-1000 ${
                  isRotating ? 'animate-pulse' : ''
                }`}
                style={{
                  background: viewMode === 'external' 
                    ? 'linear-gradient(135deg, #334155 0%, #475569 50%, #64748b 100%)'
                    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                  transform: 'perspective(600px) rotateY(-15deg) rotateX(10deg)',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                {/* Контур контейнера */}
                <div className="absolute inset-0 border-2 border-slate-400 rounded-lg">
                  {/* Двери контейнера */}
                  {viewMode === 'external' && (
                    <>
                      <div className="absolute right-0 top-1/4 w-1 h-1/2 bg-slate-300"></div>
                      <div className="absolute right-2 top-1/3 w-4 h-1 bg-slate-300 rounded"></div>
                      <div className="absolute right-2 bottom-1/3 w-4 h-1 bg-slate-300 rounded"></div>
                    </>
                  )}
                  
                  {/* Системы внутри */}
                  {viewMode === 'internal' && systems.map((system) => (
                    <div
                      key={system.id}
                      className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-150 ${system.color} ${
                        selectedSystem?.id === system.id ? 'scale-150 ring-4 ring-white' : 'hover:scale-125'
                      }`}
                      style={{
                        left: `${system.x}%`,
                        top: `${system.y}%`,
                        transform: `translate(-50%, -50%) ${selectedSystem?.id === system.id ? 'scale(1.5)' : ''}`
                      }}
                      onClick={() => setSelectedSystem(system)}
                    >
                      <div className="absolute inset-0 rounded-full animate-ping bg-white/30"></div>
                    </div>
                  ))}
                  
                  {/* Размеры */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                    40 футов (12.2м)
                  </div>
                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground origin-center">
                    8 футов (2.4м)
                  </div>
                </div>

                {/* Логотип на контейнере */}
                {viewMode === 'external' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80 font-bold text-lg">
                    HYDROCONTAINER
                  </div>
                )}

                {/* Внутренние элементы для internal view */}
                {viewMode === 'internal' && (
                  <>
                    {/* Стеллажи */}
                    <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 border border-dashed border-green-400 rounded bg-green-50/50"></div>
                    <div className="absolute left-1/4 top-3/4 w-1/2 h-1/8 border border-dashed border-green-400 rounded bg-green-50/50"></div>
                    
                    {/* Трубы гидропоники */}
                    <div className="absolute left-1/4 right-1/4 top-1/2 h-1 bg-blue-400 rounded-full"></div>
                    <div className="absolute left-1/4 right-1/4 bottom-1/4 h-1 bg-blue-400 rounded-full"></div>
                    
                    {/* LED панели */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-2 bg-yellow-200 rounded-b opacity-60"></div>
                  </>
                )}
              </div>

              {/* Управление камерой */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsRotating(!isRotating)}
                  className="bg-white/90 backdrop-blur"
                >
                  <Icon name={isRotating ? "Pause" : "Play"} size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Информационная панель */}
      <div className="space-y-6">
        {selectedSystem ? (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedSystem.color}`}>
                  <Icon name={selectedSystem.icon as any} size={20} className="text-white" />
                </div>
                <div>
                  <CardTitle>{selectedSystem.name}</CardTitle>
                  <CardDescription>Подробная информация о системе</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{selectedSystem.description}</p>
              
              {/* Технические характеристики */}
              <div className="grid grid-cols-2 gap-4">
                {selectedSystem.id === 'lighting' && (
                  <>
                    <div>
                      <div className="text-sm font-medium">Мощность</div>
                      <div className="text-2xl font-bold text-yellow-600">400W</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">PPFD</div>
                      <div className="text-2xl font-bold text-yellow-600">200-400</div>
                    </div>
                  </>
                )}
                
                {selectedSystem.id === 'hvac' && (
                  <>
                    <div>
                      <div className="text-sm font-medium">Температура</div>
                      <div className="text-2xl font-bold text-blue-600">20-25°C</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Влажность</div>
                      <div className="text-2xl font-bold text-blue-600">60-70%</div>
                    </div>
                  </>
                )}
                
                {selectedSystem.id === 'hydro' && (
                  <>
                    <div>
                      <div className="text-sm font-medium">pH уровень</div>
                      <div className="text-2xl font-bold text-green-600">5.5-6.5</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">EC уровень</div>
                      <div className="text-2xl font-bold text-green-600">1.2-1.8</div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="MousePointer" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Выберите систему</h3>
                  <p className="text-muted-foreground">
                    Переключитесь на внутренний вид и нажмите на любую точку для изучения системы
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Список всех систем */}
        <Card>
          <CardHeader>
            <CardTitle>Все системы контейнера</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {systems.map((system) => (
                <div
                  key={system.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedSystem?.id === system.id
                      ? 'bg-primary/10 border border-primary/20'
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedSystem(system)}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${system.color}`}>
                    <Icon name={system.icon as any} size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{system.name}</div>
                  </div>
                  {selectedSystem?.id === system.id && (
                    <Badge variant="secondary">Активно</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}