<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div>
    <div
      class="relative z-10 flex items-center justify-center min-h-screen px-6 pt-22"
    >
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-white space-y-8">
          <p class="text-2xl md:text-3xl lg:text-3xl font-bold">
            Ready to Rock? Discover the
            <span>Hottest Events</span>
            Here – Your Calendar's New Best Friend!
          </p>
        </div>

        <!-- Right Content - Search Box -->
        <div class="w-full max-w-4xl mx-auto">
          <div
            class="flex items-center bg-white rounded-xl shadow-4xl px-6 py-8 space-x-4 gap-4"
          >
            <!-- Search Icon + Input -->
            <div class="flex items-center flex-grow space-x-3">
              <svg
                class="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for an event"
                class="flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <!-- Divider -->
            <div class="h-6 w-px bg-gray-300"></div>

            <!-- Categories Dropdown -->
            <div class="relative">
              <select
                class="appearance-none bg-transparent pr-8 focus:outline-none text-gray-700 cursor-pointer"
              >
                <option>Categories</option>
                <option>Concerts</option>
                <option>Sports</option>
                <option>Theater</option>
                <option>Comedy</option>
                <option>Festivals</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center pointer-events-none"
              >
                <svg
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <!-- Search Button -->
            <button
              class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
