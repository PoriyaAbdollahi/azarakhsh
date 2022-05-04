module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'vazir': ['vazir'],
    }

  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        sky: {
          "primary": "#FDC206",
          
          "secondary": "#FFFFFF",
                   
          "accent": "#002265",
                   
          "neutral": "#000000",
                   
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
