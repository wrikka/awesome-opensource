import { defineConfig, presetWind4, transformerVariantGroup, transformerDirectives, transformerCompileClass, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
  content: {
    filesystem: [
      './docs/**/*.{html,md,vue}',
      './.vitepress/**/*.{html,md,vue}'
    ],
  },
})
