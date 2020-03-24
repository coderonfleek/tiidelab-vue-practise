<template>
  <div>
    <p>
      {{ sitename }}
    </p>
    <h1>This is the {{ page }} page</h1>
  </div>
</template>

<script>
export default {
  computed: {
    sitename() {
      return this.$store.state.siteName;
    },
    page() {
      return this.$store.state.pageName;
    }
  }
};
</script>
