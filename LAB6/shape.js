class  shape {
    constructor( name , side , sidelength){
        this.name = name;
        this.side = side;
        this.sidelength = sidelength;
    }

    calcParameter(){
        var value = this.side * this.sidelength;
        console.log(`the Parameter of ${this.name} is ${this.side} * ${this.sidelength} -> : ${value}`)
    }
}

class square extends shape{
    constructor(sidelength){
        super( "square" , 4 , sidelength)
    }

    calcArea(){
        var value = this.sidelength * this.sidelength;
        console.log(`the Area of ${this.name} is ${this.sidelength} * ${this.sidelength} -> : ${value}`);
    }
}

class triple{
    static customname = "tripler";
    static description = "I triple any number you provide"
    static calculate(n=1){
        var value = n * 3;
        return value;
    }
}

// Has static field longDescription
// Has static field description with value “square the triple of any number you provide”
// Override static method calculate return calculate(n) * calculate(n) from parent class

class squaredtriple extends triple{
    static description = "square the triple of any number you provide";
    static calculate(n){
        const value = super.calculate(n);
        var value1 =  value * value;
        return value1;
        
    }
}


// var triangle = new shape( "triangle" , 3 , 3);
// console.log(triangle);
// var num =triangle.calcParameter();

// var square1 = new square(5);
// console.log(square1);
// square1.calcParameter();
// square1.calcArea();

console.log(triple.customname);
console.log(triple.description);
console.log(squaredtriple.calculate(3));
console.log(squaredtriple.description);
console.log(squaredtriple.longDescription);
console.log(squaredtriple.customName); 

