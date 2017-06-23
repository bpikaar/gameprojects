// UNUSED
// TEST MET STATISCHE DATA

// MAIN APP
var app = new Vue({
  el: '#games-app',
  data: {
    cards: [
      { id:1, text: 'Matthijs Perik', title:'Fruitige Renner', url:'http://randomdesigner.github.io/dist/', image: 'images/leveleditor.png'},
      { id:2, text: 'Bob Pikaar', title:'Fruitige Renner', url:'http://randomdesigner.github.io/dist/',image: 'images/dimmy.png' },
      { id:3, text: 'Raymond van der Velden', title:'Fruitige Renner', url:'http://randomdesigner.github.io/dist/',image: 'images/budi.png' },
      { id:4, text: 'Sander Vispoel', title:'Fruitige Renner', url:'http://randomdesigner.github.io/dist/',image: 'images/sanderv.png' }
    ]
  },
  
  methods: {
    addCard: function (o) {
      this.cards.push(o);
    }
  }
})

// test in console
// let o = { id:5, text: 'Sander Vispoel', title:'Fruitige Renner', url:'http://randomdesigner.github.io/dist/',image: 'images/sanderv.png' };
// rechtstreeks in array
// app.cards.push(o);
// via method
// app.addCard(o);