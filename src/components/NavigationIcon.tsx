import React from 'react';

interface NavigationIconProps {
  className?: string;
  size?: number;
}

const NavigationIcon: React.FC<NavigationIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Browser window frame */}
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      
      {/* Top bar */}
      <rect x="2" y="3" width="20" height="4" rx="2" ry="2" fill="currentColor" opacity="0.3"/>
      
      {/* Window controls */}
      <circle cx="5" cy="5.5" r="0.8" fill="currentColor" opacity="0.6"/>
      <circle cx="7.5" cy="5.5" r="0.8" fill="currentColor" opacity="0.6"/>
      <circle cx="10" cy="5.5" r="0.8" fill="currentColor" opacity="0.6"/>
      
      {/* Content sections */}
      <rect x="4" y="9" width="7" height="4" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="13" y="9" width="7" height="4" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="4" y="15" width="7" height="4" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="13" y="15" width="7" height="4" rx="1" fill="currentColor" opacity="0.4"/>
      
      {/* Navigation dots */}
      <rect x="14" y="16" width="1" height="1" fill="currentColor" opacity="0.8"/>
      <rect x="16" y="16" width="1" height="1" fill="currentColor" opacity="0.8"/>
      <rect x="18" y="16" width="1" height="1" fill="currentColor" opacity="0.8"/>
      
      {/* Cursor/pointer */}
      <path d="M8 12 L12 16 L10 16 L8 18 L6 16 L8 12 Z" fill="currentColor" opacity="0.7"/>
    </svg>
  );
};

export default NavigationIcon;