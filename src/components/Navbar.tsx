import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sofa, ChefHat, Bed, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/living-room', label: 'Sala de Estar', icon: Sofa },
    { path: '/kitchen', label: 'Cozinha', icon: ChefHat },
    { path: '/bedroom', label: 'Quarto', icon: Bed },
    { path: '/contact', label: 'Contatos', icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-emerald-600">Decor</Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === path
                    ? 'border-emerald-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;