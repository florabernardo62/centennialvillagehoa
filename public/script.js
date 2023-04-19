// Requirement: Have a folder structure that meets the MVC paradigm 
// Client-side java script on the public folder
// Requirement: Use Handlebars.js as the template engine.
// Requirement: Use at least one new library, package, or technology that we haven’t discussed.
// Making a gallery of photos using handlebar.js as the template engine and slick carrousel as a library 
// sources: https://kenwheeler.github.io/slick/, https://handlebarsjs.com/, https://www.codexworld.com/slick-slider-with-handelbars-template-using-js/
const data = {
    images: [
      {
// Future improvement: Figure out how to make the pictures available using relative path
        url: 'C:/Users/berna/Desktop/centennial-village-HOA/public/assets/308195327_10221771173853979_8721157121475386871_n.jpg',
        alt: 'Homeowner(s) volunteering',
      },
      {
        url: 'C:/Users/berna/Desktop/centennial-village-HOA/public/assets/308586811_10221765152823457_1319350582347298209_n.jpg',
        alt: 'Homeowner(s) volunteering',
      },
      {
        url: 'C:/Users/berna/Desktop/centennial-village-HOA/public/assets/308658202_10221765152743455_5230476726142445543_n.jpg',
        alt: 'Homeowner(s) volunteering',
      },
      {
        url: 'C:/Users/berna/Desktop/centennial-village-HOA/public/assets/309340416_10221771174133986_6617103415592310993_n.jpg',
        alt: 'Homeowner(s) volunteering',
      },
// Future improvement: add more photos and improve alt texts with the help of the board
    ],
  };
  
  const source = document.getElementById('gallery-template').innerHTML;
  const template = Handlebars.compile(source);
  const html = template(data);
  document.querySelector('.gallery').innerHTML = html;
  
  $(document).ready(function(){
    $('.gallery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
      nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });
  