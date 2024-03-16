// componente
Vue.component('fruta-card',{
    props:['image', 'title'],
    template:`
    <div>
        <img  width="150" v-bind:src="image" v-bind:alt="title"/>
        <h2>{{title}}</h2>
    </div>
    `
})

// instancia de Vue
const app= new Vue({
    // el: elemento html
    el:'#app', 
    data:{
        titulo:'Servicios para el hogar',
        frutas:[
            {title:'Pera', cantidad:0, image: 'https://i.pinimg.com/564x/00/01/5c/00015c79a67a3facdeb33ac8fa70cbe9.jpg'},
            {title:'Manzana', cantidad:10, image: 'https://st.depositphotos.com/1007168/3082/i/450/depositphotos_30829829-stock-photo-smiling-apple-cartoon-character-waving.jpg'},
            {title:'Plátano', cantidad:11, image: 'https://static7.depositphotos.com/1007989/773/i/600/depositphotos_7734172-stock-photo-peeling-banana-skin.jpg'}
        ]
    }
})


var example2 = new Vue({
    el: '#example-2',
    data: {
      name: 'Vue.js'
    },
    // definir métodos bajo el objeto `methods`
    methods: {
      saludar: function (event) {
        // `this` dentro de los métodos apunta a la instancia de Vue
        alert('Hola ' + this.name + '!')
        // `evento` es el evento DOM nativo
        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  })
  
  // también puedes invocar métodos en JavaScript.
  example2.greet() // => 'Hello Vue.js!'


function sum (a,b){
  return a+b
}

module.exports = sum