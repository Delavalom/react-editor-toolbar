import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'
const { EsLinter, linterPlugin } = EsLint
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      include: ['src/component/']
    })
  ],
  build: {
    lib: {
      entry: resolve('src', 'component/index.tsx'),
      name: 'reactEditorToolbar',
      formats: ['es', 'umd'],
      fileName: (format) => `react-editor-toolbar.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)]
    }
  }
}))
