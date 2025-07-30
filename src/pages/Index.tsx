import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [dataMatrix, setDataMatrix] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setGeneratedCode(`КИЗ-${Date.now().toString().slice(-6)}`);
      setShowResult(true);
    }, 2500);
  };

  const downloadCode = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    
    if (ctx) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, 200, 200);
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px monospace';
      ctx.fillText(generatedCode, 10, 100);
    }
    
    const link = document.createElement('a');
    link.download = 'datamatrix-code.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen pearl-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pearl-gradient opacity-60"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-emerald-200/20 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-16">
            <div className="inline-block shimmer">
              <h1 className="text-8xl md:text-9xl font-thin tracking-tight bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6">
                2КИЗ
              </h1>
            </div>
            <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-pulse"></div>
          </div>

          {/* Headlines */}
          <div className="mb-16 space-y-8">
            <h2 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight">
              Дублируйте КИЗ<br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                за секунды
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Первый бесплатный сервис для мгновенного создания дубликатов DataMatrix кодов
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="btn-primary text-white font-medium px-16 py-6 text-xl rounded-2xl border-0 shadow-2xl"
              onClick={() => document.getElementById('scanner')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Начать работу
              <Icon name="ArrowDown" className="ml-3" size={20} />
            </Button>
            <p className="text-sm text-gray-500 font-light">
              Без регистрации • Бесплатно • Мгновенно
            </p>
          </div>
        </div>
      </section>

      {/* Scanner Section */}
      <section id="scanner" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Сканирование кода
            </h3>
            <p className="text-xl text-gray-600 font-light">
              Загрузите изображение или введите код вручную
            </p>
          </div>

          <Card className="glass-card rounded-3xl p-12 max-w-2xl mx-auto">
            <div className="space-y-8">
              {/* Input Section */}
              <div className="relative">
                <div className="absolute -top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-sm text-gray-600 font-medium">
                  DataMatrix код
                </div>
                <Input
                  type="text"
                  placeholder="Введите код или загрузите изображение..."
                  value={dataMatrix}
                  onChange={(e) => setDataMatrix(e.target.value)}
                  className="h-16 text-lg rounded-2xl border-0 bg-white/60 backdrop-blur-sm shadow-inner focus:ring-2 focus:ring-blue-500/20 focus:bg-white/80 transition-all duration-300"
                />
                
                {/* Upload Buttons */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-10 h-10 rounded-xl bg-white/60 hover:bg-white/80 backdrop-blur-sm transition-all duration-300"
                  >
                    <Icon name="Upload" size={18} className="text-gray-600" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-10 h-10 rounded-xl bg-white/60 hover:bg-white/80 backdrop-blur-sm transition-all duration-300"
                  >
                    <Icon name="Camera" size={18} className="text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                onClick={handleScan}
                disabled={!dataMatrix || isScanning}
                className="w-full h-16 text-lg font-medium rounded-2xl btn-primary border-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? (
                  <div className="flex items-center">
                    <div className="ripple-effect mr-3">
                      <Icon name="Loader2" className="animate-spin" size={24} />
                    </div>
                    Создаём дубликат...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Icon name="Zap" className="mr-3" size={24} />
                    Сгенерировать дубликат
                  </div>
                )}
              </Button>

              {/* Scanning Animation */}
              {isScanning && (
                <div className="mt-8">
                  <div className="glass-card rounded-2xl p-8">
                    <div className="scan-line h-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4">
                      <div className="ripple-effect">
                        <Icon name="ScanLine" size={32} className="text-blue-600" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3 font-light">Анализируем код...</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Как это работает
            </h3>
            <p className="text-xl text-gray-600 font-light">
              Три простых шага до готового результата
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ScanLine",
                title: "Сканируйте",
                description: "Загрузите изображение DataMatrix кода или введите его вручную",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "Zap",
                title: "Генерируйте",
                description: "Наш алгоритм мгновенно создаст точный дубликат вашего кода",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: "Download",
                title: "Скачивайте",
                description: "Получите готовый к печати файл в высоком качестве",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card rounded-3xl p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-medium text-gray-800 mb-4">{feature.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-light text-gray-800 mb-16">
            Почему выбирают нас
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "Gift", title: "Бесплатно", subtitle: "Навсегда" },
              { icon: "Zap", title: "Мгновенно", subtitle: "2-3 секунды" },
              { icon: "Shield", title: "Безопасно", subtitle: "Без регистрации" }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Icon name={benefit.icon as any} size={28} className="text-white" />
                </div>
                <h4 className="text-2xl font-medium text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 font-light">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-3xl font-light mb-4">2КИЗ</h4>
          <p className="text-gray-400 font-light mb-8">
            Честный знак без лишних шагов
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 text-sm font-light">
              © 2024 2КИЗ. Первый бесплатный сервис дубликатов КИЗ
            </p>
          </div>
        </div>
      </footer>

      {/* Result Modal */}
      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="glass-card max-w-md mx-auto border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl font-light text-gray-800 mb-8">
              Готово! 🎉
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            {/* Code Display */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-white rounded-3xl shadow-inner flex items-center justify-center mb-6 border border-gray-100">
                <div className="w-32 h-32 bg-black rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-2 bg-white rounded-lg">
                    <div className="text-xs font-mono text-black p-2 text-center break-all leading-tight">
                      {generatedCode}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-light">
                Ваш дубликат готов к использованию
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={downloadCode}
                className="btn-primary h-14 rounded-2xl border-0"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать
              </Button>
              <Button 
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                variant="outline"
                className="h-14 rounded-2xl border-2 border-gray-200 hover:border-gray-300 bg-white/60 backdrop-blur-sm"
              >
                <Icon name="Copy" className="mr-2" size={20} />
                Копировать
              </Button>
            </div>

            {/* Info */}
            <div className="bg-blue-50/50 rounded-2xl p-6 text-center backdrop-blur-sm">
              <Icon name="Info" className="mx-auto mb-3 text-blue-600" size={24} />
              <p className="text-sm text-blue-800 font-light">
                Распечатайте на принтере и наклейте на упаковку
              </p>
            </div>

            {/* New Scan Button */}
            <Button 
              onClick={() => {
                setShowResult(false);
                setDataMatrix('');
                setGeneratedCode('');
              }}
              variant="ghost"
              className="w-full h-12 rounded-xl text-gray-600 hover:bg-gray-50"
            >
              Создать новый дубликат
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;