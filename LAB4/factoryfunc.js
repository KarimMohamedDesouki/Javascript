function person (fullname , money , sleepmood , healthRate) {
      return {
        fullname,
        money,
        sleepmood,
        healthRate,

    sleep( hours )
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

    eat(meals){
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

    buy(items){
        if (items == 1) {
            this.money -= 10;
          }
    },
    };
}
    const karim = new person( "karim", 20 , 5 , 100 )
    karim.sleep(5);
    karim.eat(2);
    karim.buy(1);
    console.log(karim);