export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swing: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25px)" }, // jitna move karna hai
        },
      },
      animation: {
        swing: "swing 3s ease-in-out infinite", // 3s = speed
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};
