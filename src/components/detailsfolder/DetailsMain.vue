<script>
export default {
  name: "DetailsMain",
  data() {
    return {
      event: null,
      baseUrl: "https://fakestoreapi.com/products",
    };
  },

  //   mounted() {
  //     this.event = {
  //       id: this.$route.params.id,
  //       title: this.$route.query.title,
  //       description: this.$route.query.description,
  //       image: this.$route.query.image,
  //       price: this.$route.query.price,
  //       category: this.$route.query.category,
  //     };
  //   },
  async mounted() {
    const eventId = this.$route.params.id;
    if (eventId) {
      try {
        const response = await fetch(`${this.baseUrl}/${eventId}`);
        const data = await response.json();
        this.event = {
          id: data.id,
          title: data.title,
          description: data.description,
          image: data.image,
          price: `$${data.price}`,
          category: data.category,
        };
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    }
  },
};
</script>

<template>
  <div>
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 py-8">
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="relative h-90 bg-gray-200">
          <img
            :src="event ? event.image : ''"
            :alt="event ? event.title : ''"
            class="max-h-full object-contain absolute inset-0 mx-auto my-0 py-8"
          />
        </div>

        <!-- Event Details -->
        <div class="p-8">
          <h1 class="text-2xl font-semibold text-gray-900 mb-6">
            {{ event ? event.title : "" }}
            <!-- I said what I said Live Show -->
          </h1>

          <div class="space-y-4">
            <!-- Date and Time -->
            <div class="flex items-center text-gray-600">
              <svg
                class="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span>Sunday, October 1st, 2023</span>
              <svg
                class="w-4 h-4 ml-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>6PM</span>
            </div>

            <!-- Location -->
            <div class="flex items-start text-gray-600">
              <svg
                class="w-5 h-5 mr-3 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span
                >Race Course, 8/9 Marina, Onikan, Lagos Lagos, Joja Force Rd,
                Lagos Island 102273, Lagos</span
              >
            </div>

            <!-- Host -->
            <div class="flex items-center text-gray-600">
              <svg
                class="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span>FK Jals</span>
            </div>
          </div>

          <!-- Contact Organizers Section -->
          <div class="mt-8 pt-6 border-t border-gray-100">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900">
                Contact Organizers
              </h3>
              <div class="flex items-center space-x-3">
                <!-- Email -->
                <a
                  href="#"
                  class="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style="background-color: #783ead"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <!-- Twitter -->
                <a
                  href="#"
                  class="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style="background-color: #783ead"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    ></path>
                  </svg>
                </a>
                <!-- Instagram -->
                <a
                  href="#"
                  class="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style="background-color: #783ead"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    ></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- map section -->
        <div class="mx-auto e rounded-lg shadow-sm overflow-hidden">
          <div class="flex flex-col lg:flex-row">
            <!-- Left Column - Event Description -->
            <div class="lg:w-1/2 p-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">
                Event description
              </h2>
              <div class="leading-relaxed space-y-4">
                <p class="text-gray-700">
                  {{ event ? event.description : "" }}
                </p>
              </div>

              <!-- Ticket Pricing Section -->
              <div class="mt-12">
                <h3 class="text-xl font-bold text-gray-900 mb-6">
                  Product Pricing
                </h3>

                <div class="flex flex-col sm:flex-row gap-8 mb-8">
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">
                      Single
                    </h4>
                    <p class="text-2xl font-bold text-custom-purple">
                      {{ event ? event.price : "" }}
                    </p>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">
                      Pair
                    </h4>
                    <p class="text-2xl font-bold text-custom-purple">
                      NGN 9,000
                    </p>
                  </div>
                </div>

                <button
                  class="bg-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Buy now
                </button>
              </div>
            </div>

            <!-- Right Column - Directions and Map -->
            <div class="lg:w-1/2 border-l border-gray-200">
              <div class="p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  Directions
                </h2>

                <!-- Map Container -->
                <div class="h-96 bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8267663805334!2d7.0134!3d4.8156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d2dcf9999999%3A0x2222222222222222!2sPort%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1632412345678!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
