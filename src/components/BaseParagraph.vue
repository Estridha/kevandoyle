<template>
    <p>
      {{ text }}
    </p>
</template>
  
  <script>
  export default {
    name: "BaseParagraph",
    props: {
      text: {
        type: String,
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  p {
    margin: 1rem;
  }
  </style>
  