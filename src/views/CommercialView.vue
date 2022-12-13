<template>
    <div class="commercial-view">
    <ImageLink fileName="commercial.jpg" buttonText="Commercial"/>
  </div>
  </template>
  
  <script>
  import ImageLink from '@/components/ImageLink.vue';
  
  export default {
    name: 'CommercialView',
    components: {
      ImageLink,
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .commercial-view {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  </style>
  