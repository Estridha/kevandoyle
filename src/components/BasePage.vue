<template>
    <div class="page-container">
        <router-view class="content" />     
    </div>
  </template>
  
  <script>
  export default {
    name: "BasePage",
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  .page-container {
  padding-bottom: 2rem;
  max-width: 100vw;
  max-height: 100%;
  overflow: none;
}
  </style>
  