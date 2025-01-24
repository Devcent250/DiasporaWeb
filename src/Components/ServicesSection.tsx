export function ServicesSection() {
    const services = [
      {
        icon: <Building2 className="w-12 h-12" />,
        title: "Real Estate",
        description: "Find your perfect property with our comprehensive real estate services.",
      },
      {
        icon: <ShoppingCart className="w-12 h-12" />,
        title: "Commerce",
        description: "Explore business opportunities and commercial properties.",
      },
      {
        icon: <Truck className="w-12 h-12" />,
        title: "Another service",
        description: "Additional services to meet your needs.",
      },
    ]
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="text-[#00008B] mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="outline" className="text-[#00008B] border-[#00008B] hover:bg-[#00008B] hover:text-white">
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
export default ServicesSection  