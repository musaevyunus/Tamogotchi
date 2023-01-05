const tamogotchi = {
  name: 'Block',
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus: function(){
let meal = ""
let energy = ""
let mood = ""  
if(this.meal < 3){
    meal= "Я голоден"
} else{
    meal = "Я не голоден"
}

if (this.energy < 3){
    energy = "Я хочу спать"
}else{
    energy = "Я не хочу спать"
}

if (this.mood < 3){
    mood = "Мне скучно"
}else{
    mood = "Мне весело"
}

if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0){
    console.log("Умер")
}


 return `Имя: ${this.name} еда: ${meal} ${this.meal} энергия: ${energy} ${this.energy} настроение: ${mood} ${this.mood}`
  },
  
  setName: function(){
    this.name = 'Wholter'
    return
  },

  eat: function(){
   if (this.meal < 5) {
    this.meal++ && this.mood--
   } 
   return
},

sleep: function(){
    if (this.energy < 5){
        this.energy++ && this.meal--
    }
    return
},

play: function(){
    if (this.mood < 5){
        this.mood++ && this.energy--
    }
},

}
console.log(tamogotchi.getStatus())

