//array of images
// let catsImages = [
//     "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
//     "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
//     "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
//     "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
// 	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
// ];

var hamsterImages = [
    "https://www.wittemolen.com/sites/default/files/styles/full_width/public/slides/SLIDER-Hamster.jpg?itok=t7h_LCJE",
    "https://thumbor.bigedition.com/cute-hamster-wearing-a-hat/-ZKI5q21vy7CDoGBaTZjphtPGwM=/20x142:729x674/480x360/filters:format(webp):quality(80)/granite-web-prod/96/82/96821b390a3b46ffb6b4710554f48e60.jpeg",
    "https://verdecora.es/blog/wp-content/uploads/2020/01/que-comen-hamsters.jpg",
    "https://www.versele-laga.com/-/media/VerseleLaga-Tenant/Global-Site/Articles/Rodents/Header/shutterstock_336852965_1920x1080px.ashx",
    "https://d.newsweek.com/en/full/1944028/hamsters.webp?w=1600&h=900&q=88&f=813fffc52a0be9c9438e237a2f3dd996"
];

let hamsterFacts = [
    "There Are About 20 Species of Hamsters",
    "They Are Nocturnal Creatures",
    "They Are Promiscuous",
    "Hamsters Are Banned in Hawaii",
    "Their Teeth Never Stop Growing",
    "They Hoard Food",
    "They Are Prone to Bacteria and Viruses",
    "Some Hibernate (Sort of)",
    "European Hamsters Are Critically Endangered",
    "They Have Poor Eyesight"
];

let samoyedImages = [
    "https://a-z-animals.com/media/2021/10/Samoyed-1024x535.jpg",
    "https://www.hepper.com/wp-content/uploads/2021/11/Samoyed-dog-in-the-summer-forest_Nik-Tsvetkov_Shutterstock.jpg",
    "https://www.worldlifeexpectancy.com/images/a/d/d/b/samoyed/samoyed_1.min.jpg",
    "https://www.dutch.com/cdn/shop/articles/shutterstock_1781425283.jpg?v=1685748622",
    "https://media1.popsugar-assets.com/files/thumbor/4GAWj347lKIt47ugJ3ocVNWEF8M=/0x0:645x583/fit-in/828x1500/filters:format_auto():extract_cover():upscale()/2019/10/15/756/n/1922243/ed46bc505da5fd2245fec4.13018895_.png"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
// const imgs = document.getElementsByTagName("img");
// for(let i = 0; i < imgs.length; i++) {
//     const randomImg = Math.floor(Math.random() * hamsterImages.length)
//     imgs[i].src = hamsterImages[randomImg]
// }

var curIndex = 0;
var imgDuration = 10000;

function slideShow() {
    
    const imgs = document.getElementsByTagName("img");

    for(let i = 0; i < imgs.length; i++) {
        const randomImg = Math.floor(Math.random() * hamsterImages.length)
        imgs[i].src = hamsterImages[randomImg]; // curIndex?

        curIndex++;

        if(curIndex == hamsterImages.length) {curIndex = 0;}

        setTimeout("slideShow()", imgDuration);
        //imgs[i].src = hamsterImages[randomImg]

    }
}
slideShow();
 
 
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    const randomFact = Math.floor(Math.random() * hamsterFacts.length)
    headers[i].innerText = hamsterFacts[randomFact];
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "Samoyed are cool! :D";
}

// do the same for footer element
const footer = document.getElementsByTagName("footer");
for (let i = 0; i < footer.length; i++){
    footer[i].innerText = "This footer has been edited by Jaycel Estrellado!";
}

// do the same for span element
const span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++){
    span[i].innerText = "Lorem ipsum dolor sit amet";
    
}
