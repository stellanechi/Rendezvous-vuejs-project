<script>
import EventCard from "./EventCard.vue";

export default {
  name: "MyComponent",
  components: { EventCard },

  data() {
    return {
      baseUrl: "https://fakestoreapi.com/products",
      events: [],
    };
  },
  methods: {
    handleViewEvent(event) {
      this.$emit("event-selected", event);
    },
    async fetchEvents(limit = null) {
      try {
        const response = await fetch(this.baseUrl);
        const data = await response.json();

        // this.events = data.map((item) => ({
        this.events = (limit ? data.slice(0, limit) : data).map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image,
          price: `$${item.price}`,
          category: item.category,
        }));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
  },

  mounted() {
    this.fetchEvents(8);
  },
};
</script>

<template>
  <div class="px-16">
    <div class="flex flex-row justify-between items-center py-16">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Trending events</h2>
      </div>
      <div class="flex items-center cursor-pointer">
        <p class="text-gray-600 text-sm mr-2 font-normal">
          View all trending events
        </p>
        <img src="../assets/images/Arrow--up-right.png" alt="top arrow" />
      </div>
    </div>

    <!-- Card section -->
    <div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <EventCard
          v-for="(event, index) in events"
          :key="index"
          :id="event.id"
          :title="event.title"
          :date="event.date"
          :description="event.description"
          :image="event.image"
          :link="event.link"
        />
      </div>
    </div>
  </div>
</template>
