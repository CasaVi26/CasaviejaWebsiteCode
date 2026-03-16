export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1722239319565-ace2d79a5623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwdGFjb3MlMjBjb2xvcmZ1bCUyMGZyZXNofGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Delicious Tacos"
    },
    {
      url: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZmFqaXRhcyUyMHNpenpsaW5nJTIwcGxhdGV8ZW58MXx8fHwxNzczNjI4NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Sizzling Fajitas"
    },
    {
      url: "https://images.unsplash.com/photo-1613510214650-8f4911d8a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBjb2NrdGFpbCUyMGxpbWUlMjBzYWx0fGVufDF8fHx8MTc3MzYyODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fresh Margaritas"
    },
    {
      url: "https://images.unsplash.com/photo-1579639482794-abf71bcd3960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlwcyUyMHNhbHNhJTIwbWV4aWNhbiUyMGFwcGV0aXplcnxlbnwxfHx8fDE3NzM2Mjg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Chips and Salsa"
    },
    {
      url: "https://images.unsplash.com/photo-1619810816619-8f98478ce85e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWFjYW1vbGUlMjBhdm9jYWRvJTIwY2hpcHMlMjBmcmVzaHxlbnwxfHx8fDE3NzM2Mjg1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fresh Guacamole"
    },
    {
      url: "https://images.unsplash.com/photo-1653084019129-1f2303bb5bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwY29sb3JmdWx8ZW58MXx8fHwxNzczNTg0NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Restaurant Interior"
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
