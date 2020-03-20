<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>&nbsp;|&nbsp;
      <router-link to="/about">About Us</router-link>
    </div>

    <!-- Router Outlet -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
