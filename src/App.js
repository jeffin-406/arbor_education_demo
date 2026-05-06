import React from 'react';

function App() {
  // Extract environment variables with safe defaults
  const themeColor = window._env_?.COLOR || 'BLUE';
  const appEnv = window._env_?.APP_ENV || 'Development';
  const appName = window._env_?.APP_NAME || 'Student Major Project';
  const isDebug = window._env_?.DEBUG === 'true';

  // Dynamic theme mapping based on your custom COLOR variable
  const getThemeStyles = (color) => {
    const normalize = color.toUpperCase();
    if (normalize === 'BLUE') {
      return {
        bgGradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        accentColor: '#38bdf8',
        glow: 'rgba(56, 189, 248, 0.15)',
      };
    }
    if (normalize === 'RED') {
      return {
        bgGradient: 'linear-gradient(135deg, #1f0505 0%, #3d0b0b 50%, #611111 100%)',
        accentColor: '#f87171',
        glow: 'rgba(248, 113, 113, 0.15)',
      };
    }
    // Universal fallback theme
    return {
      bgGradient: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      accentColor: '#10b981',
      glow: 'rgba(16, 185, 129, 0.15)',
    };
  };

  const theme = getThemeStyles(themeColor);

  // Structural Stylesheet
  const styles = {
    container: {
      background: theme.bgGradient,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#f3f4f6',
      margin: 0,
      padding: '20px',
      boxSizing: 'border-box',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '24px',
      padding: '40px 60px',
      width: '100%',
      maxWidth: '540px',
      textAlign: 'center',
      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 80px ${theme.glow}`,
      transition: 'transform 0.3s ease',
    },
    header: {
      fontSize: '2rem',
      fontWeight: '800',
      letterSpacing: '-0.025em',
      marginBottom: '12px',
      background: 'linear-gradient(to right, #ffffff, #d1d5db)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    divider: {
      height: '1px',
      background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)',
      border: 'none',
      margin: '24px 0',
    },
    badgeContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '24px',
      flexWrap: 'wrap',
    },
    badge: {
      padding: '6px 16px',
      borderRadius: '9999px',
      fontSize: '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
    },
    envBadge: {
      background: 'rgba(255, 255, 255, 0.08)',
      border: `1px solid ${theme.accentColor}`,
      color: theme.accentColor,
    },
    debugBadge: {
      background: isDebug ? 'rgba(234, 179, 8, 0.1)' : 'rgba(255, 255, 255, 0.04)',
      border: isDebug ? '1px solid #eab308' : '1px solid rgba(255, 255, 255, 0.1)',
      color: isDebug ? '#facc15' : '#9ca3af',
    },
    footerText: {
      fontSize: '0.9rem',
      color: '#9ca3af',
      lineHeight: '1.5',
    },
    statusDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: theme.accentColor,
      display: 'inline-block',
      marginRight: '8px',
      boxShadow: `0 0 10px ${theme.accentColor}`,
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Application Title */}
        <h1 style={styles.header}>{appName}</h1>
        
        {/* Environment Profile Badges */}
        <div style={styles.badgeContainer}>
          <div style={{ ...styles.badge, ...styles.envBadge }}>
            <span style={styles.statusDot}></span>
            {appEnv}
          </div>
          <div style={{ ...styles.badge, ...styles.debugBadge }}>
            DEBUG: {isDebug ? 'ACTIVE' : 'OFF'}
          </div>
        </div>

        <hr style={styles.divider} />

        {/* Informational Subtext */}
        <p style={styles.footerText}>
          Automated deployment successfully verified. Static configuration layers compiled and injected natively via Docker pipeline asset streams.
        </p>
      </div>
    </div>
  );
}

export default App;
