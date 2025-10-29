<script>
import Nav from "../components/bannerfolder/Nav.vue";
import Search from "../components/bannerfolder/Search.vue";
export default {
  components: {
    Nav,
    Search,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <div
      class="min-h-screen relative bg-[url(/banner-image.jpg)] overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <!-- Stage Lights Effect -->
      <div
        class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-20 pointer-events-none"
      ></div>
      <div
        class="absolute top-20 left-1/4 w-2 h-40 bg-white opacity-30 transform -skew-x-12 blur-sm"
      ></div>
      <div
        class="absolute top-20 left-1/3 w-2 h-40 bg-white opacity-25 transform -skew-x-12 blur-sm"
      ></div>
      <div
        class="absolute top-20 right-1/3 w-2 h-40 bg-white opacity-25 transform skew-x-12 blur-sm"
      ></div>
      <div
        class="absolute top-20 right-1/4 w-2 h-40 bg-white opacity-30 transform skew-x-12 blur-sm"
      ></div>

      <div>
        <Nav />
      </div>

      <!-- Main Content -->
      <Search />

      <!-- Crowd Silhouette Effect -->
      <div
        class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black from-opacity-60 to-transparent"
      ></div>
      <div class="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        <!-- Crowd silhouette using CSS shapes -->
        <div
          class="absolute bottom-0 left-0 w-8 h-12 bg-black opacity-60 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-6 w-6 h-16 bg-black opacity-50 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-10 w-7 h-14 bg-black opacity-55 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-16 w-5 h-18 bg-black opacity-50 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-20 w-8 h-12 bg-black opacity-60 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-26 w-6 h-16 bg-black opacity-50 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-32 w-7 h-14 bg-black opacity-55 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-36 w-5 h-18 bg-black opacity-50 rounded-t-full"
        ></div>

        <!-- Repeat pattern across screen -->
        <div
          class="absolute bottom-0 right-0 w-8 h-12 bg-black opacity-60 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 right-6 w-6 h-16 bg-black opacity-50 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 right-10 w-7 h-14 bg-black opacity-55 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 right-16 w-5 h-18 bg-black opacity-50 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 right-20 w-8 h-12 bg-black opacity-60 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 right-26 w-6 h-16 bg-black opacity-50 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 right-32 w-7 h-14 bg-black opacity-55 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 right-36 w-5 h-18 bg-black opacity-50 rounded-t-full"
        ></div>

        <!-- Center crowd -->
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-black opacity-60 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-6 w-6 h-14 bg-black opacity-50 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-1/2 transform translate-x-2 w-7 h-18 bg-black opacity-55 rounded-t-full"
        ></div>
        <div
          class="absolute bottom-0 left-1/2 transform translate-x-8 w-5 h-12 bg-black opacity-50 rounded-t-full"
        ></div>
      </div>
    </div>
  </section>
</template>
