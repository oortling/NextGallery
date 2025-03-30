import { StaticImageData } from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';

type LightboxProps = {
  images: StaticImageData[];
  currentIndex?: number;
  onClose: () => void;
  children?: ReactNode;
};

export default function Lightbox({
  images,
  currentIndex = 0,
  onClose,
  children,
}: LightboxProps) {
  const [index, setIndex] = useState(currentIndex);

  // 处理键盘事件
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    },
    [images.length, onClose]
  );

  // 添加和移除键盘事件监听
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // 点击背景关闭
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* 关闭按钮 */}
      <button
        className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* 导航按钮 - 上一张 */}
      {images.length > 1 && (
        <button
          className="absolute left-4 p-4 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* 主内容区域 */}
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        {/* 图片 */}
        <div className="flex-grow flex items-center justify-center overflow-hidden">
          <Image alt='' src={images[index]}/>
        </div>

        {/* 页码指示器 */}
        {images.length > 1 && (
          <div className="mt-4 text-white text-lg">
            {index + 1} / {images.length}
          </div>
        )}

        {/* 自定义子内容 */}
        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* 导航按钮 - 下一张 */}
      {images.length > 1 && (
        <button
          className="absolute right-4 p-4 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIndex((prev) => (prev + 1) % images.length)}
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
