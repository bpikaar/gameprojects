// TODO components in .vue files. samenvoegen met browserify/webpack/tsc?

// navbar hoeft eigenlijk niet een vue component te zijn
Vue.component('vue-nav', {
  template: `<nav>
    <div class="nav-wrapper red accent-3">
      <a href="#" class="brand-logo">HR CMGT Games</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="hr.html">HR</a></li>
        <li><a href="cmgt.html">CMGT</a></li>
        <li><a href="gaming.html">Gaming</a></li>
      </ul>
    </div>
  </nav>`
})

// card wordt gevuld met json data
Vue.component('vue-card', {
  template: `<div class="col s12 m6 l3">
                <div class="card small">
                    <div class="card-image">
                      <img :src="'images/' + card.image">
                    </div>
                    <div class="card-content">
                      {{ card.text }}
                    </div>
                    <div class="card-action">
                      <a :href="card.link" target="_blank">{{ card.title }}</a>
                    </div>
                </div>
            </div>`,
  props: ['card']
})

Vue.component('vue-footer', {
  template: '<footer>Copyright 2017</footer>'
})

// ***************************************************************
// MAIN APP
// ***************************************************************

var app = new Vue({
  el: '#games-app',
  data: {
    cards: []
  },
  mounted: function () {
    // games laden met fetch. json uit promise halen. array updaten.
    window.fetch("data/getgames.php")
        .then(res => res.json())
        .then(res => {
            this.initCards(res);
        })
  },
  methods: {
    addCard: function (o) {
      this.cards.push(o);
    },
    initCards:function(arr) {
      this.cards = arr;
    }
  }
})