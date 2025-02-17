const ServicesSection = () => {
  const services = [
    {
      img: "/eco.png",
      alt: "Eco-friendly Service",
      text: "We provide sustainable and eco-friendly solutions that ensure a greener environment for future generations.",
    },
    {
      img: "/image2.png",
      alt: "Technology Innovation",
      text: "Our cutting-edge technological solutions help businesses optimize their processes and stay ahead in the digital age.",
    },
    {
      img: "/eco.png",
      alt: "Reliable Logistics",
      text: "We offer efficient and reliable logistics services, ensuring timely deliveries and smooth operations.",
    },
  ];

  return (
    <div id="services" className="w-full min-h-screen flex flex-col justify-center items-center mt-20 py-8 mx-auto max-w-6xl">
      <span className="font-moonDance text-4xl">Our</span>
      <span className="relative inline-block px-8 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#ffebbe] ">
        <span className="relative text-[#2d2d2d] text-[32px] font-semibold">
          SERVICES
        </span>
      </span>
      <p className="text-sm text-center my-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

   
      <div className="flex flex-wrap justify-between gap-6 max-w-6xl mx-auto mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 justify-center items-center p-4 bg-white rounded-lg shadow w-full sm:w-[45%] lg:w-[30%]"
          >
            <div>
              <img src={service.img} alt={service.alt} className="w-20" />
            </div>
            <p className="text-center">{service.text}</p>
            <button className="bg-[#DA7110] px-6 py-1 text-sm text-white font-semibold rounded-full">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
