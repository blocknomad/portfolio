import imagemin from "imagemin";
import webp from "imagemin-webp";

imagemin(["src/assets/projects/*.{jpg,png}"], {
  destination: "src/assets/projects",
  plugins: [webp({ quality: 100 })]
});
