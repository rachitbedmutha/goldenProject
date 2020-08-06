class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.image1 = loadImage("images/yellowCar.jpg");
        this.image2 = loadImage("images/redCar.jpg");
        this.image3 = loadImage("images/blackCar.jpg");
    }
    display(){
        var title = createElement('h2');
        title.html("Endless Car Running Game")
        title.position(displayWidth/2-50,10);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            name = this.input.value();
            this.greeting.html("Hello "+name+" Choose Your Car ");
            var car1 = createSprite(100,200,50,50);
            car1.addImage("car1",this.image1);
            var car2 = createSprite(400,200,50,50);
            car2.addImage("car2",this.image2);
            var car3 = createSprite(800,200,50,50);
            car3.addImage("car3",this.image3);
            if(mousePressedOver(car1)){
                carCode = 1;
                gameState = 1;
                console.log(carCode);

            }
            if(mousePressedOver(car2)){
                carCode = 2;
                gameState = 1;
                console.log(carCode);
                
            }
            if(mousePressedOver(car3)){
                carCode = 3;
                gameState = 1;
                console.log(carCode);
                
            }


        })
    }
    
}