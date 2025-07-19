'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImagePreviewerProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate?: (index: number) => void
  projectTitle?: string
}

export function ImagePreviewer({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  projectTitle,
}: ImagePreviewerProps) {
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState<{
    x: number
    y: number
    distance?: number
  } | null>(null)
  const [lastTap, setLastTap] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reset transformations when image changes
  useEffect(() => {
    setScale(1)
    setRotation(0)
    setPosition({ x: 0, y: 0 })
  }, [currentIndex])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          if (currentIndex > 0 && onNavigate) {
            onNavigate(currentIndex - 1)
          }
          break
        case 'ArrowRight':
          if (currentIndex < images.length - 1 && onNavigate) {
            onNavigate(currentIndex + 1)
          }
          break
        case '=':
        case '+':
          e.preventDefault()
          setScale((prev) => Math.min(prev + 0.25, 3))
          break
        case '-':
          e.preventDefault()
          setScale((prev) => Math.max(prev - 0.25, 0.5))
          break
        case '0':
          e.preventDefault()
          setScale(1)
          setPosition({ x: 0, y: 0 })
          setRotation(0)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images.length, onNavigate, onClose])

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.25, 3))
  }, [])

  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.25, 0.5))
  }, [])

  const handleRotate = useCallback(() => {
    setRotation((prev) => (prev + 90) % 360)
  }, [])

  const handleReset = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
    setRotation(0)
  }, [])

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = images[currentIndex]
    link.download = `${projectTitle || 'image'}-${currentIndex + 1}`
    link.click()
  }, [images, currentIndex, projectTitle])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (scale > 1) {
        setIsDragging(true)
        setDragStart({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        })
      }
    },
    [scale, position],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && scale > 1) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
      }
    },
    [isDragging, scale, dragStart],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch gesture handlers
  const getTouchDistance = useCallback((touches: React.TouchList) => {
    if (touches.length < 2) return 0
    const touch1 = touches[0]
    const touch2 = touches[1]
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2),
    )
  }, [])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()

      if (e.touches.length === 1) {
        const touch = e.touches[0]
        setTouchStart({
          x: touch.clientX,
          y: touch.clientY,
        })

        // Double tap detection
        const now = Date.now()
        if (now - lastTap < 300) {
          // Double tap to zoom
          if (scale === 1) {
            setScale(2)
          } else {
            handleReset()
          }
        }
        setLastTap(now)
      } else if (e.touches.length === 2) {
        // Pinch to zoom start
        const distance = getTouchDistance(e.touches)
        setTouchStart({
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
          distance,
        })
      }
    },
    [scale, lastTap, getTouchDistance, handleReset],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()

      if (!touchStart) return

      if (e.touches.length === 1 && scale > 1) {
        // Single finger pan when zoomed
        const touch = e.touches[0]
        const deltaX = touch.clientX - touchStart.x
        const deltaY = touch.clientY - touchStart.y

        setPosition((prev) => ({
          x: prev.x + deltaX * 0.5,
          y: prev.y + deltaY * 0.5,
        }))

        setTouchStart({
          x: touch.clientX,
          y: touch.clientY,
        })
      } else if (e.touches.length === 2 && touchStart.distance) {
        // Pinch to zoom
        const distance = getTouchDistance(e.touches)
        const scaleChange = distance / touchStart.distance
        const newScale = Math.min(Math.max(scale * scaleChange, 0.5), 3)

        setScale(newScale)
        setTouchStart((prev) =>
          prev
            ? {
                ...prev,
                distance,
              }
            : null,
        )
      }
    },
    [touchStart, scale, getTouchDistance],
  )

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      setTouchStart(null)
    }
  }, [])

  // Swipe navigation
  const handleSwipe = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart || e.touches.length > 0 || scale > 1) return

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStart.x
      const deltaY = touch.clientY - touchStart.y

      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex > 0 && onNavigate) {
          // Swipe right - previous image
          onNavigate(currentIndex - 1)
        } else if (
          deltaX < 0 &&
          currentIndex < images.length - 1 &&
          onNavigate
        ) {
          // Swipe left - next image
          onNavigate(currentIndex + 1)
        }
      }
    },
    [touchStart, scale, currentIndex, images.length, onNavigate],
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-between p-2 md:p-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="font-geist-mono text-xs text-white/70 md:text-sm">
            {currentIndex + 1} / {images.length}
          </div>
          {projectTitle && !isMobile && (
            <div className="font-geist-mono border-l border-white/20 pl-2 text-xs text-white/90 md:pl-3 md:text-sm">
              {projectTitle}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 md:gap-2">
          {!isMobile && (
            <>
              <button
                onClick={handleZoomOut}
                className="font-geist-mono rounded-md bg-white/10 p-1.5 text-xs text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white md:p-2"
                title="Zoom Out (-)"
              >
                <ZoomOut size={14} />
              </button>

              <div className="font-geist-mono min-w-[2.5rem] text-center text-xs text-white/70 md:min-w-[3rem]">
                {Math.round(scale * 100)}%
              </div>

              <button
                onClick={handleZoomIn}
                className="font-geist-mono rounded-md bg-white/10 p-1.5 text-xs text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white md:p-2"
                title="Zoom In (+)"
              >
                <ZoomIn size={14} />
              </button>

              <button
                onClick={handleRotate}
                className="font-geist-mono rounded-md bg-white/10 p-1.5 text-xs text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white md:p-2"
                title="Rotate"
              >
                <RotateCw size={14} />
              </button>

              <button
                onClick={handleDownload}
                className="font-geist-mono rounded-md bg-white/10 p-1.5 text-xs text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white md:p-2"
                title="Download"
              >
                <Download size={14} />
              </button>

              <button
                onClick={handleReset}
                className="font-geist-mono rounded-md bg-white/10 px-2 py-1.5 text-xs text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white md:px-3 md:py-2"
                title="Reset (0)"
              >
                Reset
              </button>
            </>
          )}

          <button
            onClick={onClose}
            className="rounded-md bg-white/10 p-1.5 text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white md:p-2"
            title="Close (ESC)"
          >
            <X size={isMobile ? 18 : 16} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      {images.length > 1 && !isMobile && (
        <>
          <button
            onClick={() => currentIndex > 0 && onNavigate?.(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={cn(
              'absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-md p-2 transition-all duration-300 md:left-4 md:p-3',
              currentIndex === 0
                ? 'cursor-not-allowed bg-white/5 text-white/20'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white',
            )}
            title="Previous (←)"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() =>
              currentIndex < images.length - 1 && onNavigate?.(currentIndex + 1)
            }
            disabled={currentIndex === images.length - 1}
            className={cn(
              'absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-md p-2 transition-all duration-300 md:right-4 md:p-3',
              currentIndex === images.length - 1
                ? 'cursor-not-allowed bg-white/5 text-white/20'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white',
            )}
            title="Next (→)"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Image Container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose()
          }
        }}
      >
        <div
          ref={imageRef}
          className={cn(
            'relative max-h-[85vh] max-w-[95vw] transition-transform md:max-h-[90vh] md:max-w-[90vw]',
            scale > 1
              ? 'cursor-zoom-out'
              : isMobile
                ? 'cursor-default'
                : 'cursor-zoom-in',
          )}
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg) translate(${
              position.x / scale
            }px, ${position.y / scale}px)`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchEndCapture={handleSwipe}
          onClick={!isMobile && scale === 1 ? handleZoomIn : handleZoomOut}
        >
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle || 'Project'} image ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="rounded-sm border border-white/10 object-contain shadow-2xl select-none"
            draggable={false}
            priority
          />
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 md:bottom-4">
          <div className="flex max-w-[90vw] items-center gap-1 overflow-x-auto rounded-lg border border-white/10 bg-black/50 p-2 backdrop-blur-sm md:gap-2 md:p-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(index)}
                className={cn(
                  'relative flex-shrink-0 overflow-hidden rounded-sm border-2 transition-all duration-300',
                  isMobile ? 'h-8 w-8' : 'h-10 w-10 md:h-12 md:w-12',
                  index === currentIndex
                    ? 'scale-110 border-white shadow-lg'
                    : 'border-white/30 hover:border-white/60',
                )}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={isMobile ? '32px' : '48px'}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Help Instructions */}
      {!isMobile && (
        <div className="absolute right-2 bottom-2 z-10 rounded-lg border border-white/10 bg-black/50 p-2 backdrop-blur-sm md:right-4 md:bottom-4 md:p-3">
          <div className="font-geist-mono space-y-1 text-xs text-white/50">
            <div>ESC: Close</div>
            <div>←/→: Navigate</div>
            <div>+/-: Zoom</div>
            <div>0: Reset</div>
          </div>
        </div>
      )}

      {/* Mobile Instructions */}
      {isMobile && images.length > 1 && (
        <div className="absolute top-16 left-1/2 z-10 -translate-x-1/2 rounded-lg border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-sm">
          <div className="font-geist-mono text-center text-xs text-white/70">
            Swipe to navigate • Pinch to zoom • Double tap to zoom
          </div>
        </div>
      )}
    </div>
  )
}

// Hook for managing image previewer state
export function useImagePreviewer(images: string[]) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openPreviewer = useCallback((index: number = 0) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const closePreviewer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const navigateToImage = useCallback(
    (index: number) => {
      if (index >= 0 && index < images.length) {
        setCurrentIndex(index)
      }
    },
    [images.length],
  )

  return {
    isOpen,
    currentIndex,
    openPreviewer,
    closePreviewer,
    navigateToImage,
  }
}
