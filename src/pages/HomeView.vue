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

    <!-- <div class="p-10 font-semibold text-lg">
      Selected Event:
      {{ selectedEvent ? selectedEvent.title : "No event selected" }}
    </div> -->
    <!-- <TrendingEvents @event-selected="selectedEvent = $event" /> -->
  </div>
</template>
