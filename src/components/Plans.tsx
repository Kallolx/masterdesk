import { useState } from 'react';
import { Check, ChevronDown, Menu, Book, Cpu, Search } from 'lucide-react';

const tabMeta = [
  { key: 'Learning Tools', Icon: Book },
  { key: 'Ai Tools', Icon: Cpu },
  { key: 'SEO tools', Icon: Search },
];

const services = [
  { name: 'Udemy Business', logo: '/images/udemy.svg' },
  { name: 'Coursera', logo: '/images/coursera.svg' },
  { name: 'Skillshare', logo: '/images/skillshare.svg' },
  { name: 'Canva Pro', logo: '/images/canva.svg' },
];

const Plans = () => {
  const [activeTab, setActiveTab] = useState('Learning Tools');

  return (
    <section className="bg-white py-20 px-4 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 cursor-pointer">
              <Menu size={20} />
              <span>Choose a Sector</span>
              <ChevronDown size={18} />
            </button>
            {/* Dropdown Content - Placeholder */}
            {/* <div className="absolute top-full text-black mt-2 w-full bg-white shadow-lg rounded-lg p-2 hidden group-hover:block z-20">...</div> */}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {tabMeta.map(({ key, Icon }) => {
              const active = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-4 md:px-6 py-2 rounded-lg font-medium transition-all text-sm md:text-base border ${
                    active
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white text-gray-800 border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon size={18} className={`mr-3 ${active ? 'text-white' : 'text-blue-600'}`} />
                  <span>{key}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Titles */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-center mb-4 text-gray-600">
            Featured Plan
          </h2>
          <p className="text-gray-600 text-lg md:text-2xl font-inter max-w-2xl mx-auto">
            Subscribe to the world’s best learning platforms through our most popular package.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Premium Plan */}
          <div className="border border-gray-300 rounded-2xl p-8 shadow-xl transition-shadow flex flex-col relative bg-white">
             <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-blue-600">$19.99</span>
                  <span className="text-gray-500 ml-2">/ Year</span>
                </div>
             </div>
             
             <ul className="space-y-4 mb-8 flex-grow">
               {services.slice(0, 3).map((service, i) => (
                 <li key={i} className="flex items-center space-x-3">
                   <div className="bg-green-100 p-1 rounded-full text-green-600">
                     <Check size={16} />
                   </div>
                   <span className="text-gray-700 font-medium">{service.name}</span>
                   <img src={service.logo} alt={service.name} className="h-6 w-auto ml-auto grayscale opacity-70" />
                 </li>
               ))}
                <li className="flex items-center space-x-3 text-gray-500 italic text-sm mt-2">
                   + and more...
                </li>
             </ul>

             <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
               Get Started
             </button>
          </div>

          {/* Advance Plan */}
          <div className="border border-blue-400 rounded-2xl p-8 shadow-xl flex flex-col relative ">
             <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              ⚡MOST POPULAR
             </div>

             <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Advance</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-blue-600">$39.99</span>
                  <span className="text-gray-500 ml-2">/ Year</span>
                </div>
             </div>
             
             <ul className="space-y-4 mb-8 flex-grow">
               {services.map((service, i) => (
                 <li key={i} className="flex items-center space-x-3">
                   <div className="bg-blue-100 p-1 rounded-full text-blue-600">
                     <Check size={16} />
                   </div>
                   <span className="text-gray-900 font-medium">{service.name}</span>
                   <img src={service.logo} alt={service.name} className="h-6 w-auto ml-auto" />
                 </li>
               ))}
                <li className="flex items-center space-x-3 text-blue-600 font-medium text-sm mt-2">
                   + Access to all tools
                </li>
             </ul>

             <button className=" border-2 border-blue-500 w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-white hover:text-black transition-colors shadow-lg shadow-blue-200 cursor-pointer">
               Get Started
             </button>
          </div>

        </div>

        {/* View All Plans Button */}
        <div className="text-center mt-24">
          <button className="px-20 py-8 text-4xl font-serif bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-allcursor-pointer">
            View All Plans
          </button>
        </div>

      </div>
    </section>
  );
};

export default Plans;
