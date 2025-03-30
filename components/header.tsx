'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const linkData = [
  { name: 'Grid', path: '/grid' },
  { name: 'Device', path: '/device' },
  { name: 'About', path: '/about' },
]

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isSticky ? 'fixed backdrop-blur-md' : ''} absolute w-full z-10 transition-all duration-300`}>
      <div className={`${isSticky ? 'justify-between' : 'flex-col'} flex container mx-auto text-white p-8 items-center transition-all duration-300`}>
        <Link className={`${isSticky ? '' : 'justify-items-center'} text-3xl font-bold transition-all duration-300`} href={"/"}>Kieran's Gallery</Link>
        <div className={`${isSticky ? '' : 'pt-2 justify-center'} text-xl space-x-4 transition-all duration-300`}>
          {
            linkData.map((link, index) => (
              <Link className={`${pathname === link.path ? 'text-pink-300' : ''} transition-colors duration-300`} key={index} href={link.path}>{link.name}</Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}