import { Zap, Clock, ShieldCheck, DollarSign, Layout, Headphones } from 'lucide-react';

const advantages = [
  { text: 'Fast Delivery', icon: Zap },
  { text: 'Instant Access', icon: Clock },
  { text: '100% Uptime Guarantee', icon: ShieldCheck },
  { text: 'Affordable Pricing Plan', icon: DollarSign },
  { text: 'User Friendly Interface', icon: Layout },
  { text: 'Instant Support', icon: Headphones },
];

const OurAdvantage = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-center text-gray-600">
            Our Advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 border-4 border-gray-500 rounded-xl flex items-center space-x-4 text-left group"
              >
                <Icon size={28} className="text-gray-500 flex-shrink-0" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{item.text}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurAdvantage;
