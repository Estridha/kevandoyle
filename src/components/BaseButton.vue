<template>
  <button>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
button {
    background-color: white;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
    text-transform: uppercase;
    border-radius: 8px;
}
</style>
