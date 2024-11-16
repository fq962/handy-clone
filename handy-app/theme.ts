import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#a5eb4a" },
          100: { value: "#8bc53e" },
          200: { value: "#67922d" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
