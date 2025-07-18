"use client";

import React from "react";
import Image from "next/image";
import { ImagePreviewer, useImagePreviewer } from "./image-previewer";
import { projects } from "@/constants/data";

interface ProjectImageGalleryProps {
  images: string | string[];
  projectTitle: string;
  className?: string;
  aspectRatio?: string;
}

export function ProjectImageGallery({
  images,
  projectTitle,
  className = "",
  aspectRatio = "aspect-8/5",
}: ProjectImageGalleryProps) {
  // Normalize images to array
  const otherImages = projects.filter(
    (project) => project.title !== projectTitle
  );
  const imageArray = Array.isArray(images) ? images : [images];
  const allImages = [
    ...imageArray,
    ...otherImages.map((project) => project.image),
  ];
  const {
    isOpen,
    currentIndex,
    openPreviewer,
    closePreviewer,
    navigateToImage,
  } = useImagePreviewer(allImages);

  if (imageArray.length === 1) {
    // Single image display
    return (
      <>
        <div
          className={`overflow-hidden rounded-sm cursor-pointer group relative ${className}`}
          onClick={() => openPreviewer(0)}
        >
          <Image
            src={imageArray[0]}
            alt={`${projectTitle} preview`}
            draggable={false}
            width={500}
            height={500}
            className={`object-cover transition-transform duration-500 rounded-sm group-hover:scale-105 ${aspectRatio}`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 md:group-hover:opacity-100">
            <span className="text-white/80 font-geist-mono text-xs bg-black/50 px-2 py-1 rounded">
              Tap to preview
            </span>
          </div>
        </div>

        <ImagePreviewer
          images={allImages}
          currentIndex={currentIndex}
          isOpen={isOpen}
          onClose={closePreviewer}
          onNavigate={navigateToImage}
          projectTitle={projectTitle}
        />
      </>
    );
  }

  // Multiple images gallery
  return (
    <>
      <div className={`grid gap-2 ${className}`}>
        <div
          className="overflow-hidden rounded-sm cursor-pointer group relative col-span-full"
          onClick={() => openPreviewer(0)}
        >
          <Image
            src={allImages[0]}
            alt={`${projectTitle} main preview`}
            draggable={false}
            width={500}
            height={300}
            className={`object-cover transition-transform duration-500 rounded-sm group-hover:scale-105 ${aspectRatio}`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white/80 font-geist-mono text-xs bg-black/50 px-2 py-1 rounded">
              {imageArray.length} images • Tap to view
            </span>
          </div>
        </div>

        {allImages.length > 1 && (
          <div className="grid grid-cols-2 gap-1">
            {allImages.slice(1, 3).map((image, index) => (
              <div
                key={index + 1}
                className="overflow-hidden rounded-sm cursor-pointer group relative aspect-square"
                onClick={() => openPreviewer(index + 1)}
              >
                <Image
                  src={image}
                  alt={`${projectTitle} preview ${index + 2}`}
                  draggable={false}
                  width={200}
                  height={200}
                  className="object-cover transition-transform duration-500 rounded-sm group-hover:scale-105 w-full h-full"
                />
                {index === 1 && allImages.length > 3 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-geist-mono text-sm">
                      +{allImages.length - 3} more
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <ImagePreviewer
        images={allImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closePreviewer}
        onNavigate={navigateToImage}
        projectTitle={projectTitle}
      />
    </>
  );
}

// Alternative version for grid layouts
export function ProjectImageGrid({
  images,
  projectTitle,
  className = "",
  maxVisible = 4,
}: ProjectImageGalleryProps & { maxVisible?: number }) {
  const imageArray = Array.isArray(images) ? images : [images];
  const {
    isOpen,
    currentIndex,
    openPreviewer,
    closePreviewer,
    navigateToImage,
  } = useImagePreviewer(imageArray);

  const visibleImages = imageArray.slice(0, maxVisible);
  const remainingCount = imageArray.length - maxVisible;

  return (
    <>
      <div className={`grid grid-cols-2 gap-1 ${className}`}>
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-sm cursor-pointer group relative aspect-square"
            onClick={() => openPreviewer(index)}
          >
            <Image
              src={image}
              alt={`${projectTitle} preview ${index + 1}`}
              draggable={false}
              width={200}
              height={200}
              className="object-cover transition-transform duration-500 rounded-sm group-hover:scale-105 w-full h-full"
            />
            {index === maxVisible - 1 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-geist-mono text-sm">
                  +{remainingCount} more
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          </div>
        ))}
      </div>

      <ImagePreviewer
        images={imageArray}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={closePreviewer}
        onNavigate={navigateToImage}
        projectTitle={projectTitle}
      />
    </>
  );
}
