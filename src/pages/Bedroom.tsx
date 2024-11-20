import React from 'react';
import PageHeader from '../components/PageHeader';
import DesignCard from '../components/DesignCard';

const Bedroom = () => {
  const designs = [
    {
      title: 'Suíte Luxuosa',
      description: 'Elegância e conforto com acabamentos sofisticados.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Quarto Zen',
      description: 'Ambiente tranquilo com elementos naturais e minimalistas.',
      image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Estilo Boho',
      description: 'Mistura eclética de texturas e padrões para um visual único.',
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div>
      <PageHeader
        title="Quarto"
        description="Crie um refúgio pessoal com estilo e personalidade"
        image="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200"
      />
      
      <div className="content-section">
        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <DesignCard key={index} {...design} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bedroom;