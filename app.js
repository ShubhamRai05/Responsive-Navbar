const title = document.querySelector(".title")

setInterval(() => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        let rgb = `rgb(${r},${g},${b})`
        console.log(rgb);
        title.style.color = rgb

   
}, 1000);