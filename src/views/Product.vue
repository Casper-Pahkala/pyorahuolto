<template>
  <div class="product-info-container">
    <div class="product-image-container" id="product-image-container">

      <v-carousel
        continuous
        :show-arrows="product.images.length > 1 ? 'hover' : false"
        theme="dark"
        class="carousel"
        v-model="carouselIndex"
      >
        <v-carousel-item
          v-for="(item, index) in product.images"
          :key="'carousel-' + index"
          :src="item"
          class="product-image"
          style="position: relative;"
        >
          <v-btn
            class="close-btn"
            flat
            icon="mdi-fullscreen"
            elevation="10"
            @click="openFullscreen()"
            color="white"
          >
          </v-btn>
        </v-carousel-item>
      </v-carousel>
      <v-btn
        class="close-btn"
        flat
        icon="mdi-close"
        elevation="8"
        @click="closeFullscreen()"
        v-if="fullscreen"
      >
      </v-btn>
    </div>

    <div class="main-info-container">
      <h2 class="product-name pb-3">
        {{ product.name }}
      </h2>

      <div v-if="!product.on_sale" class="price-container">
        <div class="price discount">
          <span class="euros">
            {{ getEuros(product.offer_price) }}
          </span>
          <span class="cents">
            {{ getCents(product.offer_price) }}
          </span>
          <span class="euro-icon">€</span>
        </div>


        <div class="price original">
          <span class="text">{{ $t('Alkup.') }}</span>
          <span class="euros">
            {{ getEuros(product.original_price) }}
          </span>
          <span class="cents">
            {{ getCents(product.original_price) }}
          </span>
          <span class="euro-icon">€</span>
        </div>
      </div>

      <div class="price original" v-else>
        <span class="euros">
          {{ getEuros(product.original_price) }}
        </span>
        <span class="cents">
          {{ getCents(product.original_price) }}
        </span>
        <span class="euro-icon">€</span>
      </div>

      <div class="info-container">
        <h3>Lisätiedot:</h3>

        <div
          v-for="(value, key) in product.info"
          :key="key"
          class="info-wrapper"
        >
          <div class="info-key">{{ key }}:</div>

          <div class="info-value">{{ value }}</div>

        </div>
      </div>
    </div>
  </div>

  <div class="technical-info-container">

    <h2>
      Tekniset tiedot
    </h2>

    <v-divider class="mt-5 mb-5 border-opacity-50"></v-divider>
    <div class="technical-info">
      <div
        v-for="(value, key) in product.technical_info"
        :key="key"
        class="info-wrapper"
      >
        <v-icon class="info-icon">mdi-circle</v-icon>
        <div class="info-key">{{ key }}:</div>

        <div class="info-value">{{ value }}</div>

      </div>
    </div>

  </div>

  <v-dialog
      id="fullscreenContainer"
      fullscreen
      v-model="fullscreen"
      style="background-color: #141414;"
    >
      <v-window
        class="fullscreen-carousel"
        v-model="carouselIndex"
      >
        <v-window-item
          v-for="(item, index) in product.images"
          :key="'window-' + index"
          :value="index"
        >
          <v-img
            :src="item"
            class="image"
            contain
          >

          </v-img>
        </v-window-item>
      </v-window>

        <v-btn
          class="close-btn"
          flat
          icon="mdi-close"
          elevation="8"
          @click="fullscreen = false"
        >
        </v-btn>
    </v-dialog>

</template>

<script setup>
import { useAppStore } from '@/store/app';
import full from 'core-js/full';
import { ref } from 'vue'
window.scrollTo(0, 0);

const store = useAppStore();
const product = store.offers[0];
const fullscreen = ref(false);
const carouselIndex = ref(0);

function getEuros(price) {
  const str = price.toString();
  const euros = str.slice(0, -2);
  return  euros;
}

function getCents(price) {
  const str = price.toString();
  const cents = str.slice(-2);
  return  cents;
}

function openFullscreen() {
  fullscreen.value = true;
  setTimeout(() => {
    document.querySelector('#fullscreenContainer').requestFullscreen();
  }, 100);
}

function closeFullscreen() {
  fullscreen.value = false;
  setTimeout(() => {
    document.exitFullscreen();
  }, 100);
}


document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        // The user has exited fullscreen mode
        fullscreen.value = false;
    }
});
</script>

<style scoped>

.fullscreen-carousel .image {
      width: 100vw;
      height: 100vh;
    }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
  }
  .carousel {
    height: 100% !important;
    position: relative;
  }
  .product-info-container {
    display: flex;
    margin-top: 60px;
    gap: 30px;
  }

  .product-image-container {
    width: 600px;
    height: 400px;
    /* position: relative; */
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .main-info-container {
    width: 400px;
    margin-top: 20px;
  }

  .product-name {
    font-size: 25px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .info-container h3 {
    font-weight: 500;
    font-size: 18px;
    margin-top: 20px;
  }

  .info-key {
    /* font-weight: 500; */
    width: 200px;
  }

  .info-wrapper {
    display: flex;
    margin-top: 8px;
    /* gap: 20px; */
    align-items: center;
  }

  .info-value {
    /* text-align: ; */
  }

  .price.original {
    font-size: 24px;
  }

  .price.original .cents {
    font-size: 17px;
  }

  .technical-info-container {
    margin-top: 55px;
  }

  .technical-info {
    /* margin-top: 30px; */
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .technical-info .info-key {
    font-weight: 500;
    font-size: 18px;
  }

  .technical-info .info-value {
    font-size: 18px;
  }

  .info-icon {
    font-size: 6px;
    padding: 10px 15px 10px 5px;
  }

  .fullscreen-carousel {
      height: 100% !important;
    }

  @media (max-width: 1199px) {
    .product-info-container {
      flex-direction: column;
      margin-top: 0;
      gap: 0px;
    }

    .main-info-container {
      width: 100%;
    }

    .product-image-container {
      width: 100%;
    }

    .technical-info .info-key {
      font-size: 16px;
      width: auto;
      padding-right: 10px;
    }

    .technical-info .info-value {
      font-size: 16px;
    }
  }
</style>

<style>
  .v-carousel__controls {
    /* pointer-events: none; */
  }
</style>
