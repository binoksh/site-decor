import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Palette, Ruler, Coffee, Award, Target, Users, Zap } from 'lucide-react';

const Home = () => {
  const sections = [
    {
      title: 'Sala de Estar',
      path: '/living-room',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
      description: 'Descubra as últimas tendências em decoração para sua sala.'
    },
    {
      title: 'Cozinha',
      path: '/kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200',
      description: 'Inspire-se com ideias modernas para sua cozinha.'
    },
    {
      title: 'Quarto',
      path: '/bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200',
      description: 'Crie um ambiente acolhedor e relaxante.'
    }
  ];

  const features = [
    {
      icon: Palette,
      title: 'Design Personalizado',
      description: 'Projetos únicos que refletem seu estilo'
    },
    {
      icon: Coffee,
      title: 'Consultoria Online',
      description: 'Atendimento especializado onde você estiver'
    },
    {
      icon: Ruler,
      title: 'Projetos 3D',
      description: 'Visualize seu espaço antes da execução'
    },
    {
      icon: Sparkles,
      title: 'Sustentabilidade',
      description: 'Materiais eco-friendly e design consciente'
    }
  ];

  const achievements = [
    {
      icon: Award,
      value: '15+',
      label: 'Anos de Experiência'
    },
    {
      icon: Target,
      value: '98%',
      label: 'Clientes Satisfeitos'
    },
    {
      icon: Users,
      value: '2500+',
      label: 'Projetos Entregues'
    },
    {
      icon: Zap,
      value: '50+',
      label: 'Prêmios de Design'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80 z-10" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
            alt="Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Transforme seu espaço em algo extraordinário
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Descubra um mundo de possibilidades para sua casa com nossa curadoria de designs exclusivos.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300"
              >
                Começar Projeto
              </Link>
              <Link
                to="/living-room"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Explorar Designs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src="https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&q=80&w=1200"
                  alt="Nossa Equipe"
                  className="rounded-lg object-cover shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-emerald-500 p-8 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-white text-center">
                      <achievement.icon className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{achievement.value}</div>
                      <div className="text-xs">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Inovação e Excelência em Design de Interiores
              </h2>
              <p className="text-lg text-gray-600">
                Na Decor, acreditamos que cada espaço tem o potencial de contar uma história única. Nossa jornada começou com uma visão ousada: revolucionar a forma como as pessoas vivem e interagem com seus ambientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Compromisso com a Excelência</h3>
                    <p className="text-gray-600">
                      Nossa equipe de designers altamente qualificados trabalha incansavelmente para criar ambientes que transcendem as expectativas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inovação Constante</h3>
                    <p className="text-gray-600">
                      Combinamos técnicas tradicionais com as últimas tendências e tecnologias para criar designs verdadeiramente únicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <feature.icon className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div
              key={section.path}
              className={`relative mb-32 last:mb-0 ${
                index % 2 === 0 ? 'text-left' : 'text-right'
              }`}
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    index % 2 === 0
                      ? 'from-black/60 to-transparent'
                      : 'from-transparent to-black/60'
                  } flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-lg ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                    <h2 className="text-4xl font-bold text-white mb-4">{section.title}</h2>
                    <p className="text-white/90 text-lg mb-6">{section.description}</p>
                    <Link
                      to={section.path}
                      className="inline-flex items-center space-x-2 text-white border-b-2 border-emerald-500 pb-1 hover:border-emerald-400 transition-colors duration-300"
                    >
                      <span>Explorar</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80&w=2000"
            alt="Interior Design"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-emerald-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Pronto para transformar seu espaço?
              </h2>
              <p className="text-white/90 text-lg">
                Nossa equipe de designers especializados está pronta para tornar sua visão realidade. 
                Oferecemos consultoria personalizada e soluções criativas para cada ambiente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-400" />
                  <span>Projetos exclusivos e personalizados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-400" />
                  <span>Equipe especializada e dedicada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-400" />
                  <span>Acompanhamento em todas as etapas</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300"
              >
                Agende uma Consulta Gratuita
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200"
                alt="Interior Design Consultation"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">+1000</p>
                <p className="text-sm">Projetos Realizados</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;