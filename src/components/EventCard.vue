<script>
export default {
  name: "EventCard",
  props: {
    id: Number,
    title: String,
    date: String,
    description: String,
    image: String,
    link: String,
    price: String,
  },
  data() {
    return {};
  },
  methods: {
    // goToDetails() {
    //   this.$router.push({
    //     name: "details",
    //     params: { id: this.id },
    //   });
    // },
    goToDetails() {
      // Smooth scroll to top before navigating
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Delay slightly so scroll starts before route change
      setTimeout(() => {
        this.$router.push({
          name: "details",
          params: { id: this.id },
        });
      }, 300);
    },
  },
};
</script>

<template>
  <section>
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <!-- Image Section -->
      <div
        class="relative bg-gray-100 h-46 flex items-center justify-center pt-4"
      >
        <img :src="image" :alt="title" class="max-h-full object-contain" />
      </div>

      <!-- Card Content -->
      <div class="p-5">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <p class="text-sm text-gray-600">{{ date }}</p>
        <p class="mt-2 text-sm text-gray-700 line-clamp-3">{{ description }}</p>

        <div class="flex items-center gap-2 mt-3 cursor-pointer">
          <button
            class="inline-block text-sm font-medium text-indigo-600 hover:underline cursor-pointer"
            @click="goToDetails()"
          >
            View details
          </button>

          <!-- <router-link
            :to="{
              name: 'details',
              params: { id },
              query: { title, date, description, image, link },
            }"
            class="inline-block text-sm font-medium text-indigo-600 hover:underline"
          >
            View details
          </router-link> -->

          <img
            src="../assets/images/Arrow--up-right.png"
            alt="arrow icon"
            class="w-4 h-4"
          />
        </div>
      </div>
    </div>
  </section>
</template>
