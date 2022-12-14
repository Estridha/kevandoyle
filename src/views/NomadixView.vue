<template>
<div class="row">
<img v-for="image in images" :src="image.pathLong" />
</div>
</template>

<script>
export default {
  name: "NomadixView",
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    this.importAll(
      require.context("../assets/images/commercial/nomadix", true, /\.jpg$/)
    );
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
};
</script>

<style lang="scss" scoped>

.row {
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
}

img {
  max-width: 100vw;
  height: 20rem;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 845px) {
    padding: 0.5rem 0;
    height: auto;
    width: 100vw;
  }
}

/* responsive grid styling

.row {
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px;
  max-width: 100%;
}

img {
  flex: auto;
  height: 250px;
  min-width: 150px;
  margin: 0 8px 8px 0;
} */
</style>
