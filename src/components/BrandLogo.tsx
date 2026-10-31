import React from 'react';

interface BrandLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showWordmark?: boolean;
  showTagline?: boolean;
  isMobileCompact?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'dark',
  size = 'md',
  showWordmark = true,
  showTagline = false,
  isMobileCompact = false,
  className = '',
}) => {
  const sizeMap = {
    sm: { iconWidth: 32, iconHeight: 32, titleSize: '1.15rem', techSize: '0.65rem', taglineSize: '0.55rem' },
    md: { iconWidth: 42, iconHeight: 42, titleSize: '1.35rem', techSize: '0.72rem', taglineSize: '0.62rem' },
    lg: { iconWidth: 52, iconHeight: 52, titleSize: '1.7rem', techSize: '0.82rem', taglineSize: '0.7rem' },
    hero: { iconWidth: 64, iconHeight: 64, titleSize: '2.1rem', techSize: '0.95rem', taglineSize: '0.78rem' },
  };

  const { iconWidth, iconHeight, titleSize, techSize, taglineSize } = sizeMap[size];
  const isLight = theme === 'light';

  return (
    <div
      className={`brand-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' || isMobileCompact ? '0.65rem' : size === 'hero' ? '1.15rem' : '0.85rem',
        userSelect: 'none',
      }}
    >
      {/* Official Metallic S Logo Emblem — Exact geometry preserved with transparent background */}
      <img
        src="/stravix-emblem.png"
        alt="Stravix Tech Official S Emblem"
        width={iconWidth}
        height={iconHeight}
        loading="eager"
        decoding="async"
        style={{
          width: `${iconWidth}px`,
          height: `${iconHeight}px`,
          objectFit: 'contain',
          flexShrink: 0,
          display: 'block',
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45))',
        }}
      />

      {/* Wordmark and Tagline */}
      {showWordmark && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          {/* STRAVIX + TECH Lockup */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: isMobileCompact ? '1.15rem' : titleSize,
                letterSpacing: '0.04em',
                background: isLight
                  ? 'linear-gradient(180deg, #090D14 0%, #334155 100%)'
                  : 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 45%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: isLight ? 'none' : '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              STRAVIX
            </span>

            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: isMobileCompact ? '0.65rem' : techSize,
                fontWeight: 700,
                color: '#A3E635',
                backgroundColor: 'rgba(163, 230, 53, 0.12)',
                border: '1px solid rgba(163, 230, 53, 0.45)',
                padding: '0.16rem 0.45rem',
                borderRadius: '4px',
                letterSpacing: '0.08em',
                textShadow: '0 0 10px rgba(163, 230, 53, 0.4)',
              }}
            >
              TECH
            </span>
          </div>

          {/* Tagline: BUILDING WHAT'S NEXT. */}
          {showTagline && !isMobileCompact && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: taglineSize,
                fontWeight: 600,
                letterSpacing: '0.22em',
                color: isLight ? '#64748B' : '#94A3B8',
                textTransform: 'uppercase',
                marginTop: '0.35rem',
              }}
            >
              BUILDING WHAT&apos;S NEXT.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

