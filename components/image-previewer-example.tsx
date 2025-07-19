'use client'

import React from 'react'
import { ProjectImageGallery, ProjectImageGrid } from './project-image-gallery'
import { ImagePreviewer, useImagePreviewer } from './image-previewer'

// Example of multiple images for a project
const exampleProject = {
  title: 'Portfolio Website',
  images: [
    '/portfolio1.svg',
    '/portfolio2.svg',
    '/placeholder.svg',
    '/placeholder.jpg',
    '/placeholder-logo.svg',
  ],
}

// Example of single image
const singleImageProject = {
  title: 'Single Image Project',
  image: '/apestype.svg',
}

export function ImagePreviewerExample() {
  const {
    isOpen,
    currentIndex,
    openPreviewer,
    closePreviewer,
    navigateToImage,
  } = useImagePreviewer([
    '/portfolio1.svg',
    '/portfolio2.svg',
    '/placeholder.svg',
  ])

  return (
    <div className="space-y-8 p-8">
      <h2 className="mb-4 text-2xl font-bold">Image Previewer Examples</h2>

      {/* Example 1: Single Image Gallery */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Single Image Gallery</h3>
        <div className="max-w-md">
          <ProjectImageGallery
            images={singleImageProject.image}
            projectTitle={singleImageProject.title}
            aspectRatio="aspect-video"
          />
        </div>
      </div>

      {/* Example 2: Multiple Images Gallery */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Multiple Images Gallery</h3>
        <div className="max-w-md">
          <ProjectImageGallery
            images={exampleProject.images}
            projectTitle={exampleProject.title}
            aspectRatio="aspect-video"
          />
        </div>
      </div>

      {/* Example 3: Grid Layout */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Grid Layout</h3>
        <div className="max-w-md">
          <ProjectImageGrid
            images={exampleProject.images}
            projectTitle={exampleProject.title}
            maxVisible={4}
          />
        </div>
      </div>

      {/* Example 4: Custom Implementation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Implementation</h3>
        <div className="flex gap-4">
          <button
            onClick={() => openPreviewer(0)}
            className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
          >
            Open Image Previewer
          </button>
        </div>

        <ImagePreviewer
          images={['/portfolio1.svg', '/portfolio2.svg', '/placeholder.svg']}
          currentIndex={currentIndex}
          isOpen={isOpen}
          onClose={closePreviewer}
          onNavigate={navigateToImage}
          projectTitle="Custom Gallery"
        />
      </div>

      {/* Usage Instructions */}
      <div className="mt-8 space-y-4 rounded bg-gray-100 p-4">
        <h3 className="text-lg font-semibold">Usage Instructions</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Keyboard Shortcuts:</strong>
          </p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>
              <code>ESC</code> - Close previewer
            </li>
            <li>
              <code>←/→</code> - Navigate between images
            </li>
            <li>
              <code>+/-</code> - Zoom in/out
            </li>
            <li>
              <code>0</code> - Reset zoom and position
            </li>
          </ul>

          <p className="mt-4">
            <strong>Mouse/Touch Interactions:</strong>
          </p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Click/tap image to zoom in (desktop only)</li>
            <li>Drag/pan when zoomed in</li>
            <li>Double tap to zoom (mobile)</li>
            <li>Pinch to zoom (mobile)</li>
            <li>Swipe to navigate (mobile)</li>
            <li>Click/tap outside image to close</li>
            <li>Use thumbnail strip to navigate</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
