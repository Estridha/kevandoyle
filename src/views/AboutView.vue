<template>
  <div class="about-container">
    <div class="page-section">
      <div class="content-container">
        <BaseH2 title="about"/>
        <img class="about-me-image" src="@/assets/images/about-me-image.jpg" alt="" />
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
          ><BaseButton class="primary" text="Explore my work"
        /></router-link>
      </div>
    </div>
    <div class="previous-brands-card">
      <BaseH2 title="Previous collaborations" />
      <div class="collabs-container">
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/burkard-studios.png"
          alt="Burkard Studios Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/specialized.png"
          alt="Specialized Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/nomadix.png"
          alt="Nomadix Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/avana.png"
          alt="Avana Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/enchantment-resort.png"
          alt="Enchantment Resort Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/patara.png"
          alt="Patara Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/wilderness-coffee.jpg"
          alt="Wilderness Coffee Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/krimson-klover.jpg"
          alt="Krimson Klover Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/outdoor-vitals.png"
          alt="Outdoor Vitals Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/fair-harbor.png"
          alt="Fair Harbor Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/nothing-new.png"
          alt="Nothing New Logo"
        />
      </div>
    </div>
    <div class="previous-brands-card">
      <BaseH2 title="Featured on" />
      <div class="collabs-container">
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/burkard-studios.png"
          alt="Burkard Studios Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/specialized.png"
          alt="Specialized Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/nomadix.png"
          alt="Nomadix Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/avana.png"
          alt="Avana Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/enchantment-resort.png"
          alt="Enchantment Resort Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/patara.png"
          alt="Patara Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/wilderness-coffee.jpg"
          alt="Wilderness Coffee Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/krimson-klover.jpg"
          alt="Krimson Klover Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/outdoor-vitals.png"
          alt="Outdoor Vitals Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/fair-harbor.png"
          alt="Fair Harbor Logo"
        />
        <img
          class="collabs-logo-image"
          src="@/assets/images/collabs/nothing-new.png"
          alt="Nothing New Logo"
        />
      </div>
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

.about-me-image {
  width: 100%;
}
.page-section {
  display: flex;
  margin-bottom: 2rem;

  .content-container {
    margin: 1rem 0;
  }

  .desc-container {
    .desc-text {
      text-align: left;
    }
  }
  .portrait-image {
    @media screen and (min-width: 1025px) {
      height: fit-content;
      width: 35%;
    }
  }
  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
}

.previous-brands-card {
  margin: 1rem;
}

.collabs-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .collabs-logo-image {
    height: 3.5rem;
    margin: 1rem;
  }
}
</style>
