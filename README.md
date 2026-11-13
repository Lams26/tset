@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #0f172a;
  background-color: #f8fafc;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: #f8fafc;
}

.dark body {
  background: #070b17;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

@layer components {
  .shadow-soft {
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
  }

  .shadow-glow {
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.32);
  }
}
