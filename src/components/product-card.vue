<template>
  <a 
    class="c-product-card" 
    :href="href"
  >
    <span 
      v-if="sale != null" 
      id="c-span-top"
    >
      {{ parseInt(((sale / listed) * (-100)) + 100) }}% off
    </span>
      <img 
        class="c-product-card__image" 
        :src="imageUrl"
      /> 
      <div 
        v-if="sale != null" 
        id="c-span-bottom-is-if"
      > 
        <span>
          R$ {{ parseInt(sale) }} 
        </span>
        <span>
          R$ {{ parseInt(listed) }}
        </span> 
      </div>
      <span 
        v-else 
        id="c-span-bottom-is-else"
      >
        R$ {{ parseInt(listed) }}
      </span>
  </a>
</template>

<script>
  import { getImageUrl, IMAGE_PRESETS } from '@/tools/get-image-url'

  export default {
    props: {
      imageId: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      },
        listed: {
        type: Number,
        required: true
      }, 
       sale: {
        type: Number,
        required: false
      },      
    },
    data() {
      return {
        imageUrl: getImageUrl(this.imageId, IMAGE_PRESETS.product.card)
      }
    },
    computed: {
      href() {
        return `https://www.enjoei.com.br/p/${this.path}`
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-product-card {
    position: relative;
    height: 200px;
    
  }
  .c-product-card__image {
    border-radius: 2%;
  }  
  
  a.c-product-card #c-span-top, a.c-product-card #c-span-bottom-is-else, a.c-product-card #c-span-bottom-is-if  {
    border-radius: 10%;
    padding: 5px;
    font-size: 0.7em;
  }

  span#c-span-top{
    position: absolute;
    top: 2px;
    right: 2px;
    background-color: var(--color-pink);
    color: var(--color-white);
  }
    
  span+span{
    color: var(--color-gray-4);
    text-decoration: line-through;
  }

  #c-span-bottom-is-else{
    color: var(--color-gray-5);
    font-weight: var(--font-weight-semi-bold);
  }
  
  #c-span-bottom-is-if, #c-span-bottom-is-else  {
    position: absolute;
    bottom: 2px;
    left: 2px;
    background-color: var(--color-white);
  }

  @media (max-width: 752px) {
    .c-product-card__image, .c-product-card {
      width: 160px;
      height: 160px;
    }
  }
</style>
