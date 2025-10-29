<script>
import DetailsMain from "@/components/detailsfolder/DetailsMain.vue";
import DetailsNavigationBar from "@/components/detailsfolder/DetailsNavigationBar.vue";
export default {
  name: "DetailsPage",
  components: {
    DetailsNavigationBar,
    DetailsMain,
  },
};
</script>

<template>
  <div>
    <DetailsNavigationBar />
    <DetailsMain />
  </div>
</template>
