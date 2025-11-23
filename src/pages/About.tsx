import hero from "@/assets/hero.png";
const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-64 md:h-96 overflow-hidden rounded-b-3xl mb-12">
        <img 
          src={hero}
          alt="About Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed tracking-wide text-foreground">
          <p className="fade-in">
            Founded on the principles of <span className="font-semibold text-primary">minimalism</span> and <span className="font-semibold text-primary">quality</span>, our brand represents
            a new approach to modern living. We believe that less is more, and that
            every item you own should serve a purpose while bringing you joy.
          </p>

          <p className="fade-in">
            Our carefully curated collection features <span className="font-semibold text-primary">timeless pieces</span> designed to last.
            From essential wardrobe staples to functional accessories, each product is
            selected for its superior craftsmanship, sustainable materials, and clean
            aesthetic design.
          </p>

          <p className="fade-in">
            We work directly with skilled artisans and ethical manufacturers who share
            our commitment to <span className="font-semibold text-primary">quality</span> and <span className="font-semibold text-primary">sustainability</span>. Every piece in our collection
            is made to be cherished for years to come, reducing waste and promoting
            conscious consumption.
          </p>

          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-start space-y-2">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Quality First</h3>
                <p className="text-foreground">We never compromise on quality. Every product undergoes rigorous
                  testing to ensure it meets our high standards.</p>
              </div>

              <div className="flex flex-col items-start space-y-2">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Sustainable Practices</h3>
                <p className="text-foreground">We're committed to reducing our environmental impact through
                  sustainable sourcing and ethical manufacturing.</p>
              </div>

              <div className="flex flex-col items-start space-y-2">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Timeless Design</h3>
                <p className="text-foreground">Our pieces are designed to transcend trends, offering lasting style
                  that won't go out of fashion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
