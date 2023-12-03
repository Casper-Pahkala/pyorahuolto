<template>
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item
        class="drawer-item"
        :active="false"
        @click="changeTab('')"
      >
        {{ $t('Etusivu') }}
      </v-list-item>

      <v-divider class="ml-4 mr-4 border-opacity-20" :thickness="2"></v-divider>

      <v-list-item
        class="drawer-item"
        :active="false"
        @click="changeTab('book')"
      >
        {{ $t('Ajanvaraus') }}
      </v-list-item>

      <v-divider class="ml-4 mr-4 border-opacity-20" :thickness="2"></v-divider>

      <v-list-item
        class="drawer-item"
        :active="false"
        @click="changeTab('products')"
      >
        {{ $t('Tuotteet') }}
      </v-list-item>

      <v-divider class="ml-4 mr-4 border-opacity-20" :thickness="2"></v-divider>

      <v-list-item
        class="drawer-item"
        :active="false"
        @click="changeTab('about-us')"
      >
        {{ $t('Tietoa meistä') }}
      </v-list-item>

      <v-divider class="ml-4 mr-4 border-opacity-20" :thickness="2"></v-divider>

      <v-list-item
        class="drawer-item"
        :active="false"
        @click="changeTab('contact-us')"
      >
        {{ $t('Ota yhteyttä') }}
      </v-list-item>

      <v-divider class="ml-4 mr-4 border-opacity-20" :thickness="2"></v-divider>

      <v-list-item>
        <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                flat
                class="language-btn bg-grey-darken-4 text-none mt-4"
                variant="tonal"
                style="width: 100%;"
              >
                <img class="mr-4 flag" :src="languageSrc()">
                {{ languageName() }}
              </v-btn>
            </template>
            <v-list>

              <v-list-item @click="changeLanguage('fi')">
                <div class="list-language-item">
                  <img class="flag" src="/finnish_flag.png">
                  Suomi
                </div>
              </v-list-item>

              <v-list-item @click="changeLanguage('sv')">
                <div class="list-language-item">
                  <img class="flag" src="/swedish_flag.png">
                  Svenska
                </div>
              </v-list-item>

              <v-list-item @click="changeLanguage('en')">
                <div class="list-language-item">
                  <img class="flag" src="/english_flag.png">
                  English
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>

  <v-app-bar class="header" elevation="4" style="justify-content: space-between;">
    <div class="app-bar-wrapper">
      <div class="logo-container" @click="changeTab('')">
        <img
          src="/pyorahuolto_logo2.jpg"
          class="main-logo"
        >
      </div>
      <div class="nav-container">
        <v-tabs
          class="d-none d-sm-flex"
          style="height: 100px;"
          v-model="store.tab"
        >
          <v-tab class="main-tab" value="" @click="changeTab('')">
            {{ $t('Etusivu') }}
          </v-tab>

          <v-tab class="main-tab" value="book" @click="changeTab('book')">
            {{ $t('Ajanvaraus') }}
          </v-tab>

          <v-tab class="main-tab"  value="products" @click="changeTab('products')">
            {{ $t('Tuotteet') }}
          </v-tab>

          <v-tab class="main-tab" value="about-us" @click="changeTab('about-us')">
            {{ $t('Tietoa meistä') }}
          </v-tab>

          <v-tab class="main-tab" value="contact-us" @click="changeTab('contact-us')">
            {{ $t('Ota yhteyttä') }}
          </v-tab>
        </v-tabs>

        <div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                flat
                class="language-btn mr-6 bg-grey-darken-4 text-none"
                variant="tonal"
              >
                <img class="mr-4 flag" :src="languageSrc()">
                {{ languageName() }}
              </v-btn>
            </template>
            <v-list>

              <v-list-item @click="changeLanguage('fi')">
                <div class="list-language-item">
                  <img class="flag" src="/finnish_flag.png">
                  Suomi
                </div>
              </v-list-item>

              <v-list-item @click="changeLanguage('sv')">
                <div class="list-language-item">
                  <img class="flag" src="/swedish_flag.png">
                  Svenska
                </div>
              </v-list-item>

              <v-list-item @click="changeLanguage('en')">
                <div class="list-language-item">
                  <img class="flag" src="/english_flag.png">
                  English
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <v-app-bar-nav-icon id="drawer-btn" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>

<script setup>
  import { useAppStore } from '@/store/app';
  import { useRouter, useRoute } from 'vue-router';
  import i18n from "@/i18n/i18n";
  import { ref } from 'vue'

  const drawer = ref(false);
  const store = useAppStore();
  const router = useRouter();
  const route = useRoute();

  // Init
  window.scrollTo(0, 0);

  const locale = localStorage.getItem('locale');

  if (locale) {
    i18n.global.locale = locale;
  }

  function changeTab(tab) {
    drawer.value = false;
    setTimeout(() => {
      router.push(`/${tab}`);
      store.tab = tab;
    }, 10);
  }

  function changeLanguage(language) {
    i18n.global.locale = language;
    localStorage.setItem('locale', language);
  }

  function languageName() {
    switch (i18n.global.locale) {
      case 'fi':
        return 'Suomi'
      case 'sv':
        return 'Svenska'
      case 'en':
        return 'English'
      default:
        return 'Suomi'
    }
  }

  function languageSrc() {
    switch (i18n.global.locale) {
      case 'fi':
        return '/finnish_flag.png'
      case 'sv':
        return '/swedish_flag.png'
      case 'en':
        return '/english_flag.png'
      default:
        return '/finnish_flag.png'
    }
  }
</script>

<style scoped>

  .logo-container {
    width: 330px !important;
    max-width: 330px !important;
    cursor: pointer;
  }
  .main-logo {
    max-height: 100%;
    width: 330px;
    max-height: 100%;
    object-fit: contain;
  }

  #main-navs {
    flex: 8;
    display: flex;
    margin-left: 30px;
    align-items: center;
    gap: 35px;
  }

  #main-navs a {
    font-size: 21px;
    cursor: pointer;
  }

  .languages {
    width: 200px;
  }

  .main-tab {
    height: 100%;
    padding: 0 20px;
  }

  .app-bar-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .main-tab {
    letter-spacing: 0.06rem;
    font-size: 18px;
    font-weight: 600;
    color: #373737;
    font-family: 'Roboto';
    text-transform: none;
  }

  .nav-container {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .flag {
    height: 20px;
  }

  .list-language-item {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
  }

  #drawer-btn {
    margin-top: 10px;
    margin-right: 10px;
    font-size: 22px;
    display: none;
  }

  .drawer-item {
    font-weight: 600;
  }

  .header {
    height: var(--footer-height);
    position: relative;
  }

  @media (max-width: 1199px) {
    .nav-container {
      display: none;
    }

    .main-logo {
      width: auto;
    }

    #drawer-btn {
      display: block;
    }
  }
</style>

<style>
.v-toolbar__content {
  height: 100% !important;
}
</style>
