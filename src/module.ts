import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponent,
  installModule,
} from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "my-module",
    configKey: "myModule",
  },
  defaults: {},
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    nuxt.options.css.push(resolve("./runtime/assets/tailwind.css"));
    await installModule("@nuxtjs/tailwindcss", {
      exposeConfig: true,
      config: {
        darkMode: "class",
        content: {
          files: [
            resolve("./runtime/components/**/*.{vue,mjs,ts}"),
            resolve("./runtime/*.{mjs,js,ts}"),
          ],
        },
        theme: {
          extend: {
            fontFamily: {
              patrick: ['"Patrick Hand"', "cursive"],
              inter: ['"Inter"', "sans-serif"],
            },
            colors: {
              gray: {
                "1": "#EEEEEE",
                "2": "#D8D8D8",
                "3": "#B4B4B4",
                "4": "#929292",
                "5": "#696969",
                "6": "#454545",
              },
              accent: {
                red: "#E12B56",
                orange: "#FA9248",
                dandelion: "#FFDE75",
                inchworm: "#BCE051",
                green: "#4DA764",
                caribbean: "#37D4AD",
                "egg-blue": "#44CECE",
                "blue-green": "#2799B2",
                blue: "#2B71DB",
                purple: "#633DA2",
                pink: "#EA82EB",
                fucsia: "#E23274",
              },
              "accent-light": {
                red: "#FFF0F4",
                orange: "#FFEADB",
                dandelion: "#FFF5D3",
                inchworm: "#F1FBD2",
                green: "#E1FBE7",
                caribbean: "#DAFCF3",
                "egg-blue": "#D8FAFA",
                "blue-green": "#E6F9FE",
                blue: "#EDF4FF",
                purple: "#F6F0FF",
                pink: "#FFEFFF",
                fucsia: "#FFF0F6",
              },
              other: {
                notification: "#E05757",
                figma: "#9747FF",
                black: "#1B1B1B",
              },
            },
          },
        },
      },
    });

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve("./runtime/plugin"));
    addComponent({
      name: "TestComp",
      filePath: resolve("./runtime/components/TestComp.vue"),
    });
    addComponent({
      name: "BaseButton",
      filePath: resolve("./runtime/components/base/Button.vue"),
    },);
  },
});
