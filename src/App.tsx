import {
  Phone,
  MessageSquare,
  MapPin,
  Star,
  Clock,
  CheckCircle2,
  ChevronDown,
  Users,
  Fuel,
  Settings2,
  Wind,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  CircleFadingArrowUp,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import car1 from "./assets/car1.png";
import car2 from "./assets/car2.png";
import car3 from "./assets/car3.png";
import car4 from "./assets/car4.png";
import car5 from "./assets/car5.png";
import car6 from "./assets/car6.png";
import car7 from "./assets/car7.png";

// --- Constants & Data ---

const BUSINESS_INFO = {
  name: "ZiaSri car",
  phone: "06 61 87 15 05",
  whatsapp: "212661871505",
  location: "Sefrou, Morocco (31000)",
  plusCode: "R5J7+6V Sefrou",
  rating: 5.0,
  reviewsCount: 29,
  openHours: "24 hours",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=R5J7%2B6V+Sefrou"
};

const CARS = [
  {
    id: 1,
    name: "Economy Hatchback",
    type: "Economy",
    price: 250,
    image: car7,
    transmission: "Manual",
    fuel: "Petrol",
    seats: 5,
    ac: true
  },
  {
    id: 2,
    name: "Compact City Car",
    type: "Compact",
    price: 300,
    image: car2,
    transmission: "Manual",
    fuel: "Petrol",
    seats: 5,
    ac: true
  },
  {
    id: 3,
    name: "Comfort Sedan",
    type: "Sedan",
    price: 400,
    image: car3,
    transmission: "Manual",
    fuel: "Diesel",
    seats: 5,
    ac: true
  },
  {
    id: 4,
    name: "Family SUV",
    type: "SUV",
    price: 600,
    image: car4,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    ac: true
  },
  {
    id: 5,
    name: "Luxury Automatic",
    type: "Automatic Option",
    price: 500,
    image: car5,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    ac: true
  },
  {
    id: 6,
    name: "Family Van",
    type: "Family Van",
    price: 800,
    image: car6,
    transmission: "Manual",
    fuel: "Diesel",
    seats: 7,
    ac: true
  },
];

const REVIEWS = [
  {
    id: 1,
    name: "Ahmed L.",
    rating: 5,
    text: "Good service, thank you for everything. The car was clean and the pickup was very fast."
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    text: "Thank you for your best service. Very professional team and easy communication via WhatsApp."
  },
  {
    id: 3,
    name: "Youssef B.",
    rating: 5,
    text: "Professional and reliable. I rent from them every time I visit Sefrou. Highly recommended!"
  }
];

const FAQS = [
  {
    question: "What documents are required?",
    answer: "You need a valid driver's license (held for at least 1-2 years depending on the car category), a valid passport or ID card, and a security deposit."
  },
  {
    question: "Can I rent 24/7?",
    answer: "Yes! ZiaSri car is open 24 hours a day. You can pick up or drop off your vehicle at any time that suits your schedule."
  },
  {
    question: "Is there a deposit?",
    answer: "Yes, a security deposit is required for all rentals. The amount depends on the vehicle type and is fully refundable upon returning the car in its original condition."
  },
  {
    question: "Do you offer long-term rental discounts?",
    answer: "Absolutely. We offer competitive rates for long-term rentals (weekly or monthly). Contact us on WhatsApp for a personalized quote."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass-nav py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-dark rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
          <span className={cn("font-display font-bold text-xl tracking-tight", isScrolled ? "text-dark" : "text-white")}>
            ZiaSri <span className={cn(isScrolled ? "text-dove" : "text-casper")}>car</span>
          </span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="flex flex-col gap-1.5 items-end group relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className={cn("w-8 h-0.5 rounded-full transition-colors", isScrolled || isMobileMenuOpen ? "bg-dark" : "bg-white")}
          />
          <motion.div
            animate={isMobileMenuOpen ? { rotate: -45, y: -2, width: "32px" } : { rotate: 0, y: 0, width: "20px" }}
            className={cn("h-0.5 rounded-full transition-colors", isScrolled || isMobileMenuOpen ? "bg-dark" : "bg-white")}
          />
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 bg-white z-[60] flex flex-col items-center justify-center p-6 h-screen w-full md:w-[50%] overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.1)]"
          >
            {/* Close Button Inside Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-dark hover:text-casper transition-colors"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center justify-center gap-8 md:gap-8 w-full py-12 max-h-screen overflow-hidden">
              {["Home", "About", "Cars", "Why Us", "Reviews", "FAQ"].map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-4xl md:text-5xl font-display font-black text-dark hover:text-casper transition-colors uppercase tracking-tighter leading-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-4"
              >
                <a href={`tel:${BUSINESS_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <Phone size={20} />
                </a>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-casper text-dark rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <MessageSquare size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const sliderCars = [
    { name: "ECONOMY", model: "Hatchback", img: car1 },
    { name: "COMPACT", model: "City Car", img: car7 },
    { name: "COMFORT", model: "Sedan", img: car3 },
    { name: "FAMILY", model: "SUV", img: car4 },
    { name: "LUXURY", model: "Automatic", img: car5 },
    { name: "LUXURY", model: "Automatic", img: car6 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % sliderCars.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % sliderCars.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + sliderCars.length) % sliderCars.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      scale: 0.9
    })
  };

  return (
    <section id="home" className="relative h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#000]" />

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 25 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Huge Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 0.1, scale: 1 }}
              className="text-[80vw] md:text-[25vw] font-black text-white whitespace-nowrap tracking-tighter leading-none"
            >
              {sliderCars[current].name}
            </motion.h2>
          </div>

          {/* Car Image Container */}
          <div className="relative z-10 w-full max-w-3xl px-4 md:px-12">
            <div className="relative group">
              <img
                src={sliderCars[current].img}
                alt={sliderCars[current].model}
                className="w-full h-auto object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)]"
              />

              {/* Model Name - Bottom of Car */}
              <div className="absolute left-0 right-0 bottom-[25%] text-center">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-white text-2xl md:text-6xl font-black tracking-widest uppercase italic"
                  style={{ textShadow: '0 0.4em 0.6em rgba(0,0,0,0.7), 0 0.15em 0.25em rgba(0,0,0,0.5)' }}
                >
                  {sliderCars[current].model}
                </motion.h3>
                <div className="w-20 md:w-40 h-1 bg-casper mx-auto mt-3 md:mt-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-0 md:px-12 z-20 pointer-events-none">
        <button
          onClick={prev}
          className="text-white/50 hover:text-white transition-all pointer-events-auto hover:scale-125 active:scale-90"
        >
          <ChevronDown className="rotate-90 w-10 h-10 md:w-16 md:h-16" />
        </button>
        <button
          onClick={next}
          className="text-white/50 hover:text-white transition-all pointer-events-auto hover:scale-125 active:scale-90"
        >
          <ChevronDown className="-rotate-90 w-10 h-10 md:w-16 md:h-16" />
        </button>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {sliderCars.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={cn(
              "h-1.5 transition-all duration-500 rounded-full",
              current === i ? "w-10 md:w-16 bg-white" : "w-2 md:w-3 bg-white/20"
            )}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="absolute flex justify-center items-center gap-4 m-0 p-0 bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#cars"
          className="flex items-center gap-2 bg-white text-dark px-6 md:px-12 py-3 md:py-4 rounded-full font-black text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase whitespace-nowrap shadow-2xl hover:bg-casper/80 transition-all"
        >
          Contact Us <Phone size={20} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#cars"
          className="flex items-center gap-2 bg-transparent border border-white text-white px-6 md:px-12 py-3 md:py-4 rounded-full font-black text-[10px] md:text-sm md:tracking-[0.4em] uppercase whitespace-nowrap shadow-2xl hover:bg-casper hover:border-transparent transition-all"
        >
          Explore Fleet <ArrowRight size={20} />
        </motion.a>
      </div>
    </section>
  );
};


