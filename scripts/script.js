window.onload = function() {
    const images = [
        'images/kunstwerk_1.jpeg',
        'images/kunstwerk_2.jpeg',
        'images/kunstwerk_3.jpeg',
    ];

    const viewportHeight = document.documentElement.clientHeight;

    const main = document.querySelector('main');

    function randomPlaatje() {
        return images[Math.floor(Math.random() * images.length)];
    }

    function plaatjeRow() {
        for (let index = 0; index < 7; index++) { 
            const img = randomPlaatje();
            const imgEl = createImageElement(img);
            main.appendChild(imgEl); //
        }
    }

    for (let index = 0; index < 5; index++) {
        plaatjeRow();
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

        const scrolledToEnd = (scrolledY + viewportHeight) >= pageHeight;

        if (scrolledToEnd) {
            plaatjeRow();
        }
    });
}
