import React from 'react';
import PageHeader from '../components/PageHeader';
import DesignCard from '../components/DesignCard';

const Kitchen = () => {
  const designs = [
    {
      title: 'Cozinha Industrial',
      description: 'Elementos metálicos e madeira crua para um visual moderno e funcional.',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Cozinha Contemporânea',
      description: 'Design limpo com acabamentos premium e tecnologia integrada.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Cozinha Rústica Moderna',
      description: 'O charme do campo com funcionalidades contemporâneas.',
      image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div>
      <PageHeader
        title="Cozinha"
        description="Transforme sua cozinha em um espaço funcional e inspirador"
        image="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200"
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

export default Kitchen;