<template>
  <div class="commercial-view">
    <ImageLink v-for="company in companies" :fileName="company.photoSrc" :buttonText="company.name" @click="goToPage(company.id)" />
  </div>
</template>

<script>
import ImageLink from "@/components/ImageLink.vue";

export default {
  name: "CommercialView",
  data() {
      return {
        companies: [
          { id: 'nomadix', name: "Nomadix", photoSrc: "nomadix.jpg" },
          { id: 'specialized', name: "Specialized", photoSrc: "specialized.jpg" },
          { id: 'patara', name: "Patara", photoSrc: "patara.jpg" },
          { id: 'avana', name: "Avana", photoSrc: "avana.jpg" },
          { id: 'wildernesscoffee' , name: "Wilderness Coffee", photoSrc: "wilderness-coffee.jpg" },
          { id: 'outdoorvitals', name: "Outdoor Vitals", photoSrc: "outdoor-vitals.jpg" },
        ],
      };
    },
  components: {
    ImageLink,
  },
  methods: {
    goToPage(page) {
      if (page === "nomadix") {
        this.$router.push("/photo/commercial/nomadix");
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.commercial-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
