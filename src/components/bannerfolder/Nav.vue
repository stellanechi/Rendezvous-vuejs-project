<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div>
    <!-- Navigation -->
    <nav class="relative z-20 px-6 pt-6">
      <div class="max-w-6xl mx-auto">
        <div
          class="bg-white bg-opacity-90 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border border-white border-opacity-20"
        >
          <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="text-2xl font-bold text-gray-800">rendezvous</div>

            <!-- Navigation Links -->
            <div class="hidden md:flex items-center space-x-8">
              <a
                href="#"
                class="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                >Discover</a
              >
              <a
                href="#"
                class="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                >About us</a
              >
              <a
                href="#"
                class="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                >FAQs</a
              >
              <a
                href="#"
                class="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                >Contact us</a
              >
            </div>

            <!-- Auth Buttons -->
            <div class="flex items-center space-x-4">
              <button
                class="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                Log In
              </button>
              <button
                class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-lg"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
