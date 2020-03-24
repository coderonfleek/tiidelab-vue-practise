<template>
  <div>
    <ul>
      <li v-for="product in allProducts" :key="product.id">
        <a class="link" @click="goToProduct(product)">{{ product.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    allProducts() {
      return this.$store.state.products;
    }
  },
  methods: {
    goToProduct(product) {
      this.$store.commit("setSelectedProductValue", product);

      this.$router.push({ path: "/productpage" });
    }
  }
};
</script>

<style scoped>
.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
