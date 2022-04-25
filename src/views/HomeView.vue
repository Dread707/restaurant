<template>
  <div>
    <the-navbar />
    <restaurant-cards />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";
import RestaurantCards from "@/components/restaurantCards/restaurantCards";

export default {
  name: "HomeView",

  components: {
    RestaurantCards,
    TheFooter,
    TheNavbar,
  },
};
</script>
