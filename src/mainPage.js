import myImage from './images/restaurant-image.png';
import menuImage from './images/menu-img.jpg';

function mainPage(){
    /*
    <div id="content">
        <div class="homepage" id="homepage">
            <img src="images/restaurant-image.png" alt="Restaurant Image">
            <h1>Welcome to Our Restaurant</h1>
            <p>We are a cozy restaurant located in the heart of the city, serving delicious meals made with fresh, locally-sourced ingredients.</p>
            <p>Experience the warmth of our hospitality as you indulge in our exquisite dishes crafted with love by our talented chefs.</p>
            <p>Join us for a culinary journey that delights the senses and leaves a lasting impression.</p>
        </div>
    </div>
    */
   let container = document.getElementById('content');
   
   let homePage = document.createElement('div');
   homePage.classList.add('homepage');
   homePage.id = 'homepage';

    let img = document.createElement('img');
    img.src = myImage;
    img.alt = "Restaurant image";
    
    let h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Our Restaurant';

    let p = document.createElement('p');
    p.textContent = 'We are a cozy restaurant located in the heart of the city, serving delicious meals made with fresh, locally-sourced ingredients.';
    let p1 = document.createElement('p');
    p1.textContent = 'Experience the warmth of our hospitality as you indulge in our exquisite dishes crafted with love by our talented chefs.';
    let p2 = document.createElement('p');
    p2.textContent = 'Join us for a culinary journey that delights the senses and leaves a lasting impression.';

    homePage.appendChild(img);
    homePage.appendChild(h1);
    homePage.appendChild(p);
    homePage.appendChild(p1);
    homePage.appendChild(p2);

    container.appendChild(homePage);

}

export {mainPage};