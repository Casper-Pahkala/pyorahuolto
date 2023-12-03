<template>
  <router-view />
</template>

<script setup>
  //
</script>

<style>

  :root {
    --footer-height: 100px;

  }

  main {
    width: 1200px !important;
    max-width: 100% !important;
    padding: 10px !important;
    flex: none !important;
  }

  body, html {
    min-width: 400px;
  }


  .price {
    display: flex;
    align-items: start;
    margin-top: 10px;
  }

  .price.discount {
    font-size: 24px;
    color: red;
    font-weight: 500;
  }

  .price.discount .euros {
    padding-top: 2px;
  }

  .price.discount .cents {
    font-size: 17px;
  }

  .price.discount .euro-icon {
    font-size: 17px;
    padding-top: 5px;
  }

  .price.original {
    font-size: 17px;
    color: black;
    font-weight: 500;
  }

  .price.original .text {
    font-size: 15px;
    color: rgb(55, 55, 55);
    font-weight: 400;
    padding-top: 4px;
    padding-right: 4px;
  }

  .price.original .euros {
    padding-top: 1px;
  }

  .price.original .cents {
    font-size: 14px;
  }

  .price.original .euro-icon {
    font-size: 14px;
    padding-top: 4px;
  }

  .price-container {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 1199px) {

    :root {
      --footer-height: 70px !important;
    }

    .price.discount {
      font-size: 22px;
      color: red;
      font-weight: 500;
    }

    .price.discount .euros {
      padding-top: 2px;
    }

    .price.discount .cents {
      font-size: 15px;
    }

    .price.discount .euro-icon {
      font-size: 15px;
      padding-top: 5px;
    }

    .price.original {
      font-size: 15px;
      color: black;
      font-weight: 500;
    }

    .price.original .text {
      font-size: 13px;
      color: rgb(55, 55, 55);
      font-weight: 400;
      padding-top: 4px;
      padding-right: 4px;
    }

    .price.original .euros {
      padding-top: 1px;
    }

    .price.original .cents {
      font-size: 12px;
    }

    .price.original .euro-icon {
      font-size: 12px;
      padding-top: 4px;
    }

  }

</style>
