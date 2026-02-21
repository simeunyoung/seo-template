/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#1f2122",     // body 배경
        panel: "#27292a",    // 큰 박스
        card: "#1f2122",     // 카드(패널보다 살짝 어둡게)
        line: "rgba(255,255,255,0.08)",
        accent: "#ec6090",   // 포인트 핑크
        muted: "rgba(255,255,255,0.7)",
      },
      borderRadius: {
        xl2: "23px", // 템플릿 특유의 둥근 값
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.35)",
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [],
};
