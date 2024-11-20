import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

const PageHeader = ({ title, description, image }: PageHeaderProps) => {
  return (
    <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;