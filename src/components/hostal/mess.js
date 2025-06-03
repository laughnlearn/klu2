import menuData from './menuData.js';

// Hostel data
const hostels = [
    // Boys In-Campus Hostels
    {
        id: 'tulip',
        name: 'Tulip Residency Boys Hostel',
        image: '../../assets/piceturs/tulip.jpg',
        description: 'Home away from home with top-notch mess services and facilities.',
        location: 'In Campus',
        phone: '9849834035',
        incharge: 'Atchuyutha Ravi Babu',
        category: 'boys-campus'
    },
    // Girls Hostels
    {
        id: 'himalaya',
        name: 'Himalaya Girls Hostel',
        image: '../../assets/piceturs/himalaya.jpg',
        description: 'Comfortable accommodation with modern amenities and excellent mess facilities.',
        location: 'In Campus',
        phone: '7842800179',
        incharge: 'Jarugula Nirmala Devi',
        category: 'girls'
    },
    {
        id: 'kanchanganga',
        name: 'Kanchanganga Girls Hostel',
        image: '../../assets/piceturs/kanchanganga.jpg',
        description: 'Experience the best of hostel life with quality food and accommodation.',
        location: 'In Campus',
        phone: '8125825286',
        incharge: 'Ancha Jyothi Kumari',
        category: 'girls'
    },
    // Boys Outside Campus Hostels
    {
        id: 'aravali',
        name: 'Aravali Boys Hostel',
        image: '../../assets/piceturs/aravali.png',
        description: 'Comfortable accommodation with modern amenities and excellent mess facilities.',
        location: 'Outside Campus',
        phone: '6302051411',
        incharge: 'Kaza Ganesh',
        category: 'boys-outside'
    },
    {
        id: 'vindhya',
        name: 'Vindhya Boys Hostel',
        image: '../../assets/piceturs/vidhya.png',
        description: 'Experience the best of hostel life with quality food and accommodation.',
        location: 'Outside Campus',
        phone: '9912090983',
        incharge: 'Nagaraju Goriparthi',
        category: 'boys-outside'
    },
    {
        id: 'sahyadri',
        name: 'Sahyadri Boys Hostel',
        image: '../../assets/piceturs/sahyadri.jpg',
        description: 'Comfortable stay with quality food and modern amenities.',
        location: 'Outside Campus',
        phone: '9398230104',
        incharge: 'Bavikadi Kamal Hussain',
        category: 'boys-outside'
    },
    {
        id: 'satpura',
        name: 'Satpura Boys Hostel',
        image: '../../assets/piceturs/satpura.jpg',
        description: 'Excellent accommodation with modern facilities and mess services.',
        location: 'Outside Campus',
        phone: '8978651808',
        incharge: 'Bhavani Sankar Kavuri',
        category: 'boys-outside'
    },
    {
        id: 'kailash',
        name: 'Kailash Residency Boys Hostel',
        image: '../../assets/piceturs/kailash.jpg',
        description: 'Premium accommodation with top-class facilities and mess services.',
        location: 'Outside Campus',
        phone: '9490114756',
        incharge: 'Jangam Manikya Rao',
        category: 'boys-outside'
    },
    {
        id: 'nilagiri',
        name: 'Nilagiri Boys Hostel',
        image: '../../assets/piceturs/nilagiri.jpg',
        description: 'Comfortable stay with excellent mess facilities and modern amenities.',
        location: 'Outside Campus',
        phone: '9885559384',
        incharge: 'Amara Reddy Anumula',
        category: 'boys-outside'
    },
    {
        id: 'malabar',
        name: 'Malabar Boys Hostel',
        image: '../../assets/piceturs/malabar.jpg',
        description: 'Quality accommodation with modern facilities and excellent mess services.',
        location: 'Outside Campus',
        phone: '9949231079',
        incharge: 'Muralidhara Rao Morla',
        category: 'boys-outside'
    }
];

