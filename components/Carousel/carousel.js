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
      if (this.count === (this.allImages.length -1) && direction === 1){
        this.count = 0;
      // On "previous" click... if count = 0 then take ahead to the last image
      }else if(this.count === 0 && direction === -1){
        this.count = this.allImages.length - 1;
      }else{
        this.count = this.count + direction ;
      }


      // remove visibility / make hidden all images
      this.allImages.forEach(card => card.classList.add("hidden"));

      // make visible target image
      this.allImages[this.count].classList.toggle("hidden");
    }
  }
  
  const feedback = document.querySelector(".feed-holder");


  //Get all feedback
  let box = feedback.querySelectorAll(".feed-card");
  //console.log(JSON.stringify(carouselContent));


  //Hide all feedback cards execpt the 1st one
  document.querySelectorAll(".feed-card").forEach( card =>{
    if(card === box[0]){

    }else{
      card.classList.add("hidden");
    }
  })

//Create a new instance of the feedback boxes using higher array 
  box = Array.from(box).map(image => new Carousel(image));




  
  