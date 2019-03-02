var app = new Vue({
  el: '#app',
  data: {
    product: 'Sooks',
    image: '../img/vmSocks-green-onWhite.jpg',
    description: 'A pair of warm, fuzzy socks',
    inventory: 10,
    link: 'https://goo.gl/s8ca8G',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: '../img/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: '../img/vmSocks-blue-onWhite.jpg'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0
  },
  methods: {
    addToCart(){
      this.cart += 1
    },
    updateProduct(variantImage){
      this.image = variantImage
    },
    removeFromCart(){
      this.cart -= 1
    }
  }
});
