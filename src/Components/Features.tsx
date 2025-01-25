import React from 'react';

const Features = () => {
  const features = [
    {
      title: '100+',
      description: 'Members',
    },
    {
      title: '73',
      description: 'Houses Built',
    },
    {
      title: '5',
      description: 'Businesses',
    },
    {
      title: '13',
      description: 'Plots to Sell',
    },
  ];

  return (
    <section className="py-20  ml-72 "> 
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-4xl justify-center items-start">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#FFEBBE]  rounded-lg shadow"
            >
              <h3 className="text-4xl font-bold text-[#06169F] text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-center text-[#2E2E2E]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;