export function Gallery() {
  const images = [
    {
      url: "https://i.ibb.co/SwZyS3Np/3.jpg",
      alt: "Monday Night Special"
    },
    {
      url: "https://i.ibb.co/840fz3hh/2.jpg",
      alt: "Tuesday Night Special"
    },
    {
      url: "https://i.ibb.co/8LNspXZT/4.jpg",
      alt: "Wednesday Night Special"
    },
    {
      url: "https://i.ibb.co/Cs0yYDHj/1.jpg",
      alt: "Cinco De Mayo"
    },
    {
      url: "https://i.ibb.co/20tJG1VN/chips.jpg",
      alt: "Chips"
    },
    {
      url: "https://i.ibb.co/qLQ0NqQm/interior.jpg",
      alt: "Interior"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6d1c57] mb-4">
            Gallery
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A preview  of what awaits you at Casa Vieja
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
