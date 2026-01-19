import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Freelance Designer',
    rating: 5,
    text: "Masterdsk has completely transformed how I manage my tools. The instant access and affordable pricing are a game changer for my business!",
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    rating: 5,
    text: "I was skeptical at first, but the 100% uptime guarantee is real. The user interface is so intuitive, I set up everything in minutes.",
  },
  {
    name: 'Emma Davis',
    role: 'Digital Marketer',
    rating: 4,
    text: "Great selection of SEO tools. The support team is incredibly fast and helpful. I highly recommend Masterdsk to any professional.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-center mb-4 text-gray-600">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-inter">
            Don't just take our word for it. Here's what our subscribers have to say about Masterdsk.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                <div className="flex space-x-1 text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                   ))}
                </div>
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{review.text}"
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
