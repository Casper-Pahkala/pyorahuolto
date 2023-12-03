<template>
  <v-app>
    <default-bar />

    <div class="main-view">
      <default-view/>
    </div>

    <footer class="footer bg-grey-darken-4">

      <div class="footer-info-container">

        <div class="footer-info">
          <div>

            <h2>{{ $t('Yhteystiedot') }}</h2>

            <div class="mt-3">Pasi Högnäsbacka</div>
            <div>{{ $t('Puh. (06) 3179103') }}</div>
            <div>{{ $t('Fax (06) 3179103') }}</div>

            <div class="mt-5">Hietasaarenkatu 13 E</div>
            <div>65100 Vaasa</div>
          </div>

          <div>

            <h2>{{ $t('Aukioloajat') }}</h2>

            <div class="mt-3">{{ $t('Ma - Pe 9-16') }}</div>
            <div>{{ $t('La 12-16') }}</div>
            <div>{{ $t('Su suljettu') }}</div>
          </div>
        </div>
        <div class="map-wrapper">
          <iframe
            id="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.87998401606325!2d21.61171456319645!3d63.09760775761869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467d605b50dcf789%3A0x2c30cc79fbd0c362!2sVaasan%20Py%C3%B6r%C3%A4-%20ja%20Suksihuolto!5e0!3m2!1sen!2sfi!4v1701438900644!5m2!1sen!2sfi"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="bottom-container">
        <span class="copyright">© 2023 Vaasan Pyörähuolto</span>
        |
        <div>
          <span>Powered by</span><a id="data-dreams-link" href="https://datadreams.fi" target="_blank">Data Dreams</a>
        </div>

      </div>

    </footer>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { useAppStore } from '@/store/app';

  const store = useAppStore();
</script>


<style scoped>
  .main-view {
    margin-top: var(--footer-height);
    min-height: calc(100vh - var(--footer-height));
    display: flex;
    justify-content: center;
  }

  .footer {
    margin-top: 60px;
    padding: 10px;
  }
  .map-wrapper {
    flex: 1;

  }
  #maps {
    width: 100%;
    max-width: 750px;
    height: 400px;
  }

  .footer-info {
    display: flex;
    flex: 1;
    gap: 140px;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px 0 ;
  }

  .footer-info-container {
    display: flex;
    justify-content: center;
  }

  .bottom-container {
    display: flex;
    color: rgb(219, 219, 219);
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  #data-dreams-link {
    margin-left: 5px;
    cursor: pointer;
    color: rgb(219, 219, 219) !important;
    text-decoration: none;
    transition: all 0.3s ease;
    text-decoration: underline;
  }
  #data-dreams-link:hover {
    color: #ffffff !important;
    text-decoration: underline;
  }

  @media (max-width: 1199px) {
    .footer-info-container {
      flex-direction: column;
      padding: 5px;
    }

    .footer-info {
      gap: 10px;
      justify-content: space-evenly;
      flex: none;
      margin-bottom: 20px;
    }
    #maps {
      flex: none;
    }

    .map-wrapper {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 699px) {

    .footer-info {
      gap: 0;
    }
    .footer-info > div {
      padding: 0 20px;
    }
  }
</style>
