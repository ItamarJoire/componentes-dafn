import React from 'react'

export interface IconProps {
  size?: number
  className?: string
}

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true
})

export const SearchIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export const MicIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
)

export const GridIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

export const UserIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

export const ChevronDownIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export const ChevronRightIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export const MenuIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

export const CloseIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export const KebabIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className} strokeWidth={0} fill="currentColor">
    <circle cx="12" cy="5" r="1.8" />
    <circle cx="12" cy="12" r="1.8" />
    <circle cx="12" cy="19" r="1.8" />
  </svg>
)

export const PaletteIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="8.5" cy="10.5" r="1" fill="currentColor" />
    <circle cx="12" cy="8" r="1" fill="currentColor" />
    <circle cx="15.5" cy="10.5" r="1" fill="currentColor" />
    <path d="M8 15c1 1 2 1 4 1s3 0 4-1" />
  </svg>
)

export const ContrastIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
  </svg>
)

export const HandIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M8 13V6a1.5 1.5 0 0 1 3 0v5" />
    <path d="M11 11V4a1.5 1.5 0 0 1 3 0v7" />
    <path d="M14 11V5.5a1.5 1.5 0 0 1 3 0V12" />
    <path d="M17 8a1.5 1.5 0 0 1 3 0v6a6 6 0 0 1-6 6h-2c-2.5 0-3.8-1-5-2.5L4 13.8c-.6-.8-.4-1.7.3-2.2.7-.5 1.7-.4 2.3.3L8 13" />
  </svg>
)

export const XIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className} strokeWidth={0} fill="currentColor">
    <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.7l-5.2-6.8L5.6 22H2.3l7.7-8.8L1.5 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20Z" />
  </svg>
)

export const YoutubeIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className} strokeWidth={0} fill="currentColor">
    <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12Z" />
    <path d="M10 15.2V8.8l5.5 3.2-5.5 3.2Z" fill="var(--govbr-white,#fff)" stroke="none" />
  </svg>
)

export const FacebookIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className} strokeWidth={0} fill="currentColor">
    <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.6V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.7H7.4v3.3h2.8V22h3.3Z" />
  </svg>
)

export const FlickrIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className} strokeWidth={0} fill="currentColor">
    <circle cx="8.5" cy="12" r="4" />
    <circle cx="15.5" cy="12" r="4" />
  </svg>
)

export const InstagramIcon: React.FC<IconProps> = ({ size, className }) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const SocialIcons: Record<string, React.FC<IconProps>> = {
  x: XIcon,
  youtube: YoutubeIcon,
  facebook: FacebookIcon,
  flickr: FlickrIcon,
  instagram: InstagramIcon
}
