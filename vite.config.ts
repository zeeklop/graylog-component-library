import { defineConfig } from 'vite';
import { peerDependencies } from './package.json';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import Unfonts from 'unplugin-fonts/vite';
import type { CustomFontFace } from 'unplugin-fonts/types';

const POPPINS = {
  regular: ['Poppins-Regular', 'Poppins-Italic'],
  medium: ['Poppins-Medium', 'Poppins-MediumItalic'],
  bold: ['Poppins-Bold', 'Poppins-BoldItalic'],
};

const ROBOTO_MONO = {
  regular: ['RobotoMono-Regular', 'RobotoMono-Italic'],
  bold: ['RobotoMono-Bold', 'RobotoMono-BoldItalic'],
};

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'graylog-design-system',
      fileName: format => `graylog-design-system.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDom' },
      },
    },
  },
  plugins: [
    react(),
    dts({ exclude: ['**/*.stories.ts', '**/*.test.ts'], insertTypesEntry: true }),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Roboto Mono',
            local: 'RobotoMono',
            src: './src/assets/fonts/Roboto_Mono/static/*.ttf',
            transform(font: CustomFontFace) {
              if (ROBOTO_MONO.bold.includes(font.basename)) {
                font.weight = 700;
              }

              if (ROBOTO_MONO.regular.includes(font.basename)) {
                font.weight = 400;
              }

              return font;
            },
          },
          {
            name: 'Poppins',
            local: 'Poppins',
            src: './src/assets/fonts/Poppins/*.ttf',
            transform(font: CustomFontFace) {
              if (POPPINS.bold.includes(font.basename)) {
                font.weight = 700;
              }

              if (POPPINS.medium.includes(font.basename)) {
                font.weight = 500;
              }

              if (POPPINS.regular.includes(font.basename)) {
                font.weight = 400;
              }

              return font;
            },
          },
        ],
      },
    }),
  ],
});
