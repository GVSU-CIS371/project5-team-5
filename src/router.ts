import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import ClothingView from "./components/Clothing.vue";
import ElectronicsView from "./components/Electronics.vue";
import GroceriesView from "./components/Groceries.vue";
import BestSellerView from "./components/BestSeller.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // Clothing route
  {
    path: "/clothing",
    name: "clothing",
    component: ClothingView,
  },
  // Electronics route
  {
    path: "/electronics",
    name: "electronics",
    component: ElectronicsView,
  },
  // Groceries route
  {
    path: "/groceries",
    name: "groceries",
    component: GroceriesView,
  },
  // Best Seller route
  {
    path: "/bestseller",
    name: "bestseller",
    component: BestSellerView,
  },
  
  {
    path: "/:catchAll(.*)",
    redirect: '/',
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

