import { defineConfig } from 'vite'
import { peerDependencies } from './package.json';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'graylog-design-system',
      fileName: (format) => `graylog-design-system.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDom' },
      },
    },
  },
  plugins: [react(), dts({ exclude: ['**/*.stories.ts', '**/*.test.ts'], insertTypesEntry: true })],
})
