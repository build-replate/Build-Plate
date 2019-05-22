class LightBox{
    constructor(element){
        this.element = element;
         this.cards = document.querySelectorAll('.feed-card');
         this.previousFeed = document.querySelector('.left-arrow');
         this.nextFeed = document.querySelector('.right-arrow');


         this.count = 0;
         this.allCards = this.cards.length;
         this.current = this.cards[this.count];



        this.previousFeed.addEventListener('click', () => {
            this.moveFeed(-1);
        });


        this.nextFeed.addEventListener('click', () => {
            this.moveFeed(1);
        });

    }

    moveFeed(direction){
        //remove active class from other boxes
        this.cards.forEach( card =>{
            card.classList.remove('active');
        });

        //check for edage then update count
        

        if(this.count === 0 && direction === -1){
            this.count = this.allCards - 1;
        }else if(this.count === this.allCards - 1  && direction === 1){
            this.count = 0;
            }else{

                this.count = (this.count + direction);
            }

            //get next card and add class
            console.log(this.count)
            this.cards[this.count].classList.add('active');
            console.log(this.cards[this.count]);

    }
    
}

let lightB = document.querySelectorAll('.feed-holder');
lightB.forEach((element) =>{
     new LightBox(element);
});

console.log('Im the right');

// document.querySelector('.left-arrow').addEventListener('click', () => {
//     console.log('Im the right');
// });;