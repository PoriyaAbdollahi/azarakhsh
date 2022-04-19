module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        sky: {
          "primary": "#608AF5",
          
 "secondary": "#D926A9",
          
 "accent": "#1FB2A6",
          
 "neutral": "#191D24",
          
 "base-100": "#2A303C",
          
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
        
        },
      },
      "dark",
      "cupcake",
      "retro",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    darkTheme: "dark",
  },
}
