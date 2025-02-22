import sharp from 'sharp';
import fs from 'fs';

const sizes = [355, 852, 1278, 1680, 2000, 2268];
const images = ["slide1.avif", "slide2.avif", "slide3.avif", "slide4.avif", "slide5.avif", "slide6.avif"];

images.forEach(image => {
    sizes.forEach(size => {
        sharp(`./public/${image}`)
            .resize(size)
            .toFile(`./public/${image.replace('.avif', `-${size}w.avif`)}`)
            .then(() => console.log(`✅ Imagen ${image} redimensionada a ${size}w`))
            .catch(err => console.error(`❌ Error con ${image} (${size}w):`, err));
    });
});
