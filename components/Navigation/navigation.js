



const navElements = {
    "nav": [
        {"name": "About","href": "about/about.html"},
        {"name": "A Better Way","href": "#better"},
        {"name": "The Problem", "href": "#problem"},
      ]
}


navElements.nav.map(nav =>{

    let newname = document.createElement('a');
    
    newname.textContent = nav.name;
    newname.setAttribute('href', nav.href);

    document.querySelector('.dropdown .menu').appendChild(newname);

});




