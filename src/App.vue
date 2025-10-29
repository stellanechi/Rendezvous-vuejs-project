<script>
import Footer from "./components/Footer.vue";

export default {
  name: "MyComponent",

  components: {
    Footer,
  },
  data() {
    return {
      selectedEvent: null,
    };
  },
};
</script>

<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>
