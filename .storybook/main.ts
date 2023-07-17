import type { StorybookConfig } from "@storybook/react-vite";
import Unocss from 'unocss/vite';
import { mergeConfig } from "vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [Unocss({
        include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|stories?)($|\?)/],
        extraContent: {
          filesystem: ['../src/stories/**/*']
        },
      })]
    })
  }
};
export default config;
