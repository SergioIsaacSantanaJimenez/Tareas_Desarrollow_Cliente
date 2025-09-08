import { defineConfig } from 'vite'

export default defineConfig({
  // Carpeta donde están los archivos fuente
  root: './src',
  
  // Configuración para el build final
  build: {
    // La carpeta de salida será /dist (desde la raíz del proyecto)
    outDir: '../dist',
    emptyOutDir: true,
    
    // Configuración de assets (imágenes, fuentes, etc.)
    assetsDir: 'assets',
    
    // Configuración para que los archivos CSS y JS tengan nombres únicos
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },
  
  // Servidor de desarrollo
  server: {
    port: 3000,
    open: true // Abre automáticamente el navegador
  },
  
  // Configuración de CSS para Sass
  css: {
    preprocessorOptions: {
      scss: {
        // Permite usar @import sin extensión
        additionalData: '@import "./variables.scss";'
      }
    }
  }
})