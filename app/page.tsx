import { Metadata } from 'next';
import photoSrc from '../public/home.jpg'
import Hero from "@/components/hero";

export default function Page( ) {
  return (
    <Hero imgUrl={photoSrc} altText="Home" title="Welcome to the Kieran's Gallery"/>
  );
}
