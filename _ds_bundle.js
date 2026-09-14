/* @ds-bundle: {"format":4,"namespace":"TuNAnhDesignSystem_200714","components":[{"name":"Button","sourcePath":"components/core/Button/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card/Card.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel/SectionLabel.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag/Tag.jsx"},{"name":"TimelineEntry","sourcePath":"components/core/TimelineEntry/TimelineEntry.jsx"}],"sourceHashes":{"components/core/Button/Button.jsx":"9ba63e878dd7","components/core/Card/Card.jsx":"c34173aa22eb","components/core/SectionLabel/SectionLabel.jsx":"a65e4d1c3fb4","components/core/StatCard/StatCard.jsx":"7c675f51baac","components/core/Tag/Tag.jsx":"fa403293624e","components/core/TimelineEntry/TimelineEntry.jsx":"29f80c0c00a4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TuNAnhDesignSystem_200714 = window.TuNAnhDesignSystem_200714 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    md: {
      height: 44,
      padding: '0 24px'
    },
    lg: {
      height: 52,
      padding: '0 32px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-label-size)',
    fontWeight: 'var(--text-label-weight)',
    letterSpacing: 'var(--text-label-ls)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'background-color .15s ease,color .15s ease,border-color .15s ease,opacity .15s ease',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    boxSizing: 'border-box',
    ...sizes[size]
  };
  const variants = {
    primary: {
      backgroundColor: hover ? 'var(--accent-dark)' : 'var(--accent)',
      color: 'var(--on-accent)'
    },
    outline: {
      backgroundColor: hover ? 'var(--ink)' : 'transparent',
      color: hover ? 'var(--paper)' : 'var(--ink)',
      borderColor: 'var(--ink)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--accent)',
      borderColor: 'transparent',
      textDecoration: hover ? 'underline' : 'none'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    type: href ? undefined : type,
    disabled,
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  children,
  footer
}) {
  return React.createElement('div', {
    style: {
      backgroundColor: 'var(--surface-card)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      boxSizing: 'border-box'
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, eyebrow) : null, title ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, title) : null, children ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--body)'
    }
  }, children) : null, footer ? React.createElement('div', {
    style: {
      marginTop: 4
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel/SectionLabel.jsx
try { (() => {
function SectionLabel({
  children
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, React.createElement('span', {
    style: {
      width: 22,
      height: 2,
      backgroundColor: 'var(--accent)',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 'var(--space-lg)',
      backgroundColor: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--hairline)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-stat-size)',
      fontWeight: 'var(--text-stat-weight)',
      lineHeight: 'var(--text-stat-lh)',
      color: 'var(--accent)'
    }
  }, value), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag/Tag.jsx
try { (() => {
function Tag({
  children,
  variant = 'default'
}) {
  const variants = {
    default: {
      backgroundColor: 'var(--paper-soft)',
      color: 'var(--ink-soft)',
      border: '1px solid var(--hairline)'
    },
    accent: {
      backgroundColor: 'var(--accent-soft)',
      color: 'var(--accent-dark)',
      border: '1px solid transparent'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      ...variants[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TimelineEntry/TimelineEntry.jsx
try { (() => {
function TimelineEntry({
  role,
  org,
  period,
  description,
  isLast = false
}) {
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '16px 1fr',
      gap: 'var(--space-md)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: 'var(--accent)',
      marginTop: 6,
      flexShrink: 0
    }
  }), isLast ? null : React.createElement('div', {
    style: {
      width: 1,
      flex: 1,
      backgroundColor: 'var(--hairline)',
      marginTop: 4
    }
  })), React.createElement('div', {
    style: {
      paddingBottom: 'var(--space-xl)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.3,
      color: 'var(--ink)',
      marginBottom: 2
    }
  }, role), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.4,
      color: 'var(--muted)',
      marginBottom: 8
    }
  }, org), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 8
    }
  }, period), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--body)',
      maxWidth: 640
    }
  }, description)));
}
Object.assign(__ds_scope, { TimelineEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TimelineEntry/TimelineEntry.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TimelineEntry = __ds_scope.TimelineEntry;

})();
