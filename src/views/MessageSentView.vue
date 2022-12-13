<template>
  <BaseH2 title="success" />
      <p>Your message was sent successfully.</p>
  </template>
  
  <script>
  import BaseH2 from '@/components/BaseH2.vue';
  export default {
    name: 'MessageSentView',
    components: {
      BaseH2,
    }
  }
  </script>
  
  <style lang="scss" scoped>

  p {
    padding-top: 5rem;
  }
  </style>
  