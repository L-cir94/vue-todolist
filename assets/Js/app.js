/* consegna
Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, 
formato da due proprietà:
•	text, una stringa che indica il testo del todo
•	done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è 
uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo 
digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei 
todo esistenti.
Bonus:
1.	oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2.	cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
(se done era uguale a false, impostare true e viceversa)

*/

/* strumenti: 

*/


const { createApp } = Vue

const app = createApp({
  data() {
    return {
        elementAdd:{
            text: '',
            done: false
        },
        task:[
          {
            text: "Fare spesa",
            done: false,
          },
          {
            text: "Completare DD",
            done: true,
          },
          {
            text: "andare a correre",
            done: false,
          },
          {
            text: "Fare l'elenco",
            done: false,
          },
            
        ]
    }
  },
  methods: {
   removeElement(index){
    this.task.splice(index,1)
   },
   addElement(){
    this.task.unshift( { ...this.elementAdd } )

   },
    }
  
})

app.mount('#app')
