<script>
import Banner from "../components/Banner.vue";
import Discover from "../components/Discover.vue";
import TrendingEvents from "../components/TrendingEvents.vue";

export default {
  components: {
    Banner,
    TrendingEvents,
    Discover,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <Banner />
    <TrendingEvents />
    <Discover />
  </div>
</template>
