import Vue from "vue";
import VueRouter from "vue-router";
import StockTrader from "../views/StockTraderPage.vue";
import Portfolio from "../views/PortfolioPage";
import Stocks from "../views/StocksPage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StockTrader",
    component: StockTrader
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: Stocks
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
