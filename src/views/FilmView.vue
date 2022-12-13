<template>
  <div class="film-view-container">
    <BaseH2 title="Film"/>
    <div class="reel-container">
      <iframe
        src="https://www.youtube.com/embed/OPIdmPPCnyw?controls=0&modestbranding=1&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <FilmProject
    v-for="film in films"
      :title="film.title"
      :filmSrc="film.src"
    />
  </div>

</template>

<script>
import BaseH2 from "@/components/BaseH2.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import FilmProject from "@/components/FilmProject.vue";
export default {
  name: "FilmView",
  data() {
    return {
      films: [
      { id: 1, title: "Nomadix", src: "https://www.youtube.com/embed/EgugmqIlqys"},
        { id: 2, title: "Cultural Inquita, environmental piece", src: "https://www.youtube.com/embed/PyNNyW1ZHCQ"},
        { id: 3, title: "FitBit", src: "https://www.youtube.com/embed/zyvCuT8m8Ew"},
        { id: 5, title: "Risen", src: "https://www.youtube.com/embed/PkJoMoH9AAg"},
        { id: 6, title: "Avana", src: "https://www.youtube.com/embed/HrwKpPLBfqc"},
        { id: 7, title: "VISCOUS CBD", src: "https://www.youtube.com/embed/VwTwxvaaKl8"},
        { id: 8, title: "Desert Daze (A Live DJ set for a musical artist)", src: "https://www.youtube.com/embed/pXNZLC23x4w"},
        { id: 9, title: "Patara", src: "https://www.youtube.com/embed/jFTspBPb590"},
        { id: 10, title: "Wilderness Coffee", src: "https://www.youtube.com/embed/0byh2ezVhXo"},
        { id: 11, title: "SEVEN CBD", src: "https://www.youtube.com/embed/MQkthvjDXRk"},
        { id: 12, title: "Fair Harbor", src: "https://www.youtube.com/embed/ke4d6rI0a00"},
        { id: 13, title: "SEVEN CBD", src: "https://www.youtube.com/embed/AHCsh52_pFk"},
        { id: 14, title: "Short film", src: "https://www.youtube.com/embed/HWxIURyW_lY"},
      ],
    };
  },
  components: {
    BaseH2,
    BaseParagraph,
    FilmProject,
  },
};
</script>

<style lang="scss" scoped>
.reel-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
}
</style>
