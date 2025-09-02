// src/utils/importImages.js

/**
 * Importa todas las imágenes desde /assets/images/carrucel
 * y las agrupa por carpeta usando require.context (CRA/Webpack).
 *
 * Retorna un objeto:
 * {
 *   "acero-inox": [img1, img2, ...],
 *   "aluminio-cable": [img1, img2, ...],
 *   ...
 * }
 */
function importAll(r) {
  return r.keys().map(r);
}

export function importAllImages() {
  // Importa todas las imágenes de subcarpetas
  const context = require.context(
    "../assets/images/carrucel", // carpeta raíz
    true,                        // incluir subcarpetas
    /\.(png|jpe?g|svg)$/         // extensiones soportadas
  );

  const imagesByFolder = {};

  context.keys().forEach((key) => {
    const match = key.match(/\.\/([^/]+)\//); // extrae nombre de carpeta
    if (!match) return;

    const folder = match[1];
    if (!imagesByFolder[folder]) {
      imagesByFolder[folder] = [];
    }

    imagesByFolder[folder].push(context(key));
  });

  return imagesByFolder;
}

export const imagesByFolder = importAllImages();
