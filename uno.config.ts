import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetTypography from "@unocss/preset-typography";


export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography()
  ],
});