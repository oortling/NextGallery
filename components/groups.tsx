'use client'
import React from 'react'
import { Ubuntu } from 'next/font/google'
import Image from 'next/image'
import Lightbox from '@/components/lightbox'
import photoSrc from '../public/home.jpg'

const font = Ubuntu({ weight: '400', subsets: ['latin'] })

const photoData = [
  {
    imgUrl: photoSrc,
    altText: 'photo1',
    title: 'Title1'
  },
  {
    imgUrl: photoSrc,
    altText: 'photo2',
    title: 'Title2'
  },
  {
    imgUrl: photoSrc,
    altText: 'photo3',
    title: 'Title3'
  },
  {
    imgUrl: photoSrc,
    altText: 'photo4',
    title: 'Title4'
  },
  {
    imgUrl: photoSrc,
    altText: 'photo5',
    title: 'Title'
  },
  {
    imgUrl: photoSrc,
    altText: 'photo6',
    title: 'Title6'
  },
  {
    imgUrl: photoSrc,
    altText: 'photo7',
    title: 'Title7'
  },
  {
    imgUrl: photoSrc,
    altText: 'photo8',
    title: 'Title8'
  },
]

interface GroupProps {
  data: string
  location: string
  size: number
}

export default function Group(grids: GroupProps) {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className={`${font.className} container p-8 mx-auto`}>
      <div className='flex text-left pt-4 gap-2 items-center'>
        <div className='text-white text-xl'>{grids.data}</div>
        <div className='text-white text-xl'>{grids.location}</div>
        <div className='text-gray-400'>{grids.size} images</div>
      </div>
      <div className='grid grid-cols-4 gap-4 pt-4'>
        {
          photoData.map((photo, index) => (
            <Image key={index} alt={photo.altText} src={photo.imgUrl} onClick={() => openLightbox(index)}/>
          ))
        }
      </div>
      {isLightboxOpen && (
        <Lightbox
          images={photoData.map((photo) => photo.imgUrl)}
          currentIndex={currentImageIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  )
}
