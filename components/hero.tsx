import Image, { StaticImageData } from "next/image";
import photoSrc from '../public/home.jpg'

interface HeroProps {
  imgUrl: StaticImageData
  altText: string
  title: string
  // Define your props here
}

export default function Hero(props: HeroProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
      <Image src={props.imgUrl} alt={props.altText} fill style={{ objectFit: 'cover' }}/>
        <div className=" absolute inset-0 bg-gradient-to-r from-gray-800 opacity-80"></div>
      </div>
      <div className=" flex justify-center pt-50">
        <h1 className=" text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}
