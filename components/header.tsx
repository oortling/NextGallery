'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
  { name: 'Grid', path: '/grid' },
  { name: 'Device', path: '/device' },
  { name: 'About', path: '/about' },
]

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link className="text-3xl font-bold" href={"/"}>Kieran's Gallery</Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((link, index) => (
              <Link className={pathname === link.path ? 'text-gray-500' : '' } key={index} href={link.path}>{link.name}</Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}