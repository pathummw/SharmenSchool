const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    console.log('Clickedwdwd')
    document.getElementById('myIframe').src = "docs/CVPathum.pdf"
});

const li1 = document.querySelector('#testA');
li1.addEventListener('click', function () {
    console.log("Clicked LI")
    document.getElementById('myIframe').src = "docs/Humanistic.pdf";
})


const btnCV = document.querySelector('#btnCV');

btnCV.addEventListener('click', function () {
    document.getElementById('myIframe').src = "docs/Humanistic.pdf"
});