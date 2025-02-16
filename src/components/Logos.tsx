import Image from "next/image";

const logos = [
  {
    name: "App Store",
    url: "https://developer.apple.com/app-store/marketing/guidelines/",
    img: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
  },
  {
    name: "Google Play",
    url: "https://play.google.com/intl/en_us/badges/",
    img: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
  },
  {
    name: "Galaxy Store",
    url: "https://developer.samsung.com/galaxy-store/badges.html",
    img: "https://developer.samsung.com/galaxy-store/resources/images/gs-badge-en.svg"
  },
  {
    name: "Nova Posta",
    url: "https://novaposhta.ua",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Nova_Poshta_logo.svg"
  },
  {
    name: "MAIB",
    url: "https://www.maib.md",
    img: "/images/maib.png" 
  },
  {
    name: "Paynet",
    url: "https://paynet.md",
    img: "/images/paynet.png"
  },
  {
    name: "999",
    url: "https://999.md",
    img: "/images/999.png" 
  }
];

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {logos.map((logo, index) => (
        <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer" className="flex justify-center">
          <Image src={logo.img} alt={logo.name} width={128} height={40} className="h-auto" />
        </a>
      ))}
    </div>
  );
}
