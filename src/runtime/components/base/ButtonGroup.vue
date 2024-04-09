<template>
  <div class="btn-group">
    <slot />
  </div>
</template>

<style>
.btn-group {
  display: flex;
}

.btn-group > button {
  border-radius: 0;
}

.btn-group > button:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.btn-group > button:nth-last-child(1) {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>