window.onload = function() {

    const images = [
        'images/kunstwerk_1.jpeg',
        'images/kunstwerk_2.jpeg',
        'images/kunstwerk_3.jpeg',
    ];
    
    const viewportHeight = document.documentElement.clientHeight;

    function createContainer() {
        const section = document.createElement('section');
        section.setAttribute('class', 'container');
        return section;
    }

    function randomPlaatje() {
        return images[Math.floor(Math.random() * images.length)];
    }

    function plaatjeRow() {
        const section = createContainer();
        
        for (let index = 0; index < 7; index++) {
            const img = randomPlaatje();
            const imgEl = createImageElement(img);
            section.appendChild(imgEl);
        }
        return section;
    }
    
    const main = document.querySelector('main');

    for (let index = 0; index < 5; index++) {
        main.appendChild(plaatjeRow());
    }
    
    function createImageElement(img) {
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', img);
        imgEl.setAttribute('width', 200);
        return imgEl;
    }

    window.addEventListener('scroll', function(event) {
        const scrolledY = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;

        console.log(scrolledY);

        const scrolledToEnd = (scrolledY + viewportHeight) >= pageHeight;

        console.log(scrolledToEnd);
        
        if(scrolledToEnd){
            main.appendChild(plaatjeRow());
        }
    });
}
