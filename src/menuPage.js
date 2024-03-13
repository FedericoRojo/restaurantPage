import menuImage from './images/menu-img.jpg';

function createMenuCard(menu) {
    let card = document.createElement('div');
    card.classList.add("menu-card");

    const img = document.createElement('img');
    img.src = 'images/menu-img.jpg'; 
    img.alt = menu.name;

    const title = document.createElement('h2');
    title.classList.add('menu-title');
    title.textContent = menu.name;

    const ingredients = document.createElement('p');
    ingredients.classList.add('menu-ingredients');
    ingredients.textContent = menu.ingredients;

    const price = document.createElement('p');
    price.textContent = 'Price: ' + menu.price;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(ingredients);
    card.appendChild(price);


    return card;
}

function menuPage(){
    /*
    <div class="menus-page">
            <div class="menu-card">
                <img src="images/menu-img.jpg" alt="Menu 4">
                <h2 class="menu-title">Menu 4</h2>
                <p class="menu-ingredients">Ingredient 1, Ingredient 2, Ingredient 3</p>
                <p>Price: $18</p>
            </div>
        </div>
    */

    const menus = [ 
        { ame: "Menu 1", ingredients:"ingredient1, ingredients2, ingredients3, ingredients4", price: "$20" },
        { name: "Menu 2", ingredients: "Ingredient 1, Ingredient 2, Ingredient 3", price: "$12" },
        { name: "Menu 3", ingredients: "Ingredient 1, Ingredient 2, Ingredient 3", price: "$15" },
        { name: "Menu 4", ingredients: "Ingredient 1, Ingredient 2, Ingredient 3", price: "$18" } ];

    
    const container = document.getElementById('content');
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuPage';
    menuContainer.classList.add("menus-page");

    menus.forEach( menu => {
        let card = createMenuCard(menu);
        menuContainer.appendChild(card);
    });

    container.appendChild(menuContainer);

}

export {menuPage}
