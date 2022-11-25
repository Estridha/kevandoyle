<template>
  <button
    :class="class"
    :label="text"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
    },
    class: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: none;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;

  &.primary {
    color: white;
    background: black;
  }

  &.secondary {
    color: black;
    background: white;
  }
  
  &:hover {
    opacity: 80%;
  }
}
</style>