// Menu data
const hostelMenus = {
    'boys-hostel-1': {
        monday: {
            breakfast: ['Idli', 'Sambar', 'Chutney', 'Tea'],
            lunch: ['Rice', 'Dal', 'Vegetable Curry', 'Chapati', 'Curd'],
            dinner: ['Rice', 'Dal', 'Paneer Curry', 'Chapati', 'Salad']
        },
        tuesday: {
            breakfast: ['Dosa', 'Sambar', 'Chutney', 'Coffee'],
            lunch: ['Rice', 'Dal', 'Chicken Curry', 'Chapati', 'Raita'],
            dinner: ['Rice', 'Dal', 'Vegetable Curry', 'Chapati', 'Salad']
        }
    },
    'boys-hostel-2': {
        monday: {
            breakfast: ['Puri', 'Aloo Sabzi', 'Tea'],
            lunch: ['Rice', 'Dal', 'Vegetable Curry', 'Chapati', 'Curd'],
            dinner: ['Rice', 'Dal', 'Paneer Curry', 'Chapati', 'Salad']
        },
        tuesday: {
            breakfast: ['Upma', 'Chutney', 'Coffee'],
            lunch: ['Rice', 'Dal', 'Chicken Curry', 'Chapati', 'Raita'],
            dinner: ['Rice', 'Dal', 'Vegetable Curry', 'Chapati', 'Salad']
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Display current date
    updateCurrentDate();
    
    // Populate hostel cards
    populateHostelCards();
    
    // Add event listeners
    addEventListeners();
    
    // Add category filter buttons
    addCategoryFilters();
    
    // Add back to home button
    addBackToHomeButton();

    // Initialize contact page
    initializeContactPage();
});

// Initialize contact page
function initializeContactPage() {
    // Create contact page if it doesn't exist
    if (!document.getElementById('contact-page')) {
        const contactPage = document.createElement('div');
        contactPage.id = 'contact-page';
        contactPage.className = 'page inactive';
        contactPage.innerHTML = `
            <div class="container">
                <div class="main-content">
                    <button class="back-button back-to-hostels-btn">
                        <i class="fas fa-arrow-left"></i> Back to Hostels
                    </button>
                    <h2 class="section-title">Hostel Contact Details</h2>
                    <div class="contact-grid">
                        ${hostels.map(hostel => `
                            <div class="contact-card">
                                <h3>${hostel.name}</h3>
                                <div class="contact-details">
                                    <p><i class="fas fa-phone"></i> ${hostel.phone}</p>
                                    <p><i class="fas fa-user-tie"></i> Incharge: ${hostel.incharge}</p>
                                    <p><i class="fas fa-map-marker-alt"></i> ${hostel.location}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        document.querySelector('main').appendChild(contactPage);
    }
}

// Update current date display
function updateCurrentDate() {
    const dateDisplay = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    dateDisplay.textContent = currentDate;
}

// Populate hostel cards
function populateHostelCards() {
    const hostelsGrid = document.querySelector('.hostels-grid');
    hostelsGrid.innerHTML = ''; // Clear existing cards
    
    hostels.forEach(hostel => {
        const card = document.createElement('div');
        card.className = 'hostel-card';
        card.setAttribute('data-category', hostel.category);
        card.innerHTML = `
            <img src="${hostel.image}" alt="${hostel.name}">
            <div class="hostel-info">
                <h3>${hostel.name}</h3>
                <p>${hostel.description}</p>
                <div class="hostel-details">
                    <p><i class="fas fa-map-marker-alt"></i> ${hostel.location}</p>
                    <p><i class="fas fa-phone"></i> ${hostel.phone}</p>
                    <p><i class="fas fa-user-tie"></i> Incharge: ${hostel.incharge}</p>
                </div>
            </div>
        `;
        
        // Add click event to show menu
        card.addEventListener('click', () => showMenu(hostel.id));
        
        hostelsGrid.appendChild(card);
    });
}

// Show menu page
function showMenu(hostelId) {
    // Update page visibility to menu page
    showPage('menu-page');

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    const menuPage = document.getElementById('menu-page');
    const menuContent = menuPage.querySelector('.main-content .menu-content');
    const menuHeader = menuPage.querySelector('.menu-header');
    const sectionTitle = menuHeader.querySelector('.section-title');

    // Clear previous dynamic content in menuContent and dynamic elements in menuHeader
    menuContent.innerHTML = '';
    const existingCuisineSelector = menuHeader.querySelector('.cuisine-selector');
    if (existingCuisineSelector) existingCuisineSelector.remove();
    const existingWeekNav = menuHeader.querySelector('.week-nav');
    if (existingWeekNav) existingWeekNav.remove();

    // Find the selected hostel object to get its name
    const selectedHostel = hostels.find(h => h.id === hostelId);
    const hostelName = selectedHostel ? selectedHostel.name : 'Selected Hostel';

    // Check if menu data exists for the hostel
    if (menuData[hostelId] && Object.keys(menuData[hostelId]).length > 0) {
        // Data is available, proceed to show the menu

        // Update section title
        sectionTitle.textContent = `${hostelName}`;
        const menuSubtitle = document.createElement('span');
        menuSubtitle.textContent = "Today's Menu";
        sectionTitle.appendChild(menuSubtitle);

        // Add back button to the menuContent
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Hostels';
        menuContent.appendChild(backButton);
        backButton.onclick = () => showPage('home-page');

        // Create and insert cuisine selector
        const cuisineSelector = document.createElement('div');
        cuisineSelector.className = 'cuisine-selector';
        cuisineSelector.innerHTML = `
            <button class="cuisine-btn active" data-cuisine="south">South Indian</button>
            <button class="cuisine-btn" data-cuisine="north">North Indian</button>
        `;
        // Insert cuisine selector after the section title
        sectionTitle.parentNode.insertBefore(cuisineSelector, sectionTitle.nextSibling);

        // Create and insert week navigation bar
        const weekNav = document.createElement('div');
        weekNav.className = 'week-nav';
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const currentDay = getCurrentDay(); // Default to current day for week nav active state

        weekNav.innerHTML = days.map(day => `
            <button class="day-btn ${day === currentDay ? 'active' : ''}" data-day="${day}">${day.charAt(0).toUpperCase() + day.slice(1)}</button>
        `).join('');
         // Insert week nav after the cuisine selector and before mealTypeTabsContainer
        const mealTypeTabsContainer = menuHeader.querySelector('.menu-tabs'); // Get the static meal type tabs container here
        if (cuisineSelector && cuisineSelector.parentNode && mealTypeTabsContainer) {
             cuisineSelector.parentNode.insertBefore(weekNav, mealTypeTabsContainer);
        } else if (cuisineSelector && cuisineSelector.parentNode) {
             // Fallback: insert after cuisineSelector if mealTypeTabsContainer is not found
            cuisineSelector.parentNode.appendChild(weekNav);
        }

        // Add menu items container
        const menuItemsContainer = document.createElement('div');
        menuItemsContainer.className = 'menu-items-container';
        menuContent.appendChild(menuItemsContainer);

        // Show breakfast menu for the current day and default cuisine (south)
        showCuisineMenu('south', 'breakfast', menuItemsContainer, hostelId, currentDay);

        // Add event listeners to cuisine buttons (select within menuHeader AFTER they are inserted)
        const cuisineButtons = menuHeader.querySelectorAll('.cuisine-btn');
        cuisineButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active state for cuisine buttons
                cuisineButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Show selected cuisine menu
                const cuisine = button.getAttribute('data-cuisine');
                // Get the current meal type and day
                const activeMealButton = menuHeader.querySelector('.tab-button.active');
                const currentMealType = activeMealButton ? activeMealButton.getAttribute('data-meal') : 'breakfast';
                const activeDayButton = menuHeader.querySelector('.day-btn.active');
                const currentDay = activeDayButton ? activeDayButton.getAttribute('data-day') : getCurrentDay();

                showCuisineMenu(cuisine, currentMealType, menuItemsContainer, hostelId, currentDay);
            });
        });

        // Add day selection functionality (select within menuHeader AFTER they are inserted)
        const dayButtons = menuHeader.querySelectorAll('.day-btn');
        dayButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active state for day buttons
                dayButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Get the selected day
                const selectedDay = button.getAttribute('data-day');

                // Get the currently active meal type and cuisine
                const activeMealButton = menuHeader.querySelector('.tab-button.active');
                const currentMealType = activeMealButton ? activeMealButton.getAttribute('data-meal') : 'breakfast';
                const activeCuisineButton = menuHeader.querySelector('.cuisine-btn.active');
                const currentCuisine = activeCuisineButton ? activeCuisineButton.getAttribute('data-cuisine') : 'south';

                // Update the section title to show the selected day
                const dayString = `${selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}'s`;
                sectionTitle.textContent = `${hostelName} - ${dayString} Menu`;

                // Show menu for selected day, current meal type, and current cuisine
                showCuisineMenu(currentCuisine, currentMealType, menuItemsContainer, hostelId, selectedDay);
            });
        });

        // Add event listeners to meal type tabs (select within menuHeader)
        const mealTypeTabs = menuHeader.querySelectorAll('.tab-button');
        mealTypeTabs.forEach(button => {
             button.addEventListener('click', () => {
                mealTypeTabs.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const newMealType = button.getAttribute('data-meal');
                const activeCuisineButton = menuHeader.querySelector('.cuisine-btn.active');
                const currentCuisine = activeCuisineButton ? activeCuisineButton.getAttribute('data-cuisine') : 'south';
                 // Get the current day again as it might have changed from the day selector
                const activeDayButton = menuHeader.querySelector('.day-btn.active');
                const currentDay = activeDayButton ? activeDayButton.getAttribute('data-day') : getCurrentDay();

                // Show menu for current day, new meal type, and current cuisine
                showCuisineMenu(currentCuisine, newMealType, menuItemsContainer, hostelId, currentDay);
             });
        });

    } else {
        // No data available, display a message

        // Update section title
        sectionTitle.textContent = `${hostelName} - Menu`;

        // Add a back button to the menuContent
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Hostels';
        menuContent.appendChild(backButton);
        backButton.onclick = () => showPage('home-page');

        // Display no menu message
        const noMenuMessage = document.createElement('div');
        noMenuMessage.className = 'no-menu-message';
        noMenuMessage.innerHTML = `
            <h4>No food data available for ${hostelName} at this time.</h4>
        `;
        menuContent.appendChild(noMenuMessage);
    }
}

