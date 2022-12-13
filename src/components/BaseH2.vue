<template>
    <h2>
      {{ title }}
    </h2>
</template>
  
  <script>
  export default {
    name: "BaseH2",
    props: {
      title: {
        type: String,
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

  h2 {
    font-family: 'Abril Fatface', cursive;
    font-size: 30px;
    margin: 1rem 1rem 4rem 1rem;

    text-transform: uppercase;
  }
  </style>
  