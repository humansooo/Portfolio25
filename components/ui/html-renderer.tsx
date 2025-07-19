'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { GlassButton } from './glass-button'

interface HtmlRendererProps {
  content: string
  className?: string
}

const MAX_HEIGHT = 120 // 30px * 4 lines approximately
export function HtmlRenderer({ content, className }: HtmlRendererProps) {
  const [expanded, setExpanded] = useState(false)
  const [shouldShowToggle, setShouldShowToggle] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Check if content contains HTML tags
  const containsHtml = content.includes('<')

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight
      setShouldShowToggle(height > MAX_HEIGHT)
    }
  }, [content])

  if (containsHtml) {
    // Process HTML content with proper styling
    const processedHtml = content
      .replace(/<br\s*\/?>/g, '<br />')
      .replace(/<ul>/g, "<ul class='list-disc mt-2 pl-6'>")
      .replace(/<\/ul>/g, '</ul>')
      .replace(/<li>/g, "<li class='mb-1 text-sm'>")
      .replace(/<\/li>/g, '</li>')
      .replace(/<b>/g, "<b class='font-bold'>")
      .replace(/<\/b>/g, '</b>')

    return (
      <div
        className={cn(
          'prose prose-invert prose-ul:list-disc prose-ul:pl-4',
          className,
        )}
      >
        <div className="relative">
          <div
            ref={contentRef}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight:
                shouldShowToggle && !expanded
                  ? `${MAX_HEIGHT}px`
                  : expanded
                    ? `${contentRef.current?.scrollHeight}px`
                    : 'none',
            }}
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
          <div
            className={`from-background pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t to-transparent transition-opacity duration-300 ease-in-out ${shouldShowToggle && !expanded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        {shouldShowToggle && (
          <GlassButton
            size="xs"
            className="bg-background/60 mt-2 backdrop-blur"
            type="button"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Show less' : 'Show more'}
          </GlassButton>
        )}
      </div>
    )
  }

  // For plain text content
  return (
    <div className={className}>
      <div className="relative">
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight:
              shouldShowToggle && !expanded
                ? `${MAX_HEIGHT}px`
                : expanded
                  ? `${contentRef.current?.scrollHeight}px`
                  : 'none',
            whiteSpace: 'pre-wrap',
          }}
        >
          {content}
        </div>
        <div
          className={`from-background pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t to-transparent transition-opacity duration-300 ease-in-out ${shouldShowToggle && !expanded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      {shouldShowToggle && (
        <GlassButton
          size="xs"
          className="bg-background/60 mt-2 backdrop-blur"
          type="button"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? 'Show less' : 'Show more'}
        </GlassButton>
      )}
    </div>
  )
}
