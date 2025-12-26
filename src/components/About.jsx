import React from 'react';
import { FaTruck, FaLeaf, FaUsers, FaAward, FaRecycle, FaChartLine, FaShieldAlt, FaHeart } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: "Farm Fresh Quality",
      description: "Direct from local farms to your table, ensuring maximum freshness and nutrition."
    },
    {
      icon: <FaTruck className="text-3xl text-green-600" />,
      title: "Fast Delivery",
      description: "Same-day delivery guaranteed to keep your vegetables fresh and crisp."
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Customer First",
      description: "24/7 customer support to ensure your complete satisfaction with every order."
    },
    {
      icon: <FaRecycle className="text-3xl text-green-600" />,
      title: "Eco-Friendly",
      description: "Sustainable packaging and support for local farmers and organic practices."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to deliver fresh vegetables to every home" },
    { year: "2021", title: "10,000+ Customers", description: "Served over 10,000 happy families with fresh produce" },
    { year: "2022", title: "Farm Partnerships", description: "Partnered with 50+ local farms across the region" },
    { year: "2023", title: "1 Million+ Orders", description: "Milestone of 1 million successful vegetable deliveries" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      experience: "15+ years in Agriculture"
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      experience: "12+ years in Supply Chain"
    },
    {
      name: "Amit Patel",
      role: "Quality Director",
      experience: "10+ years in Food Quality"
    },
    {
      name: "Sneha Reddy",
      role: "Customer Success",
      experience: "8+ years in Service"
    }
  ];

  const values = [
    {
      icon: <FaLeaf className="text-2xl text-green-600" />,
      title: "Freshness Guaranteed",
      description: "We deliver vegetables within hours of harvest"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-green-600" />,
      title: "Quality Assured",
      description: "Rigorous quality checks for every product"
    },
    {
      icon: <FaHeart className="text-2xl text-green-600" />,
      title: "Customer Love",
      description: "Your satisfaction is our top priority"
    },
    {
      icon: <FaRecycle className="text-2xl text-green-600" />,
      title: "Sustainability",
      description: "Eco-friendly practices from farm to home"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About VeggieMart
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Bringing farm-fresh vegetables, fruits, and leafy greens directly to your doorstep
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl">
              "Our mission is to make fresh, healthy vegetables accessible to everyone while supporting 
              local farmers and sustainable agriculture practices."
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaLeaf className="text-2xl text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To revolutionize the way India buys vegetables by providing fresh, high-quality produce 
                directly from farms to homes. We eliminate middlemen to ensure better prices for both 
                farmers and customers while maintaining unparalleled freshness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaChartLine className="text-2xl text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become India's most trusted online vegetable store, known for quality, freshness, 
                and customer satisfaction. We envision a future where every Indian household has access 
                to farm-fresh vegetables at their fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose VeggieMart?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're redefining vegetable shopping with freshness, quality, and convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-green-200 hover:shadow-xl transition-all duration-300 hover:border-green-300 hover:scale-105"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-green-200">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-green-200">Local Farms</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-200">Fresh Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-green-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at VeggieMart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From a small startup to one of India's fastest growing online vegetable stores
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full"></div>
              
              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 px-8">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                        <div className="text-green-600 font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white z-10"></div>
                    <div className="w-1/2 px-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate individuals dedicated to bringing you the freshest vegetables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-green-200 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <div className="text-green-600 font-medium mb-2">{member.role}</div>
                <div className="text-gray-600 text-sm">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Farm Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Working directly with local farmers to bring you the best quality produce
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-700">Local Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">0</div>
                <div className="text-gray-700">Middlemen</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                <div className="text-gray-700">Farm to Home</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Freshness?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who enjoy farm-fresh vegetables delivered to their home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors hover:scale-105">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-colors hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;