interface CarCardProps {
  key?: number;
  car: {
    id: number;
    name: string;
    type: string;
    price: number;
    image: string;
    transmission: string;
    fuel: string;
    seats: number;
    ac: boolean;
  };
  index: number;
}

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-dove font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">About ZiaSri car</span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
              Your Local Travel Partner <br className="hidden md:block" />
              Since Day One
            </h2>
            <p className="text-slate-600 text-sm md:text-lg mb-6 leading-relaxed">
              Located in the heart of Sefrou, ZiaSri car has been providing reliable transportation solutions to both locals and tourists for years. We understand that a car is more than just a vehicle; it's your key to exploring the beautiful landscapes of Morocco.
            </p>
            <p className="text-slate-600 text-sm md:text-lg mb-8 leading-relaxed">
              Our mission is simple: to offer the best car rental experience through transparent pricing, exceptionally maintained vehicles, and a 24/7 commitment to our customers' needs.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">
                Joined by <span className="text-dark font-bold">500+</span> happy travelers
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-casper">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000"
                alt="Our Fleet"
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <div className="text-4xl md:text-6xl font-black mb-2">100%</div>
              <div className="text-xs md:text-sm font-bold tracking-widest uppercase">Local Expertise</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CarCard = ({ car, index }: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl car-card-shadow group transition-all duration-500 border border-slate-100"
    >
      <div className="relative h-48 md:h-56">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-casper/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-dark shadow-sm">
          {car.type}
        </div>
      </div>

      <div className="p-3 md:p-6">
        <div className="flex justify-between items-start mb-3 md:mb-4">
          <h3 className="text-base md:text-xl font-bold text-dark">{car.name}</h3>
          <div className="text-right">
            <span className="text-lg md:text-2xl font-extrabold text-dark">{car.price}</span>
            <span className="text-[9px] md:text-xs text-slate-500 font-medium block uppercase tracking-tighter">MAD / day</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-1.5 md:gap-y-3 gap-x-2 md:gap-x-4 mb-4 md:mb-6">
          <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-[10px] md:text-sm">
            <Settings2 size={12} className="text-slate-400 md:w-4 md:h-4" />
            {car.transmission}
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-[10px] md:text-sm">
            <Fuel size={12} className="text-slate-400 md:w-4 md:h-4" />
            {car.fuel}
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-[10px] md:text-sm">
            <Users size={12} className="text-slate-400 md:w-4 md:h-4" />
            {car.seats} Seats
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-[10px] md:text-sm">
            <Wind size={12} className="text-slate-400 md:w-4 md:h-4" />
            {car.ac ? "AC" : "No AC"}
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I'm interested in renting the ${car.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-slate-50 group-hover:bg-dark group-hover:text-white text-slate-900 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm md:text-base"
        >
          <MessageSquare size={18} />
          Book Now
        </motion.a>
      </div>
    </motion.div>
  );
};

