import { Plane } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source 
          src="/video/hero.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Overlay with Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
            Discover Your Perfect Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Experience the world's most breathtaking destinations with personalized travel experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all transform hover:scale-105">
              <Plane className="w-5 h-5" />
              Generate AI Travel Plan
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105">
              Explore Destinations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}