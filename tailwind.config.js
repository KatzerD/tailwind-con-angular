/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular", "Monospace"],
      headers: ["Oswald", "Arial"],
      body: ["Helvetica", '"Open sans"', "Arial"],
    },
  },
  plugins: [],
};
