var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Sooks',
    selectedVariant: 0,
    description: 'A pair of warm, fuzzy socks',
    link: 'https://goo.gl/s8ca8G',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: '../img/vmSocks-green-onWhite.jpg',
        variantQuantity: 10,
        variantOnSale: false
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: '../img/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0,
        variantOnSale: false
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0,
  },
  methods: {
    addToCart(){
      this.cart += 1
    },
    updateProduct(index){
      this.selectedVariant = index
    },
    removeFromCart(){
      this.cart -= 1
    }
  },
  computed: {
    title(){
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSale(){
      return this.variants[this.selectedVariant].variantOnSale
    }
  }
});
