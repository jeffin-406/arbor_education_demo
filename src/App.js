import React from 'react';

function App() {
  // Extract configuration inputs injected via runtime assets (env.sh)
  const themeColor = window._env_?.COLOR || 'BLUE';
  const appEnv = window._env_?.APP_ENV || 'Development';
  const appName = window._env_?.APP_NAME || 'Student Major Project';
  const isDebug = window._env_?.DEBUG === 'true';

  /**
   * Dynamic Runtime Theme Matrix
   * Maps your .env file's COLOR variable directly to professional UI palettes
   */
  const getThemePalette = (colorConfig) => {
    const activeColor = colorConfig.toUpperCase();

    switch (activeColor) {
      case 'BLUE':
        return {
          bgGradient: 'linear-gradient(135deg, #0b1528 0%, #0f2042 50%, #173161 100%)',
          accent: '#38bdf8', // Vibrant Sky Cyan
          glow: 'rgba(56, 189, 248, 0.25)',
          mutedAccent: 'rgba(56, 189, 248, 0.1)',
        };
      case 'RED':
        return {
          bgGradient: 'linear-gradient(135deg, #1a0b0b 0%, #2e1212 50%, #4a1a1a 100%)',
          accent: '#ef4444', // Premium Coral Crimson
          glow: 'rgba(239, 68, 68, 0.25)',
          mutedAccent: 'rgba(239, 68, 68, 0.1)',
        };
      case 'GREEN':
        return {
          bgGradient: 'linear-gradient(135deg, #06140e 0%, #0b2419 50%, #143d2b 100%)',
          accent: '#10b981', // Neon Emerald
          glow: 'rgba(16, 185, 129, 0.25)',
          mutedAccent: 'rgba(16, 185, 129, 0.1)',
        };
      case 'PURPLE':
        return {
          bgGradient: 'linear-gradient(135deg, #12071f 0%, #210d37 50%, #361659 100%)',
          accent: '#a855f7', // Electric Violet
          glow: 'rgba(168, 85, 247, 0.25)',
          mutedAccent: 'rgba(168, 85, 247, 0.1)',
        };
      case 'ORANGE':
        return {
          bgGradient: 'linear-gradient(135deg, #1c0f06 0%, #2f190a 50%, #4a2810 100%)',
          accent: '#f97316', // Cyberpunk Amber
          glow: 'rgba(249, 115, 22, 0.25)',
          mutedAccent: 'rgba(249, 115, 22, 0.1)',
        };
      default: // System Fallback (Sleek Dark Slate)
        return {
          bgGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          accent: '#f8fafc',
          glow: 'rgba(248, 250, 252, 0.1)',
          mutedAccent: 'rgba(255, 255, 255, 0.05)',
        };
    }
  };

  const theme = getThemePalette(themeColor);

  // Stylized Design Architecture Block
  const styles = {
    viewport: {
      background: theme.bgGradient,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#f8fafc',
      margin: 0,
      padding: '24px',
      boxSizing: 'border-box',
      transition: 'background 0.5s ease-in-out', // Smooth shift if color changes
    },
    dashboardCard: {
      background: 'rgba(15, 23, 42, 0.45)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid rgba(255, 255, 255, 0.07)`,
      borderRadius: '28px',
      padding: '48px 56px',
      width: '100%',
      maxWidth: '500px',
      textAlign: 'center',
      boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px ${theme.glow}`,
    },
    appHeading: {
      fontSize: '2.25rem',
      fontWeight: '800',
      letterSpacing: '-0.03em',
      marginBottom: '16px',
      background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    badgeWrapper: {
      display: 'flex',
      justifyContent: 'center',
      gap: '14px',
      marginBottom: '32px',
      flexWrap: 'wrap',
    },
    baseBadge: {
      padding: '8px 18px',
      borderRadius: '100px',
      fontSize: '0.8rem',
      fontWeight: '700',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      backdropFilter: 'blur(4px)',
    },
    environmentBadge: {
      background: theme.mutedAccent,
      border: `1px solid ${theme.accent}`,
      color: theme.accent,
      boxShadow: `0 0 15px ${theme.mutedAccent}`,
    },
    debugStatusBadge: {
      background: isDebug ? 'rgba(234, 179, 8, 0.07)' : 'rgba(255, 255, 255, 0.03)',
      border: isDebug ? '1px solid #eab308' : '1px solid rgba(255, 255, 255, 0.08)',
      color: isDebug ? '#facc15' : '#94a3b8',
    },
    livePulseIndicator: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      backgroundColor: theme.accent,
      display: 'inline-block',
      marginRight: '10px',
      boxShadow: `0 0 12px ${theme.accent}`,
    },
    decorativeLine: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
      border: 'none',
      margin: '28px 0',
    },
    descriptionText: {
      fontSize: '0.95rem',
      color: '#94a3b8',
      lineHeight: '1.7',
      fontWeight: '400',
    }
  };

  return (
    <div style={styles.viewport}>
      <div style={styles.dashboardCard}>
        {/* Dynamic Project Title */}
        <h1 style={styles.appHeading}>{appName}</h1>
        
        {/* Context-Aware Metric Badges */}
        <div style={styles.badgeWrapper}>
          <div style={{ ...styles.baseBadge, ...styles.environmentBadge }}>
            <span style={styles.livePulseIndicator}></span>
            {appEnv}
          </div>
          <div style={{ ...styles.baseBadge, ...styles.debugStatusBadge }}>
            DEBUG: {isDebug ? 'ACTIVE' : 'OFF'}
          </div>
        </div>

        <hr style={styles.decorativeLine} />

        {/* Informational Subtext */}
        <p style={styles.descriptionText}>
          Automated deployment successfully verified. Static configuration layers compiled and injected natively via Docker pipeline asset streams.
        </p>
      </div>
    </div>
  );
}

export default App;
