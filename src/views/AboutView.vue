<template>
  <div class="about-container">
    <BaseH2 class="page-title" title="About Me" />
    <img
      class="portrait-image"
      src="@/assets/images/portrait.jpg"
      alt="portrait"
    />
    <div class="content-container">
    <BaseParagraph
      text="Originally from Los Angeles, Kevan Doyle has worked on documentaries,
          multi-media development, and behind-the-scenes creation and
          implementation of new television shows and movies. While traveling the
          world to pursue adventure film and photography, he supported product
          brand development and promotion as well as real estate advertising for
          companies in New York, Europe, Dominican Republic and Los Angeles."
    />
    <BaseParagraph
      text="Under the tutelage of famed adventure photographer, director, and
          explorer Chris Burkard, he has gained an understanding and
          appreciation of what it takes to get the perfect outdoor shot.
          Combining a solid baseline of knowledge from assisting Chris with
          polished filmmaking skills, Kevan continues to deliver an exceptional
          product to his clients. Experienced in writing, directing and editing,
          he brings passion and creative engagement to every project. Kevan
          Doyle delivers quality videography, exceptional photography and
          experienced drone work to any project."
    />
    <BaseParagraph
      text="Please inquire about his various services by email
          (kevandoylefilms@gmail.com) or by filling out the contact form. Feel
          free to check out his instagram @kevandoyle_ to see recent work. Kevan
          Doyle is here to fulfill all your content and filming needs."
    />
    <router-link to="/work"
      ><BaseButton class="primary" text="See my work"
    /></router-link>
  </div> 
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseH2 from "@/components/BaseH2.vue";

export default {
  name: "AboutPage",
  components: {
    BaseButton,
    BaseH2,
    BaseParagraph,
  },
};
</script>

<style lang="scss" scoped>

.page-title {
  @media screen and (min-width: 768px) {
      display: none;
    }
}
.about-container {
  display: flex;

  .content-container {
      margin: 1rem 0;
    }

  .desc-container {
    .desc-text {
      text-align: left;
    }
  }
  .portrait-image {
    @media screen and (min-width: 768px) {
      width: 35%;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    
  }
}
</style>
