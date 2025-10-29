<script>
export default {
  name: "EventCard",
  props: {
    title: String,
    date: String,
    description: String,
    image: String,
    link: String,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <!-- Image Section -->
      <div class="relative bg-orange-500 h-48 flex items-center justify-center">
        <img :src="image" :alt="title" class="object-cover h-full w-full" />
      </div>

      <!-- Card Content -->
      <div class="p-5">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <p class="text-sm text-gray-600">{{ date }}</p>
        <p class="mt-2 text-sm text-gray-700">{{ description }}</p>

        <div class="flex items-center gap-2 mt-3 cursor-pointer">
          <button
            class="inline-block text-sm font-medium text-indigo-600 hover:underline"
            @click="
              $emit('view-event', { title, date, description, image, link })
            "
          >
            View details
          </button>
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
