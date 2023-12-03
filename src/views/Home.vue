<template>

  <v-carousel
    cycle
    continuous
    hide-delimiters
    class="main-carousel elevation-10"
    interval="3500"
    theme="dark"
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(image, index) in heroImages"
      :key="index"
      :src="'/' + image"
      cover
    >
    </v-carousel-item>
  </v-carousel>

  <div class="offers">
    <div class="home-title-container">
      <h2 class="title">
        {{ $t('Tarjoukset') }}
      </h2>
      <span class="show-all">{{ $t('Näytä kaikki') }}</span>
    </div>

    <div class="slide-group-container">
      <div class="slide-group" ref="offerSlideGroup">
        <v-card
          v-for="(item, index) in store.offers"
          :key="index"
          class="product-card"
          elevation="8"
          @click="openProduct(item)"
        >
          <img :src="item.src" class="mini-img">
          <h3 class="name">
            {{ item.name }}
          </h3>

          <div class="price-container">
            <div class="price discount">
              <span class="euros">
                {{ getEuros(item.offer_price) }}
              </span>
              <span class="cents">
                {{ getCents(item.offer_price) }}
              </span>
              <span class="euro-icon">€</span>
            </div>


            <div class="price original">
              <span class="text">{{ $t('Alkup.') }}</span>
              <span class="euros">
                {{ getEuros(item.original_price) }}
              </span>
              <span class="cents">
                {{ getCents(item.original_price) }}
              </span>
              <span class="euro-icon">€</span>
            </div>
          </div>
        </v-card>
      </div>

      <v-btn
        class="prev-btn"
        icon="mdi-chevron-left"
        color="grey-darken-3"
        @click="slideLeft(offerSlideGroup)"
      >
      </v-btn>

      <v-btn
        class="next-btn"
        icon="mdi-chevron-right"
        color="grey-darken-3"
        @click="slideRight(offerSlideGroup)"
      >
      </v-btn>
    </div>
  </div>

  <div class="popular">
    <div class="home-title-container">
      <h2 class="title">
        {{ $t('Suositut') }}
      </h2>
      <span class="show-all">{{ $t('Näytä kaikki') }}</span>
    </div>
    <div class="slide-group-container">
      <div class="slide-group" ref="popularSlideGroup">
        <v-card
          v-for="(item, index) in store.offers"
          :key="index"
          class="product-card"
          elevation="8"
          @click="openProduct(item)"
        >
          <img :src="item.src" class="mini-img">
          <h3 class="name">
            {{ item.name }}
          </h3>

          <div class="price-container">
            <div class="price discount">
              <span class="euros">
                {{ getEuros(item.offer_price) }}
              </span>
              <span class="cents">
                {{ getCents(item.offer_price) }}
              </span>
              <span class="euro-icon">€</span>
            </div>


            <div class="price original">
              <span class="text">{{ $t('Alkup.') }}</span>
              <span class="euros">
                {{ getEuros(item.original_price) }}
              </span>
              <span class="cents">
                {{ getCents(item.original_price) }}
              </span>
              <span class="euro-icon">€</span>
            </div>
          </div>
        </v-card>
      </div>
      <v-btn
        class="prev-btn"
        icon="mdi-chevron-left"
        color="grey-darken-3"
        @click="slideLeft(popularSlideGroup)"
      >
      </v-btn>

      <v-btn
        class="next-btn"
        icon="mdi-chevron-right"
        color="grey-darken-3"
        @click="slideRight(popularSlideGroup)"
      >
      </v-btn>
    </div>
  </div>


</template>

<script setup>

import { ref } from 'vue'
import { useAppStore } from '@/store/app';
import { useRouter, useRoute } from 'vue-router';

window.scrollTo(0, 0);

const router = useRouter();
const route = useRoute();

const store = useAppStore();
const popularSlideGroup = ref(null);
const offerSlideGroup = ref(null);

const heroImages = [
  'bike1.jpg',
  'bike2.jpg',
  'bike3.jpg'
];



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

function slideLeft(slideGroup) {
  const scrollAmount = 500; // Adjust this value as needed
  if (slideGroup) {
    slideGroup.scrollLeft -= scrollAmount;
  }
}

function slideRight(slideGroup) {
  const scrollAmount = 500;
  if (slideGroup) {
    slideGroup.scrollLeft += scrollAmount;
  }
}

function openProduct() {
  router.push('/product')
  store.tab = 'product';
}
</script>

<style scoped>

  .main-carousel {
    border-radius: 10px;
    margin-top: 20px;
  }

  .home-title-container {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .show-all {
    cursor: pointer;
  }

  .show-all:hover {
    text-decoration: underline;
  }

  .mini-img {
    height: 140px;
    width: 100%;
    object-fit: contain;
  }

  .product-card {
    width: 250px;
    cursor: pointer;
    flex: 0 0 auto;
    transition: all 0.3s ease;
    margin: 30px 0 30px 25px;
    padding: 10px;
  }

  .product-card:hover {
    transform: scale(1.1);
  }

  .product-card .name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em;
    line-height: 1.5em;
    margin: 0;
    font-weight: 500;
  }


  .slide-group {
    display: flex;
    width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    margin-left: -20px;
  }

  .slide-group-container {
    position: relative;
  }

  .slide-group-container .next-btn {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    opacity: 0;
  }

  .slide-group-container .prev-btn {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    opacity: 0;
  }

  .slide-group-container:hover .prev-btn,
  .slide-group-container:hover .next-btn {
    opacity: 1;

  }

  @media (max-width: 1199px) {
    .main-carousel {
      width: 100%;
      height: 350px !important;
    }

    .slide-group {
      overflow: auto;
      margin-left: -10px;
    }

    .slide-group-container .prev-btn,
    .slide-group-container .next-btn {
      display: none;
    }

    .product-card {
      width: 200px;
      margin: 20px 0 20px 15px;
    }



    .product-card .name {
      font-size: 15px;
    }

    .title {
      font-size: 20px;
    }

    .show-all {
      font-size: 15px;
      margin-top: 4px;
    }
  }
</style>
