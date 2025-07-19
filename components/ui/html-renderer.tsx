import React from 'react'
import { cn } from '@/lib/utils'

interface HtmlRendererProps {
  content: string
  className?: string
}

export function HtmlRenderer({ content, className }: HtmlRendererProps) {
  // Check if content contains HTML tags
  const containsHtml = content.includes('<')

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
        dangerouslySetInnerHTML={{
          __html: processedHtml,
        }}
      />
    )
  }

  // For plain text content
  return <span className={className}>{content}</span>
}
