<script></script>

<template>
  <section
    class="px-16 py-28 flex flex-col md:flex-row items-start justify-between gap-12"
  >
    <!-- Left Section -->
    <div class="flex flex-col w-full md:w-1/3">
      <h2 class="text-3xl font-bold text-gray-900 leading-snug">
        Discover a World of Events <br />
        Tailored Just for You.
      </h2>

      <button class="mt-8 w-fit">
        <a
          href="https://rendeezvous-js.netlify.app/"
          class="bg-[#783EAD] text-white px-6 py-3 rounded-md font-medium hover:bg-[#662f97] transition"
        >
          View all events
        </a>
      </button>
    </div>

    <!-- Right Section -->
    <div class="grid grid-cols-2 gap-6 w-full md:w-2/3">
      <!-- Online Events -->
      <div class="relative rounded-lg overflow-hidden">
        <img
          src="../assets/images/online-event.png"
          alt="Online event"
          class="w-full h-48 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <h3 class="text-white text-lg font-semibold">Online Events</h3>
        </div>
      </div>

      <!-- Physical Events -->
      <div class="relative rounded-lg overflow-hidden">
        <img
          src="../assets/images/physical-event.png"
          alt="Physical event"
          class="w-full h-48 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <h3 class="text-white text-lg font-semibold">Physical Events</h3>
        </div>
      </div>

      <!-- Hybrid Events -->
      <div class="relative rounded-lg overflow-hidden col-span-2 w-2/3">
        <img
          src="../assets/images/hybrid-event.png"
          alt="Hybrid event"
          class="w-full h-48 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <h3 class="text-white text-lg font-semibold">Hybrid Events</h3>
        </div>
      </div>
    </div>
  </section>
</template>
