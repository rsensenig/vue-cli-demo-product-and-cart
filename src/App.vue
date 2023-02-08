<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" />

  <SidebarView 
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
  // the @ symbol references the source folder
  import SidebarView from '@/components/SidebarView.vue'
  import food from './food.json'

  // options object here
  // any JavaScript functions or data will get set on this object
  export default {
    // components object of components you want to use in the template above
    components: {
      SidebarView
    },
    data () {
      return {
        showSidebar: false,
        inventory: food,
        cart: {}
      }
    },
    computed: {
      totalQuantity() {
        return Object.values(this.cart).reduce((acc, curr) => {
          return acc + curr;
        }, 0)
      }
    },
    methods: {
      addToCart(name, index) {
        if(!this.cart[name]) this.cart[name] = 0;
        // receive name and number of item
        this.cart[name] += this.inventory[index].quantity;
        this.inventory[index].quantity = 0;
      },
      toggleSidebar() {
        this.showSidebar = !this.showSidebar;
      },
      removeItem(name) {
        delete this.cart[name];
      }
    }
  }
</script>
