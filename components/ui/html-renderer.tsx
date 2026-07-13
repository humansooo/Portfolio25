'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

function ToggleButton({
  expanded,
  onClick,
}: {
  expanded: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="link-quiet font-geist-mono text-muted-foreground hover:text-foreground mt-3 cursor-pointer text-[11px] tracking-widest uppercase transition-colors duration-300"
    >
      {expanded ? 'Show less' : 'Show more'}
    </button>
  )
}

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
      .replace(/<ul>/g, "<ul class='mt-2 space-y-1.5'>")
      .replace(/<\/ul>/g, '</ul>')
      .replace(
        /<li>/g,
        '<li class=\'relative pl-5 text-sm before:absolute before:left-0 before:content-["—"] before:opacity-40\'>',
      )
      .replace(/<\/li>/g, '</li>')
      .replace(/<b>/g, "<b class='font-bold'>")
      .replace(/<\/b>/g, '</b>')

    return (
      <div className={cn(className)}>
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
          <ToggleButton
            expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          />
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
        <ToggleButton
          expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        />
      )}
    </div>
  )
}
