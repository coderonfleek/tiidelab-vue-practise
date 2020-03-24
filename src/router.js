import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import ProductList from "./views/ProductList";
import Product from "./views/Product";

Vue.use(VueRouter);

//1. Define routes
const myRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: AboutUs
  },
  {
    path: "/products",
    component: ProductList
  },
  {
    path: "/productpage",
    component: Product
  }
];

//2.1 Define a Router Instance

const router = new VueRouter({
  mode: "history", //HTML 5 History API
  routes: myRoutes
});

//2.2 Export router
export default router;
