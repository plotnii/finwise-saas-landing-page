import Image from "next/image";

const logos = [
  {
    name: "App Store",
    url: "https://developer.apple.com/app-store/marketing/guidelines/",
    img: "/images/appstore.svg"
  },
  {
    name: "Google Play",
    url: "https://play.google.com/intl/en_us/badges/",
    img: "/images/gp.png"
  },
  {
    name: "Nova Posta",
    url: "https://novaposhta.ua",
    img: "/images/Nova_Poshta_2019_symbol.webp"
  },
  {
    name: "MAIB",
    url: "https://www.maib.md",
    img: "/images/maib.png"
  },
  {
    name: "Paynet",
    url: "https://paynet.md",
    img: "/images/pnt.png"
  },
  {
    name: "999",
    url: "https://999.md",
    img: "/images/999.png"
  }
];

export default function LogoGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-12 py-20">
      {logos.map((logo, index) => (
        <a 
          key={index} 
          href={logo.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-28 flex items-center"
        >
          <Image 
            src={logo.img} 
            alt={logo.name} 
            width={320} 
            height={96} 
            className="w-80 h-28 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
          />
        </a>
      ))}
    </div>
  );
}
