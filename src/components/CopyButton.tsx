import React, { useCallback, useState } from "react";

interface CopyButtonProps {
    text: string
    onCopy?: () => void
}

function CopyButton({ text, onCopy }: CopyButtonProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = useCallback(() => {
      navigator.clipboard.writeText(text)
      setCopied(true)
      if (onCopy) onCopy()
      setTimeout(() => setCopied(false), 2000)
    }, [text, onCopy])

  return (
    <button
            onClick={handleCopy}
            className="p-2 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            )}
          </button>
  );
}

export default CopyButton;
