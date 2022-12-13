<template>
  <button
   :type="type"
    :class="class"
    :label="text"
    :disabled="disabled"
    @click="$emit('userClicked')"
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
    type: {
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
  border-radius: 6px;
  padding: 12px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  margin: 1rem;
  font-size: 1.1rem;

  &.primary {
    color: white;
    background: black;
  }

  &.secondary {
    color: black;
    background: white;
  }

  &.tertiary {
    color: white;
    &:hover {
      color: black;
      background: white;
  }
  }
  
  &:hover {
    opacity: 80%;
  }
}
</style>
