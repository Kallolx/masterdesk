import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import OurAdvantage from '../components/OurAdvantage';

const PlansPage = () => {
  const navigate = useNavigate();

  const handlePlanSelection = (planName: string, price: string) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
      // Store selected plan and redirect to login
      localStorage.setItem('selectedPlan', JSON.stringify({
        name: planName,
        price: price,
        selectedAt: new Date().toISOString()
      }));
      alert('Please login first to select a plan');
      navigate('/');
      return;
    }

    // Create order in history with pending status
    const order = {
      id: Date.now().toString(),
      planName: planName,
      price: price,
      originalPrice: price,
      discountPrice: '$0.00',
      finalPrice: price,
      status: 'Pending',
      purchaseDate: new Date().toISOString(),
      orderedDate: new Date().toISOString()
    };

    // Get existing order history
    const existingHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    existingHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(existingHistory));

    // Redirect to dashboard
    navigate('/dashboard');
  };


  const tools = [
    {
      id: 1,
      title: 'Learning Tools',
      iconSrc: '/images/knowledge.png',
    },
    {
      id: 2,
      title: 'AI Tools',
      iconSrc: '/images/robot.png',
    },
    {
      id: 3,
      title: 'SEO Tools',
      iconSrc: '/images/chart.png',
    },
  ];


  const services = [
    { name: 'Udemy Business', logo: '/images/udemy.svg' },
    { name: 'Coursera', logo: '/images/coursera.svg' },
    { name: 'Skillshare', logo: '/images/skillshare.svg' },
    { name: 'Canva Pro', logo: '/images/canva.svg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top section with circles and tools */}
      <section className="pt-42 pb-16 px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tools.map((tool) => {
              return (
                <div key={tool.id} className="flex flex-col items-center text-center">
                  {/* Big Circle with Icon (image from public/images) */}
                  <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={tool.iconSrc} alt={tool.title} className="h-16 w-16 object-contain" />
                  </div>
                  {/* Text underneath */}
                  <h3 className="text-2xl font-bold text-gray-900 font-serif hover:underline cursor-pointer">
                    {tool.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="bg-white px-4 md:px-12 w-full mb-16">
        <div className="max-w-6xl mx-auto">          

          {/* Titles */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-center mb-4 text-gray-600">
             Choose Your Plan
            </h2>
            <p className="text-gray-600 text-lg md:text-2xl font-inter max-w-2xl mx-auto">
              Pick the plan that suits your need
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

               <button 
                 onClick={() => handlePlanSelection('Premium', '$19.99')}
                 className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
               >
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

               <button 
                 onClick={() => handlePlanSelection('Advance', '$39.99')}
                 className=" border-2 border-blue-500 w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-white hover:text-black transition-colors shadow-lg shadow-blue-200 cursor-pointer"
               >
                 Get Started
               </button>
            </div>

          </div>

        </div>
      </section>

      {/* others */}
      <OurAdvantage />
      <Footer />
    </div>
  );
};

export default PlansPage;