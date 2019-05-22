


class Dropdown{
    constructor(element){

        this.element = element

        this.button = this.element.querySelector('.hamburger');

        
        this.content = document.querySelector('.menu');
        
        console.log(this.button)
        
        this.button.addEventListener('click', () => {
            return this.toggleMenu()
        });
    }

    toggleMenu(){
        //this.content.style.display = this.content.style.display === 'none' ? 'block':'none';
        console.log(this.content)
        this.content.classList.toggle('hidden');
        console.log('------------------------')
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));





  