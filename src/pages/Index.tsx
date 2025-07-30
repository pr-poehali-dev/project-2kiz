import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [dataMatrix, setDataMatrix] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 pearl-gradient opacity-40 animate-shimmer"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-float"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
              2КИЗ
            </h1>
            <div className="w-32 h-1 mx-auto holographic-gradient rounded-full"></div>
          </div>

          {/* Headlines */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-800 mb-6">
              Дублируйте КИЗ за секунды – бесплатно
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
              Просто отсканируйте код, и мы сделаем всё за вас
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="holographic-gradient text-white font-semibold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-0"
          >
            Попробовать бесплатно
            <Icon name="Sparkles" className="ml-2" size={24} />
          </Button>
        </div>
      </section>

      {/* Scanning Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="liquid-glass rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <Icon name="QrCode" size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                Сканирование DataMatrix
              </h3>
              <p className="text-slate-600">
                Загрузите изображение или введите код вручную
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Введите DataMatrix код или загрузите изображение..."
                  value={dataMatrix}
                  onChange={(e) => setDataMatrix(e.target.value)}
                  className="h-14 text-lg rounded-xl border-2 border-slate-200 focus:border-blue-400 transition-colors"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    <Icon name="Upload" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    <Icon name="Camera" size={20} />
                  </Button>
                </div>
              </div>

              <Button 
                onClick={handleScan}
                disabled={!dataMatrix || isScanning}
                className="w-full h-14 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                {isScanning ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                    Генерируем дубликат...
                  </>
                ) : (
                  <>
                    <Icon name="Zap" className="mr-2" size={20} />
                    Сгенерировать дубликат
                  </>
                )}
              </Button>
            </div>

            {isScanning && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-blue-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
              3 простых шага
            </h3>
            <p className="text-xl text-slate-600">
              Всё что нужно для создания дубликата КИЗ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="liquid-glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Icon name="ScanLine" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Считать код</h4>
                <p className="text-slate-600">
                  Отсканируйте существующий DataMatrix код с упаковки
                </p>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="liquid-glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Icon name="Printer" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Распечатать код</h4>
                <p className="text-slate-600">
                  Мгновенно получите готовый дубликат для печати
                </p>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="liquid-glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Наклеить на упаковку</h4>
                <p className="text-slate-600">
                  Приклейте готовый стикер на новую упаковку
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
              Почему выбирают 2КИЗ
            </h3>
            <p className="text-xl text-slate-600">
              Бесплатно. Просто. Надежно.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Wallet" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Бесплатно</h4>
              <p className="text-slate-600">Без скрытых платежей и подписок</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Мгновенно</h4>
              <p className="text-slate-600">Результат за несколько секунд</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="UserCheck" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Без регистрации</h4>
              <p className="text-slate-600">Просто загрузите и работайте</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-semibold mb-2">2КИЗ</h4>
            <p className="text-slate-400">Первый бесплатный сервис дубликатов КИЗ</p>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2024 2КИЗ. Честный знак без лишних шагов.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;