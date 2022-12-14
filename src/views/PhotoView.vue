<template>
  <div class="photo-view">
  <ImageLink fileName="commercial.jpg" buttonText="Commercial" @userClicked="goToPage('commercial')" />
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
  },
  methods: {
    goToPage(page) {
      if(page === 'commercial') {
        this.$router.push('/photo/commercial')
      } else if (page === 'prints') {
        this.$router.push('/photo/prints')
      }
    },
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
