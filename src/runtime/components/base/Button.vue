<template>
  <button :class="classes" class="paper-btn">
    <slot />
  </button>
</template>

<script setup lang="ts">

type Colors = "red" | "orange" | "dandelion" | "inchworm" | "green" | "caribbean" | "egg-blue" | "blue-green" | "blue" | "purple" | "pink" | "fucsia" | "black" | "white"
type Flavor = "outline" | "ghost" | "default"
type Size = "small" | "medium" | "large"
type Shape = "rounded" | "circle" | "none"

const props = withDefaults(
  defineProps<{
  color?: Colors;
  flavor?: Flavor;
  size?: Size;
  shape?: Shape;
}>(),
{
  color: "black",
  flavor: "default",
  size: "medium",
  shape: "rounded",
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
  red: "bg-accent-red text-white hover:bg-accent-red/90",
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
  red: 'border-[2px] bg-transparent border-accent-red text-accent-red hover:bg-accent-red/5',
  orange: 'border-[2px] bg-transparent border-accent-orange text-accent-orange hover:bg-accent-orange/5',
  dandelion: 'border-[2px] bg-transparent border-accent-dandelion text-accent-dandelion hover:bg-accent-dandelion/5',
  inchworm: 'border-[2px] bg-transparent border-accent-inchworm text-accent-inchworm hover:bg-accent-inchworm/5',
  green: 'border-[2px] bg-transparent border-accent-green text-accent-green hover:bg-accent-green/5',
  caribbean: 'border-[2px] bg-transparent border-accent-caribbean text-accent-caribbean hover:bg-accent-caribbean/5',
  'egg-blue': 'border-[2px] bg-transparent border-accent-egg-blue text-accent-egg-blue hover:bg-accent-egg-blue/5',
  'blue-green': 'border-[2px] bg-transparent border-accent-blue-green text-accent-blue-green hover:bg-accent-blue-green/5',
  blue: 'border-[2px] bg-transparent border-accent-blue text-accent-blue hover:bg-accent-blue/5',
  purple: 'border-[2px] bg-transparent border-accent-purple text-accent-purple hover:bg-accent-purple/5',
  pink: 'border-[2px] bg-transparent border-accent-pink text-accent-pink hover:bg-accent-pink/5',
  fucsia: 'border-[2px] bg-transparent border-accent-fucsia text-accent-fucsia hover:bg-accent-fucsia/5',
  black: 'border-[2px] bg-transparent border-other-black text-other-black hover:bg-other-black/5',
  white: 'border-[2px] bg-transparent border-white text-white text-white hover:bg-white/5',
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

const shapes = {
  rounded: "rounded-[8px]",
  circle: "rounded-full",
  none: "rounded-none",
}

const classes = computed(() => {
  return [
    sizes[props.size],
    props.flavor === "outline" ? outline[props.color] : "",
    props.flavor === "ghost" ? ghost[props.color] : "",
    props.flavor === "default" ? background_colors[props.color] : "",
    props.shape === "rounded" ? shapes[props.shape] : "",
    props.shape === "circle" ? shapes[props.shape] : "",
    props.shape === "none" ? shapes[props.shape] : "",
  ]
})


</script>

<style scoped>
.paper-btn {
  @apply px-4 py-3 font-medium;
}
</style>
