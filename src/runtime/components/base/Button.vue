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


const outline = {
  red: 'border-[2px] bg-transparent border-accent-red text-accent-red',
  orange: 'border-[2px] bg-transparent border-accent-orange text-accent-orange',
  dandelion: 'border-[2px] bg-transparent border-accent-dandelion text-accent-dandelion',
  inchworm: 'border-[2px] bg-transparent border-accent-inchworm text-accent-inchworm',
  green: 'border-[2px] bg-transparent border-accent-green text-accent-green',
  caribbean: 'border-[2px] bg-transparent border-accent-caribbean text-accent-caribbean',
  'egg-blue': 'border-[2px] bg-transparent border-accent-egg-blue text-accent-egg-blue',
  'blue-green': 'border-[2px] bg-transparent border-accent-blue-green text-accent-blue-green',
  blue: 'border-[2px] bg-transparent border-accent-blue text-accent-blue',
  purple: 'border-[2px] bg-transparent border-accent-purple text-accent-purple',
  pink: 'border-[2px] bg-transparent border-accent-pink text-accent-pink',
  fucsia: 'border-[2px] bg-transparent border-accent-fucsia text-accent-fucsia',
  black: 'border-[2px] bg-transparent border-other-black text-other-black',
  white: 'border-[2px] bg-transparent border-white text-white text-white',
}

const ghost = {
  red: 'bg-transparent text-accent-red',
  orange: 'bg-transparent text-accent-orange',
  dandelion: 'bg-transparent text-accent-dandelion',
  inchworm: 'bg-transparent text-accent-inchworm',
  green: 'bg-transparent text-accent-green',
  caribbean: 'bg-transparent text-accent-caribbean',
  'egg-blue': 'bg-transparent text-accent-egg-blue',
  'blue-green': 'bg-transparent text-accent-blue-green',
  blue: 'bg-transparent text-accent-blue',
  purple: 'bg-transparent text-accent-purple',
  pink: 'bg-transparent text-accent-pink',
  fucsia: 'bg-transparent text-accent-fucsia',
  black: 'bg-transparent text-other-black',
  white: 'bg-transparent text-white',
}


const classes = computed(() => {
  return [
    sizes[props.size],
    props.flavor === "outline" ? outline[props.color] : "",
    props.flavor === "ghost" ? ghost[props.color] : "",
    props.flavor === "default" ? background_colors[props.color] : "",
  ]
})


</script>

<style scoped>
.paper-btn {
  @apply px-4 py-3 rounded-[8px] font-medium;
}
</style>