// Show cuisine specific menu
function showCuisineMenu(cuisine, mealType, container, hostelId, currentDay) {
    // Get menu items for the selected cuisine and meal type
    const menuItems = menuData[hostelId][currentDay][mealType][cuisine];
    
    // Clear existing content
    container.innerHTML = '';
    
    if (!menuItems || menuItems.length === 0) {
        const noMenuMessage = document.createElement('div');
        noMenuMessage.className = 'no-menu-message';
        noMenuMessage.innerHTML = `
            <h4>No menu available for ${cuisine} ${mealType}</h4>
        `;
        container.appendChild(noMenuMessage);
        return;
    }
    
    // Add menu items
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        let emoji = '🍽️'; // Default food emoji
        const lowerItem = item.toLowerCase();

        // Add new specific checks here (order matters - more specific first)
        if (lowerItem === 'plain rice') {
            emoji = '🍚';
        } else if (lowerItem === 'mix veg salad') {
            emoji = '🥗';
        } else if (lowerItem === 'idly') {
            emoji = '🍘';
        } else if (lowerItem === 'chapati') {
            emoji = '🫓';
        } else if (lowerItem === 'carrot fry') {
            emoji = '🥕🍳';
        } else if (lowerItem === 'egg burji') {
            emoji = '🍳';
        } else if (lowerItem === 'methi paneer') {
            emoji = '🌿🧀';
        } else if (lowerItem === 'potato chips') {
            emoji = '🍟';
        } else if (lowerItem === 'cabbage fry') {
            emoji = '🥬🍳';
        } else if (lowerItem === 'aloo chips') {
            emoji = '🥔🍟';
        } else if (lowerItem === 'boiled egg') {
            emoji = '🥚';
        } else if (lowerItem === 'channa masala') {
            emoji = '🫘🍛';
        } else if (lowerItem === 'chicken curry') {
            emoji = '🍗🍛';
        } else if (lowerItem === 'tindle masala') {
            emoji = '🌱🍛';
        } else if (lowerItem === 'beans carrot kurma') {
            emoji = '🫘🥕🍛';
        } else if (lowerItem === 'carrot beans white peas dry') {
            emoji = '🥕🫘🌿';
        } else if (lowerItem === 'veg sambar') {
            emoji = '🍛🥦';
        } else if (lowerItem === 'sambar') {
            emoji = '🍛';
        } else if (lowerItem === 'rasam') {
            emoji = '🍲';
        } else if (lowerItem === 'egg curry') {
            emoji = '🍳🍛';
        } else if (lowerItem === 'pappu saru') {
            emoji = '🥣🌿';
        } else if (lowerItem === 'peanut chutney') {
            emoji = '🥜🥣';
        } else if (lowerItem === 'coconut chutney') {
            emoji = '🥥🥣';
        } else if (lowerItem === 'ginger palli chutney') {
            emoji = '🌿🥜';
        } else if (lowerItem === 'garlic coconut chutney') {
            emoji = '🧄🥥';
        } else if (lowerItem === 'mirchi palli chutney') {
            emoji = '🌶️🥜';
        } else if (lowerItem === 'ginger coconut chutney') {
            emoji = '🌿🥥';
        } else if (lowerItem === 'garlic peanut chutney') {
            emoji = '🧄🥜';
        } else if (lowerItem === 'dal tadka') {
            emoji = '🫘🌶️';
        } else if (lowerItem === 'rajma dal') {
            emoji = '🫘🍛';
        } else if (lowerItem === 'dal panchratan') {
            emoji = '🫘🌟';
        } else if (lowerItem === 'yellow moong dal fry') {
            emoji = '🌼🍲';
        } else if (lowerItem === 'yellow dal') {
            emoji = '🌼🍲';
        } else if (lowerItem === 'masala dal') {
            emoji = '🌶️🫘';
        } else if (lowerItem === 'vankai pachadi') {
            emoji = '🍆🥣';
        } else if (lowerItem === 'dhondakai pachadi') {
            emoji = '🍃🥣';
        } else if (lowerItem === 'onion pachadi') {
            emoji = '🧅🥣';
        } else if (lowerItem === 'soorakai pachadi') {
            emoji = '🍈🥣';
        } else if (lowerItem === 'gongura pachadi') {
            emoji = '🌿🥣';
        } else if (lowerItem === 'bendakai pachadi') {
            emoji = '🍳🥣';
        } else if (lowerItem === 'kandhi pachadi') {
            emoji = '🌱🥣';
        } else if (lowerItem === 'curd') {
            emoji = '🍶';
        } else if (lowerItem === 'mango pickle') {
            emoji = '🥭🥣';
        } else if (lowerItem === 'cauliflower pickle') {
            emoji = '🥦🥣';
        } else if (lowerItem === 'banana') {
            emoji = '🍌';
        } else if (lowerItem === 'fried rice') {
            emoji = '🍚🍳';
        } else if (lowerItem === 'semiya kesari') {
            emoji = '🍮🍝';
        } else if (lowerItem === 'crispy fried potato') {
            emoji = '🍟';
        } else if (lowerItem === 'pani poori') {
            emoji = '🥟';
        } else if (lowerItem === 'dilpasand') {
            emoji = '🍰';
        } else if (lowerItem === 'masala palli') {
            emoji = '🌶️🥜';
        } else if (lowerItem === 'pastry') {
            emoji = '🍰';
        } else if (lowerItem === 'basundi') {
            emoji = '🍮';
        } else if (lowerItem === 'mirchi bajji') {
            emoji = '🌶️🍘';
        } else if (lowerItem === 'biscuits') {
            emoji = '🍪';
        } else if (lowerItem === 'tea & milk') {
            emoji = '☕🥛';
        } else if (lowerItem === 'badam milk') {
            emoji = '🥛🌰';
        } else if (lowerItem === 'onion dosa') {
            emoji = '🧅🥞';
        } else if (lowerItem === 'rava upma') {
            emoji = '🍛';
        } else if (lowerItem === 'attukulu') {
            emoji = '🌾';
        } else if (lowerItem === 'uthappam') {
            emoji = '🥞';
        } else if (lowerItem === 'semiya bhath') {
            emoji = '🍜';
        } else if (lowerItem === 'mysore bajji') {
            emoji = '🍽️';
        } else if (lowerItem === 'aloo paratha') {
            emoji = '🥔🫓';
        } else if (lowerItem === 'punugulu') {
            emoji = '🍘';
        } else if (lowerItem === 'wheat rava upma') {
            emoji = '🍲';
        } else if (lowerItem === 'masala pesarattu') {
            emoji = '🌱';
        } else if (lowerItem === 'attukulu upma') {
            emoji = '🌾';
        } else if (lowerItem === 'wheat veg upma') {
            emoji = '🥦🍲';
        } else if (lowerItem === 'tomato rawa bhath') {
            emoji = '🍅🍛';
        } else if (lowerItem === 'tomato bhath') {
            emoji = '🍅🍚';
        } else if (lowerItem === 'tiffin sambar') {
            emoji = '🍲';
        } else if (lowerItem === 'peanut chutney') {
            emoji = '🥜';
        } else if (lowerItem === 'coconut chutney') {
            emoji = '🥥';
        } else if (lowerItem === 'ginger palli chutney') {
            emoji = '🌶️';
        } else if (lowerItem === 'garlic coconut chutney') {
            emoji = '🧄🥥';
        } else if (lowerItem === 'mirchi palli chutney') {
            emoji = '🌶️';
        } else if (lowerItem === 'ginger coconut chutney') {
            emoji = '🥥🌶️';
        } else if (lowerItem === 'garlic peanut chutney') {
            emoji = '🧄🥜';
        } else if (lowerItem === 'mint chutney') {
            emoji = '🌿';
        } else if (lowerItem === 'onion chutney') {
            emoji = '🧅';
        } else if (lowerItem === 'tomato chutney') {
            emoji = '🍅';
        } else if (lowerItem === 'coriander chutney') {
            emoji = '🌿';
        } else if (lowerItem === 'ginger chutney') {
            emoji = '🌶️';
        } else if (lowerItem === 'dal chutney') {
            emoji = '🫘';
        } else if (lowerItem === 'onion tomato chutney') {
            emoji = '🧅🍅';
        } else if (lowerItem === 'jam') {
            emoji = '🍓';
        } else if (lowerItem === 'bread') {
            emoji = '🍞';
        } else if (lowerItem === 'cornflakes') {
            emoji = '🥣';
        } else if (lowerItem === 'veg sprouts') {
            emoji = '🥗';
        } else if (lowerItem === 'veg salad') {
            emoji = '🥗';
        } else if (lowerItem === 'mayonnaise') {
            emoji = '🥄';
        } else if (lowerItem === 'tomato sauce') {
            emoji = '🍅';
        } else if (lowerItem === 'aloo pattani kurma') {
            emoji = '🥔🍲';
        } else if (lowerItem === 'mix veg curry') {
            emoji = '🥦🍛';
        } else if (lowerItem === 'milk') {
            emoji = '🥛';
        } else if (lowerItem === 'coffee') {
            emoji = '☕';
        } else if (lowerItem === 'lemon pickle') {
            emoji = '🍋';
        }

        // General checks (less specific) - placed after specific checks
        else if (lowerItem.includes('rice')) {
            emoji = '🍚';
        } else if (lowerItem.includes('sambar') || lowerItem.includes('curry') || lowerItem.includes('sabzi') || lowerItem.includes('kurma') || lowerItem.includes('rasam') || lowerItem.includes('kitchadi') || lowerItem.includes('bhath') || lowerItem.includes('upma')) {
            emoji = '🥘'; // Using general curry/soup emoji for various liquid/mixed dishes
        } else if (lowerItem.includes('chutney')) {
            emoji = '🌶️';
        } else if (lowerItem.includes('dal')) {
            emoji = '🥣';
        } else if (lowerItem.includes('chapati') || lowerItem.includes('puri') || lowerItem.includes('paratha') || lowerItem.includes('dosa') || lowerItem.includes('uthappam')) {
            emoji = '🥞'; // Using pancake emoji for flatbreads and dosas/uthappam
        } else if (lowerItem.includes('tea')) {
            emoji = '☕';
        } else if (lowerItem.includes('curd') || lowerItem.includes('raita') || lowerItem.includes('milk')) {
            emoji = '🥛'; // Using milk emoji for dairy/cool items
        } else if (lowerItem.includes('salad') || lowerItem.includes('sprouts')) {
            emoji = '🥗';
        } else if (lowerItem.includes('chicken')) {
            emoji = '🍗';
        } else if (lowerItem.includes('paneer')) {
            emoji = '🧀';
        } else if (lowerItem.includes('egg')) {
            emoji = '🥚';
        } else if (lowerItem.includes('bread')) {
            emoji = '🍞';
        } else if (lowerItem.includes('cornflex') || lowerItem.includes('corn flakes')) {
            emoji = '🌽';
        } else if (lowerItem.includes('jam')) {
            emoji = '🥫';
        } else if (lowerItem.includes('pickle')) {
            emoji = '🥭'; // Fallback for other pickles
        } else if (lowerItem.includes('potato') || lowerItem.includes('alu')) {
            emoji = '🥔';
        } else if (lowerItem.includes('capsicum')) {
            emoji = '🫑';
        } else if (lowerItem.includes('cabbage')) {
            emoji = '🥬';
        } else if (lowerItem.includes('peas') || lowerItem.includes('channa') || lowerItem.includes('rajma')) {
            emoji = '🫘';
        } else if (lowerItem.includes('tomato')) {
            emoji = '🍅';
        } else if (lowerItem.includes('ginger') || lowerItem.includes('mirchi') || lowerItem.includes('pepper')) {
            emoji = '🌶️';
        } else if (lowerItem.includes('garlic')) {
            emoji = '🧄';
        } else if (lowerItem.includes('mint') || lowerItem.includes('coriander')) {
            emoji = '🌿';
        } else if (lowerItem.includes('onion')) {
            emoji = '🧅';
        } else if (lowerItem.includes('mayonnaise')) {
            emoji = '🥄';
        } else if (lowerItem.includes('fryams')) {
            emoji = '🍥';
        } else if (lowerItem.includes('millet')) {
            emoji = '🌾';
        } else if (lowerItem.includes('louki')) {
            emoji = '🍈';
        } else if (lowerItem.includes('dondakai')) {
            emoji = '🍃';
        } else if (lowerItem.includes('sorakai')) {
            emoji = '🍈';
        }

        menuItem.innerHTML = `
            <h4>${emoji} ${item}</h4>
        `;
        container.appendChild(menuItem);
    });
}

