<script>
import EventCard from "./EventCard.vue";

export default {
  name: "MyComponent",
  components: { EventCard },

  data() {
    return {
      events: [
        {
          title: "ISWIS Live Show",
          date: "Sun, Oct 3rd • 6pm",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image: "/src/assets/images/card-one-image.png",
          link: "DetailsPage.html",
        },
        {
          title: "Lagos Jazz Festival",
          date: "Fri, Nov 10th • 8pm",
          description:
            "Experience a night of rhythm and melodies at the annual Lagos Jazz Fest. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image: "/src/assets/images/card-two.png",
          link: "DetailsPage.html",
        },
        {
          title: "Art & Culture Expo",
          date: "Sat, Dec 2nd • 4pm",
          description:
            "Discover creativity and culture at the Lagos Art & Culture Expo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image: "/src/assets/images/card-three.png",
          link: "DetailsPage.html",
        },
        {
          title: "Art & Culture Expo",
          date: "Sat, Dec 2nd • 4pm",
          description:
            "Discover creativity and culture at the Lagos Art & Culture Expo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          image: "/src/assets/images/card-three.png",
          link: "DetailsPage.html",
        },
      ],
    };
  },
  methods: {
    handleViewEvent(event) {
      this.$emit("event-selected", event);
    },
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
      <!-- <div class="flex flex-wrap gap-10"> -->
      <div class="flex gap-10">
        <EventCard
          v-for="(event, index) in events"
          :key="index"
          :title="event.title"
          :date="event.date"
          :description="event.description"
          :image="event.image"
          :link="event.link"
          @view-event="handleViewEvent"
        />
      </div>
    </div>
  </div>
</template>
