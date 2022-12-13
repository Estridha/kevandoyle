<template>
    <div class="container">
    <img class="image-link" :src="require(`@/assets/images/${fileName}`)">
    <div class="button-container">
        <BaseButton class="tertiary" :text="buttonText" @userClicked="goToPhotoPage()"
        />
    </div>
    </div>
</template>
  <script>
import BaseButton from './BaseButton.vue';

  export default {
    name: 'ImageLink',
    props: {
        buttonText: {
            type: String,
        },
        fileName: {
            type: String,
        }
    },
    components: { 
        BaseButton,
    },
    methods: {
    goToPhotoPage() {
        this.$router.push('/photo/commercial')
    },
  },
  };
  </script>
  
  <style lang="scss" scoped>
  
  .container {
  display: block;
  position: relative;
  text-align: center;
  width: min-content;
  margin: 1rem;

  .image-link {
    max-height: 25rem;
  }

  .button-container {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 45%;
  }
}
  </style>
  