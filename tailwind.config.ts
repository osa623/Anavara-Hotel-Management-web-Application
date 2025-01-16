import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        navy: "#4C585B",
        gold: "#4a5759",
        goldd :"#CBA328"
      },
      fontFamily:{

        poppins: ['Poppins', 'sans-serif'],
        russoone: ['Russo One', 'sans-serif'],
        kdamThmorPro: ['Kdam Thmor Pro', 'sans-serif'],
        lorniasolid:['Londrina Solid', 'sans-serif'],
        bebasneue:['Bebas Neue', 'sans-serif'],
        bricolagegrotesque:['Bricolage Grotesque', 'sans-serif'],
        kanit:['Kanit', 'sans-serif'],
        dmsans:['DM Sans', 'sans-serif'],
        londrina:['Londrina Solid', 'sans-serif'],
        atma:['Atma', 'sans serif'],
        alfaSlabOne: ['Alfa Slab One', 'cursive'],
        bubblerOne: ['Bubbler One', 'sans-serif'],
  
      },

    },
  },

  plugins: [],
} satisfies Config;
