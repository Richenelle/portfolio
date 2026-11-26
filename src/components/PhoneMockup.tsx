interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

const PhoneMockup = ({ imageSrc, alt, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-10" />
        
        {/* Screen */}
        <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
          {/* Status bar area */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10" />
          
          {/* Screen content */}
          <div className="aspect-[9/19.5] overflow-hidden">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
      
      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[3rem] pointer-events-none" />
    </div>
  );
};

export default PhoneMockup;
