import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, CreditCard, PlayCircle } from 'lucide-react';

const steps = [
  { id: 1, title: 'Browser plans', icon: Search },
  { id: 2, title: 'Choose plans', icon: ShoppingBag },
  { id: 3, title: 'Complete Purchase', icon: CreditCard },
  { id: 4, title: 'Access Content', icon: PlayCircle },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-12 relative z-10 w-full rounded-t-[20px] md:rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] mt-[-20px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-serif font-bold text-center mb-20 text-gray-600">
          How It Works
        </h2>

        <div className="relative">
          {/* Horizontal Line - Hidden on small mobile, visible on md+ */}
          <div className="hidden md:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-1 bg-gray-200 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="flex flex-col items-center relative">
                  
                  {/* Circle */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      backgroundColor: isActive ? '#2563EB' : '#FFFFFF', // blue-600 vs white
                      borderColor: isActive ? '#2563EB' : '#E5E7EB', // blue-600 vs gray-200
                    }}
                    transition={{ duration: 0.4 }}
                    className={`w-20 h-20 rounded-full border-4 flex items-center justify-center mb-6 z-10 shadow-sm
                      ${!isActive && 'bg-white border-gray-200'}
                    `}
                  >
                    <span className={`text-4xl font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {step.id}
                    </span>
                  </motion.div>

                  {/* Text Details */}
                  <motion.div 
                    className="text-center"
                    animate={{ opacity: isActive ? 1 : 0.6 }}
                  >
                    <h3 className={`text-xl font-semibold mb-2 ${isActive ? 'text-blue-600' : 'text-gray-800'}`}>
                      {step.title}
                    </h3>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: isActive ? 1 : 0 }}
                      className="text-blue-500 flex justify-center mt-2"
                    >
                      <Icon size={24} />
                    </motion.div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
