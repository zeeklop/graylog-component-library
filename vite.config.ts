import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    outDir: './lib',
    emptyOutDir: true,
    lib: {
      entry: './src/index.ts',
      name: 'GraylogComponentsLibrary',
      fileName: 'graylog-components-library',
    },
    rollupOptions : {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({ insertTypesEntry: true }),
  ],
})