const CarSection = () => {
  return (
    <section id="cars" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-dove font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block"
          >
            Our Fleet
          </motion.span>
          <h2 className="text-xl md:text-5xl font-extrabold text-dark mb-6">
            Available Cars & Daily Rates
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xs md:text-lg">
            Choose from our diverse range of well-maintained vehicles. From economy city cars to spacious family SUVs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CARS.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "24/7 Availability",
      desc: "Pick up or drop off your car at any time. We never close.",
      icon: <Clock className="text-dark" size={24} />
    },
    {
      title: "Easy WhatsApp Booking",
      desc: "No complex forms. Just send us a message and book in seconds.",
      icon: <MessageSquare className="text-dark" size={24} />
    },
    {
      title: "Well Maintained Cars",
      desc: "Our fleet is regularly serviced to ensure your safety and comfort.",
      icon: <CheckCircle2 className="text-dark" size={24} />
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees. What you see is what you pay.",
      icon: <Star className="text-dark" size={24} />
    },
    {
      title: "Friendly Local Service",
      desc: "We are locals who care about your experience in Sefrou.",
      icon: <Users className="text-dark" size={24} />
    },
    {
      title: "Quick Pickup Process",
      desc: "Get your keys and be on the road in less than 10 minutes.",
      icon: <Settings2 className="text-dark" size={24} />
    }
  ];

  return (
    <section id="whyus" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-dove font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Why ZiaSri car</span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-dark mb-8 leading-tight">
              The Most Trusted Car Rental <br className="hidden md:block" />
              Service in Sefrou
            </h2>
            <p className="text-slate-500 text-sm md:text-lg mb-10 leading-relaxed">
              We pride ourselves on providing a seamless rental experience. Whether you're a local or a visitor, we make sure you have the right vehicle for your journey.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1 text-sm md:text-base">{f.title}</h4>
                    <p className="text-[10px] md:text-sm text-slate-500 leading-snug">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000"
                alt="Happy customer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-dark p-6 md:p-8 rounded-3xl text-white shadow-xl hidden sm:block">
              <div className="text-3xl md:text-4xl font-extrabold mb-1">5.0</div>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-white" />)}
              </div>
              <div className="text-[10px] md:text-sm font-medium opacity-80">Based on 29+ real reviews</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Contact Us",
      desc: "Reach out via WhatsApp or Call to check availability.",
      icon: <MessageSquare size={28} />
    },
    {
      id: "02",
      title: "Choose Your Car",
      desc: "Select the vehicle that fits your needs and budget.",
      icon: <Settings2 size={28} />
    },
    {
      id: "03",
      title: "Pickup & Drive",
      desc: "Complete the quick paperwork and start your journey.",
      icon: <CheckCircle2 size={28} />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">How It Works</h2>
          <p className="text-slate-400 text-sm md:text-lg">Simple 3-step process to get you on the road.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-casper/20 border border-casper/30 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                {step.icon}
              </div>
              <span className="text-casper font-black text-4xl md:text-6xl opacity-10 absolute top-0 left-1/2 -translate-x-1/2 -z-10">{step.id}</span>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">Customer Reviews</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="font-bold text-dark">5.0 Rating</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  {review.name[0]}
                </div>
                <span className="font-bold text-dark">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-8">Get In Touch</h2>

              <div className="space-y-6 md:space-y-8 mb-12">
                <div className="flex gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-dark" size={24} md:size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base md:text-lg mb-1">Location</h4>
                    <p className="text-slate-500 text-sm md:text-base">{BUSINESS_INFO.location}</p>
                    <p className="text-dove font-medium text-xs mt-1">Plus Code: {BUSINESS_INFO.plusCode}</p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-dark" size={24} md:size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base md:text-lg mb-1">Phone</h4>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-500 hover:text-dark transition-colors text-sm md:text-base">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-dark" size={24} md:size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base md:text-lg mb-1">Open Hours</h4>
                    <p className="text-slate-500 text-sm md:text-base">{BUSINESS_INFO.openHours}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BUSINESS_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all text-sm md:text-base"
                >
                  <MapPin size={20} />
                  Get Directions
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-casper text-dark px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-casper/80 transition-all text-sm md:text-base"
                >
                  <MessageSquare size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-auto bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.62601920922!2d-4.840173053748704!3d33.83054770445643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f9b438e61f353%3A0x31b22bbe17864646!2sZiaSri%20car!5e1!3m2!1sen!2sma!4v1772033141912!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-dark mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-500">Everything you need to know about renting a car with us.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-dark md:text-lg">{faq.question}</span>
                <ChevronDown className={cn("text-slate-400 transition-transform duration-300", openIndex === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
              <span className="font-display font-bold text-2xl tracking-tight">
                ZiaSri <span className="text-accent">car</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Your reliable partner for car rentals in Sefrou, Morocco. We provide high-quality vehicles and exceptional customer service 24/7.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-casper hover:text-black transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {["Home", "Cars", "Why Us", "Reviews", "FAQ"].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3 items-center">
                <MapPin size={18} className="text-casper flex-shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-casper flex-shrink-0" />
                <span>{BUSINESS_INFO.phone} (WhatsApp)</span>
              </li>
              <li className="flex gap-3 items-center">
                <Clock size={18} className="text-casper flex-shrink-0" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} ZiaSri car. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CarSection />
        <WhyChooseUs />
        <HowItWorks />
        <Reviews />
        <Contact />
        <FAQ />
      </main>
      <Footer />

      {/* Floating WhatsApp Button for Mobile */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl md:hidden"
      >
        <MessageSquare size={24} />
      </motion.a>
    </div>
  );
}
