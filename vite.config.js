import { splitVendorChunkPlugin } from 'vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import viteImagemin from 'vite-plugin-imagemin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { PUBLIC_PATH } from './config';
import { COMPONENTS_DIR, MODULES_DIR, SOURCE_PATHS } from './.toolkit/config';
import handlebars from './.toolkit/vite/vite-plugin-handlebars';
import svgIcons from './.toolkit/vite/vite-plugin-svgstore';
import fullReload from './.toolkit/vite/vite-plugin-fullreload';

export default defineConfig({
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  build: {
    sourcemap: true,
    appType: 'custom',
    lib: {
      entry: {
        'scroll-animations': path.resolve(__dirname, 'lib/scroll-animations/index.ts'),
        'active-state-animations': path.resolve(__dirname, 'lib/active-state-animations/index.ts')
      }
    },
    rollupOptions: {
      external: ['lit', 'motion', 'framer-motion']
    }
  },
  plugins: [
    splitVendorChunkPlugin(),
    eslint(),
    stylelint(),
    viteImagemin({
      gifsicle: {
        interlaced: true
      },
      optipng: {
        optimizationLevel: 5
      },
      mozjpeg: {
        quality: 85,
        progressive: true
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    handlebars({
      helpersDirs: path.resolve(__dirname, './.toolkit/handlebars'),
      partialsDirs: [
        path.resolve(SOURCE_PATHS.MARKUP, COMPONENTS_DIR),
        path.resolve(SOURCE_PATHS.MARKUP, MODULES_DIR),
        path.resolve(SOURCE_PATHS.MARKUP, MODULES_DIR, 'global')
      ],
      globals: {
        publicPath: PUBLIC_PATH
      }
    }),
    svgIcons({
      inputFolder: path.resolve(__dirname, SOURCE_PATHS.STATIC, 'svg-sprites'),
      output: [
        `dist/${PUBLIC_PATH}images/svgsheet.svg`,
        `${SOURCE_PATHS.STATIC}/images/svgsheet.svg`
      ],
      spriteName: 'svgsheet',
      svgoOptions: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    fullReload({ files: [path.resolve(SOURCE_PATHS.MARKUP, '**/*.{hbs,html}')] })
  ]
});
