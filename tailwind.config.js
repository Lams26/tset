export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#070b17',
        panel: '#121a2d',
        accent: '#7c3aed',
        accentSoft: '#60a5fa',
        line: '#1f2937'
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 58, 237, 0.35)',
        soft: '0 25px 60px rgba(15, 23, 42, 0.25)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(96,165,250,0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(124,58,237,0.2), transparent 30%)'
      }
    }
  },
  plugins: []
};
