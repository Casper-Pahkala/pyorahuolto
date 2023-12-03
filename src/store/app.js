// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    tab: '',
    offers: [
      {
        name: "Polkupyörä Rocksbike Supreme 4.1 27.5'', musta/keltainen",
        offer_price: 19900,
        original_price: 29900,
        src: '/bikes/1.webp',
        info: {
          'Rungon materiaali': 'Alumiini',
          'Vaihteiden lukumäärä': 24,
          'Renkaan koko': '27.5"',
          'Suositeltava pituus': '170-180 cm'
        },
        on_sale: true,
        images: [
          '/bikes/1.webp',
          '/bikes/2.webp'
        ],
        technical_info: {
          'Rungon koko': '18 - 20',
          'Renkaan koko': '27.5',
          'Vaihteiden lukumäärä': '24',
          'Rungon materiaali': 'alumiini.',
          'Satula': 'Dacron XML 38.1.',
          'Ohjauspyörä ja istuinputki': 'terästä.',
          'Ketju': 'KMC Z33.',
          'Etunapa/takanavan takanapa': 'SF-A210 QR / SF-A210 QR-laakeri.',
          'Takavaihde': 'Shimano RD-TY300 Tourney',
          'Vaihteenvaihto-/jarruvipu': 'Dacron ST-51 24 vaihde / Sypo hydraulinen.',
          'Jarrut': 'Sypo DS01 mekaaninen levy.',
          'Vanteet': 'acron Double Wall',
          'Renkaat': 'Mitas Ocelot 27.5x2.10',
          'Väri': 'musta, keltainen;',
          'Paino': '15,6 kg'
        }
      },
      {
        name: "N1-maastopyörä 26, miehet, musta",
        offer_price: 17900,
        original_price: 27900,
        src: '/bikes/2.webp'
      },
      {
        name: "TREK MARLIN 4 GEN 2, miehet, musta",
        offer_price: 59900,
        original_price: 79900,
        src: '/bikes/1.webp'
      },
      {
        name: "Polkupyörä Rocksbike Supreme 4.1 27.5'', musta/keltainen",
        offer_price: 19900,
        original_price: 29900,
        src: '/bikes/1.webp'
      },
      {
        name: "N1-maastopyörä 26, miehet, musta",
        offer_price: 17900,
        original_price: 27900,
        src: '/bikes/2.webp'
      },
      {
        name: "TREK MARLIN 4 GEN 2, miehet, musta",
        offer_price: 59900,
        original_price: 79900,
        src: '/bikes/1.webp'
      },
      {
        name: "N1-maastopyörä 26, miehet, musta",
        offer_price: 17900,
        original_price: 27900,
        src: '/bikes/2.webp'
      },
      {
        name: "TREK MARLIN 4 GEN 2, miehet, musta",
        offer_price: 59900,
        original_price: 79900,
        src: '/bikes/1.webp'
      },
      {
        name: "Polkupyörä Rocksbike Supreme 4.1 27.5'', musta/keltainen",
        offer_price: 19900,
        original_price: 29900,
        src: '/bikes/1.webp'
      },
      {
        name: "N1-maastopyörä 26, miehet, musta",
        offer_price: 17900,
        original_price: 27900,
        src: '/bikes/2.webp'
      },
      {
        name: "TREK MARLIN 4 GEN 2, miehet, musta",
        offer_price: 59900,
        original_price: 79900,
        src: '/bikes/1.webp'
      }
    ]
  }),
})
