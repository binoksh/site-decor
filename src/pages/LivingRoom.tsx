import React from 'react';
import PageHeader from '../components/PageHeader';
import DesignCard from '../components/DesignCard';

const LivingRoom = () => {
  const designs = [
    {
      title: 'Minimalista Moderno',
      description: 'Um espaço clean e sofisticado com linhas suaves e tons neutros.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Contemporâneo Acolhedor',
      description: 'Combine conforto e estilo com texturas ricas e cores quentes.',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Escandinavo',
      description: 'Simplicidade funcional com toques de madeira clara e muito branco.',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div>
      <PageHeader
        title="Sala de Estar"
        description="Inspire-se com nossas ideias para criar uma sala de estar acolhedora e elegante"
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
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

export default LivingRoom;