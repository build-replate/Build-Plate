class Carousel {
    constructor(element) {
      this.element = element;
      this.allImages = document.querySelectorAll(".feed-card");
      this.previousFeed = document.querySelector(".left-arrow");
      this.nextFeed = document.querySelector(".right-arrow");

  
      this.previousImage();
      this.nextImage();



      this.count = 0;

    }
  
    nextImage() {
      this.nextFeed.addEventListener("click", () => {

        this.toggleImage(1);


        
      });

    }
  
    previousImage() {
      this.previousFeed.addEventListener("click", () => {

          this.toggleImage(-1);
      });
    }




  





    toggleImage(direction){
      // On "next" click... if count = total images then take count back to the beginning "0"
      if (this.count === (box.length -1) && direction === 1){
        this.count = 0;
      }else if(this.count === 0 && direction === -1){
        this.count = box.length - 1;
      }else{
        this.count = this.count + direction ;
      }


    box.forEach(card => card.classList.add("hidden"));

    box[this.count].classList.toggle("hidden");
    }
  }
  
  const feedback = document.querySelector(".feed-holder");
  const box = feedback.querySelectorAll(".feed-card");
  
  // displays the first card
  document.querySelectorAll(".feed-card").forEach( card =>{
    if(card === box[0]){

    }else{
      card.classList.add("hidden");
    }
  })

  box.forEach(image => new Carousel(image));



  
  