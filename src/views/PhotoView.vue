<template>
  <div class="photo-view">
  <ImageLink fileName="commercial.jpg" buttonText="Commercial"/>
  <ImageLink fileName="editorial.jpg" buttonText="Editorial"/>
  <ImageLink fileName="prints.jpg" buttonText="Prints"/>
</div>
</template>

<script>
import ImageLink from '@/components/ImageLink.vue';

export default {
  name: 'PhotoView',
  components: {
    ImageLink,
  }
}
</script>

<style lang="scss" scoped>
.photo-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
