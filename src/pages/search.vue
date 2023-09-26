<template>
  <div >
    <vHeader></vHeader>
    <div>
      <div 
        class="conteudoMostruario"  
        v-if="products.length == 0 && dimensionLayout > 1162"
      > 
        <div  
          v-for="n in 15" 
          :key="n"
        >
        </div>         
      </div>
      <div 
        class="conteudoMostruario"  
        v-else-if="products.length == 0 && dimensionLayout <= 1161"
      > 
        <div  
          v-for="n in 12" 
          :key="n"
        >
        </div>         
      </div>
      <div 
        class="conteudoMostruario"
      >
        <VproductCard 
          v-for="product in products"
          :key="product.id" 
          :imageId=product.image_public_id 
          :title=product.title 
          :listed=product.price.listed 
          :sale=product.price.sale 
          :path='product.slug + - + product.id'
        >
        </VproductCard>    
      </div>       
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import VproductCard from "@/components/product-card.vue";   
  import vHeader from '@/components/header-default.vue'

  export default {

    pageTitle() {
      return 'Fabricio'
    },

    components: {
    vHeader,
    VproductCard

    }, 
    
    data() {
      return {
        products: [],
        dimensionLayout: 0
      }
    },

    created() {
      var list = []

      axios.get('/api/v5/users/enjoei-pro/products/liked?page=1&query=camisa').then(function (params) {
        params['data']['products'].forEach(function (element) {
          list.push(element)         
        });
      })

      this.products = list
      this.dimensionLayout = document.documentElement.clientWidth  
    },
  }
</script>

<style scoped>  
  div.conteudoMostruario {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 24px;
    margin: 24px 0 24px 0;
    justify-content: center;
  }

   div.conteudoMostruario div {
    height: 200px;
    width: 200px;    
    background-color: var(--color-gray-1); 
    border-radius: 3%;
  } 

  @media (max-width: 752px) {
    div.conteudoMostruario {
      column-gap: 12px;
      row-gap: 12px;    
    }

    div.conteudoMostruario div {
      height: 160px;
      width: 160px;    
    }
    div.conteudoMostruario {
      margin: 12px 0 12px 0;
    }
    
  }
</style>
