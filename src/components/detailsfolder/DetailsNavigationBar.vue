<script>
export default {
  name: "DetailsNavBar",
};
</script>

<template>
  <div>
    <!-- Hero section -->
    <header class="bg-white shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="text-xl font-semibold text-gray-900">rendezvous</div>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-600 hover:text-gray-900">Discover</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">About us</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">FAQs</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">Contact us</a>
          </nav>

          <!-- Auth Buttons -->
          <div class="flex items-center space-x-4">
            <button class="text-gray-600 hover:text-gray-900">Log in</button>
            <button
              class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              style="background-color: #783ead"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
