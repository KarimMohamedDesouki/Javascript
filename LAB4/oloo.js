//blueprint comman data
const person = {
  init: function(fullname , money , sleepmood , healthRate ) {
    this.fullname = fullname
    this.money = money
    this.sleepmood = sleepmood
    this.healthRate = healthRate
    return this;
  },

  sleep: function( hours )
    {
        if (hours > 7){
            this.sleepmood = "lazy"
        }else if(hours < 7){
            this.sleepmood = "tired"
        }else if(hours == 7){
            this.sleepmood = "happy"
        }else{
            this.sleepmood = "undifiend"
        }
    },

    eat: function(meals){
        if (meals == 3){
            this.healthRate = "100 health rate"
        }else if(meals == 2){
            this.healthRate = "75 health rate"
        }else if(meals == 1){
            this.healthRate = "50 health rate"
        }else{
            this.healthRate = "undifiend"
        }
    },

    buy: function(items){
        if (items == 1) {
            this.money -= 10;
          }
    }
};
const karim = Object.create(person).init( "karim", 20 , 5 , 100 );
    karim.sleep(5);
    karim.eat(2);
    karim.buy(1);
    console.log(karim);
