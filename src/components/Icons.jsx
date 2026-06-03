// Lightweight inline SVG icons (stroke-based, currentColor).
const S = ({ children, size = 22, fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
)

export const Icon = {
  spray: () => (<S><path d="M9 3h2v4H9z"/><path d="M9 7h2"/><path d="M13 4h2M13 6h2M16 3h1M16 6h1"/><rect x="7" y="7" width="6" height="14" rx="2"/><path d="M9 11h2"/></S>),
  seat: () => (<S><path d="M5 12V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/><path d="M5 12h9a3 3 0 0 1 3 3v3"/><path d="M5 12v6"/><path d="M5 18h12"/></S>),
  shine: () => (<S><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2"/><circle cx="12" cy="12" r="3.2"/></S>),
  wheel: () => (<S><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/></S>),
  check: () => (<S size={18}><path d="M20 6 9 17l-5-5"/></S>),
  arrow: () => (<S size={18}><path d="M5 12h14M13 6l6 6-6 6"/></S>),
  phone: () => (<S><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></S>),
  mail: () => (<S><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></S>),
  pin: () => (<S><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></S>),
  fb: () => (<S fill="currentColor" ><path stroke="none" d="M14 9h2.5l.5-3H14V4.3c0-.9.3-1.5 1.6-1.5H17V.1C16.7.1 15.7 0 14.6 0 12.2 0 10.6 1.4 10.6 4v2H8v3h2.6v8H14z"/></S>),
  ig: () => (<S><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></S>),
  plus: () => (<S size={20}><path d="M12 5v14M5 12h14"/></S>),
  menu: () => (<S size={26}><path d="M4 6h16M4 12h16M4 18h16"/></S>),
  sparkle: () => (<S size={16}><path d="M12 3l1.8 4.9L19 9.7l-4.2 2.6L13 18l-1-4.7L7 10.8l5-1z"/></S>),
}