// Get current day
function getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
}

// Page transition
function showPage(pageId) {
    console.log('showPage called with pageId:', pageId);
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    console.log('Total pages found:', pages.length);
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('inactive');
        console.log('Hiding page:', page.id);
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    console.log('Selected page element:', selectedPage);
    if (selectedPage) {
        selectedPage.classList.remove('inactive');
        selectedPage.classList.add('active');
        console.log('Showing page:', selectedPage.id);
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === `showPage('${pageId}')`) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
    console.log('Scrolled to top.');
}

// Add event listeners
function addEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Navigation link clicks
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const pageId = link.getAttribute('data-page');

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show the corresponding page or contact details
            if (pageId === 'contact-page') {
                showContactDetails();
            } else {
                showPage(pageId);
            }
        });
    });

    // Back to Hostels button clicks (for About and Contact pages)
    document.addEventListener('click', (event) => {
        if (event.target.closest('.back-to-hostels-btn')) {
            showPage('home-page');
        }
    });
}

// Show contact details
function showContactDetails() {
    // Make sure contact page exists
    if (!document.getElementById('contact-page')) {
        initializeContactPage();
    }
    
    // Show contact page
    showPage('contact-page');
    
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent === 'Contact') {
            link.classList.add('active');
        }
    });
}

// Add category filter buttons
function addCategoryFilters() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-filters';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-category="all">All Hostels</button>
        <button class="filter-btn" data-category="boys-campus">Boys In-Campus</button>
        <button class="filter-btn" data-category="boys-outside">Boys Outside</button>
        <button class="filter-btn" data-category="girls">Girls Hostels</button>
    `;
    
    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(filterContainer, document.querySelector('.hostels-grid'));
    
    // Add click events to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter hostels
            const category = button.getAttribute('data-category');
            filterHostels(category);
        });
    });
}

// Filter hostels by category
function filterHostels(category) {
    const hostelCards = document.querySelectorAll('.hostel-card');
    hostelCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add back to home button
function addBackToHomeButton() {
    const backButton = document.createElement('a');
    
    // Detect if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Set the appropriate path based on device type
    backButton.href = isMobile ? '/klu2/mobile_page2.html' : '/index.html';
    
    backButton.className = 'back-to-home';
    backButton.innerHTML = '<i class="fas fa-home"></i> Back to Home';
    
    const mainContent = document.querySelector('.main-content');
    mainContent.appendChild(backButton);
}
