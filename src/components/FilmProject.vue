<template>
    <div class="main-container">
      <div class="project-desc">
        <BaseH2 :title=title />
      </div>
      <div class="project-video">
        <iframe
          :src="filmSrc + '?controls=0&modestbranding=1'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  import BaseH2 from './BaseH2.vue';
  export default {
    name: "FilmProject",
   props: {
      title: {
        type: String,
      },
      filmSrc: {
        type: String,
      }
    },
    components: {
      BaseH2,
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  .main-container {
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }

  .project-desc {
    @media screen and (min-width: 1025px) {
      width: 50%;
  }
  }

  .project-video {
    position: relative;
    padding-bottom: 28.123%; /* 16:9 */
    height: 0;
    width: 50%;

    @media screen and (max-width: 1025px) {
    flex-direction: column;
    padding-bottom: 56.25%;
    width: 100%;
  }

    

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }}
  </style>
  