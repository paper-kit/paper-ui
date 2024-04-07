<template>
  <button :class="classes" class="paper-btn">
    <slot />
  </button>
</template>

<script setup lang="ts">

type Colors = "red" | "orange" | "dandelion" | "inchworm" | "green" | "caribbean" | "egg-blue" | "blue-green" | "blue" | "purple" | "pink" | "fucsia" | "black" | "white"
type Flavor = "outline" | "ghost" | "default"
type Size = "small" | "medium" | "large"

const props = withDefaults(
  defineProps<{
  color?: Colors;
  flavor?: Flavor;
  size?: Size;
}>(),
{
  color: "black",
  flavor: "default",
  size: "medium",
})


const colors = {
  red: "accent-red",
  orange: "accent-orange",
  dandelion: "accent-dandelion",
  inchworm: "accent-inchworm",
  green: "accent-green",
  caribbean: "accent-caribbean",
  "egg-blue": "accent-egg-blue",
  "blue-green": "accent-blue-green",
  blue: "accent-blue",
  purple: "accent-purple",
  pink: "accent-pink",
  fucsia: "accent-fucsia",
  black: "other-black",
  white: "accent-white",
}

const background_colors = {
  red: "bg-accent-red text-white",
  orange: "bg-accent-orange text-white",
  dandelion: "bg-accent-dandelion text-white",
  inchworm: "bg-accent-inchworm text-white",
  green: "bg-accent-green text-white",
  caribbean: "bg-accent-caribbean text-white",
  'egg-blue': "bg-accent-egg-blue text-white",
  'blue-green': "bg-accent-blue text-white-green",
  blue: "bg-accent-blue text-white",
  purple: "bg-accent-purple text-white",
  pink: "bg-accent-pink text-white",
  fucsia: "bg-accent-fucsia text-white",
  black: "bg-other-black text-white",
  white: "bg-white text-black",
}

const sizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
}

const flavors = {
  outline: `bg-transparent text-${colors[props.color]} border-2 border-${colors[props.color]}`,
  ghost: "bg-transparent",
  default: "rounded-md",
}


const classes = computed(() => {
  return [
    background_colors[props.color],
    flavors[props.flavor],
    sizes[props.size],
  ].join(" ")
})


</script>

<style scoped>
.paper-btn {
  @apply px-4 py-3 rounded-[8px];
}
</style>
