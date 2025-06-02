// Bus routes data
const busRoutes = [
    // Vijayawada Morning Routes
    { id: 1, shift: "Morning", location: "Vijayawada", routeId: "1A", route: "Vuyyuru", timing: "05:40 AM", stages: "KCP Quarters, Vuyyuru Bus Stand, Vuyyuru centre, Gandigunta, China Ogirala, Akunuru, Nepalli, Davuluru Toll Plaza, Proddutur X Road" },
    { id: 2, shift: "Morning", location: "Vijayawada", routeId: "1B", route: "Kankipadu", timing: "06:00 AM", stages: "Kankipadu HP Bunk, Kankipadu Bus Stand, Kankipadu Centre (theatre), Gosala, Edupugallu, Ganguru, Chapalakundelu" },
    { id: 3, shift: "Morning", location: "Vijayawada", routeId: "1C", route: "Penamaluru", timing: "06:10 AM", stages: "Penamaluru Centre, Srinivasa Theatre, Sitapuram Colony, Krishnaveni School, Poranki, Thumula Centre, Capital Hospital" },
    { id: 4, shift: "Morning", location: "Vijayawada", routeId: "1D", route: "Tadigadapa", timing: "06:15 AM", stages: "Tadigadapa, VRSEC, Kamaiahthopu" },
    { id: 5, shift: "Morning", location: "Vijayawada", routeId: "1E", route: "Time Hospital", timing: "06:20 AM", stages: "Pappulamillu, Time hospital, Chowdary peta, Old Checkpost" },
    { id: 6, shift: "Morning", location: "Vijayawada", routeId: "1F", route: "Autonagar", timing: "06:20 AM", stages: "Autonagar Gate, High School Road" },
    { id: 7, shift: "Morning", location: "Vijayawada", routeId: "1G", route: "Patamata", timing: "06:20 AM", stages: "Postal Colony, Patamata, NTR Circle" },
    { id: 8, shift: "Morning", location: "Vijayawada", routeId: "1H", route: "Eenadu", timing: "06:25 AM", stages: "Eenadu, SVS Kalyanamadapam, Screw Bridge, Balaji Nagar, Ice Factory" },
    { id: 9, shift: "Morning", location: "Vijayawada", routeId: "5A", route: "Varun Motors", timing: "06:25 AM", stages: "Varun Motors, P&T Quarters, DV Manor, Kandhari (Murali Fortune) Hotel, Chennupati Petrol Bunk, Veterinary Hospital, Manipal Hospital, Morning Star, Aravinda School, Srinivasa Apartment" },
    { id: 10, shift: "Morning", location: "Vijayawada", routeId: "2A", route: "ESI", timing: "06:20 AM", stages: "ESI, Gunadala Vanthena, Gunadala Centre, Padavalrev Centre, Machavaram Down, Machavaram Temple, SRR College, Maruthi Nagar, Chuttugunta BSNL, Seetharampuram Signal" },
    { id: 11, shift: "Morning", location: "Vijayawada", routeId: "3AB", route: "ITI Bus Stop", timing: "06:25 AM", stages: "ITI Bus Stop, SBI Bank Centre, Sunnapubattelu, Sidhartha Arts College, Jammichettu, Madhu Gardens, Sikhamani Centre, Red Circle, CP Bunglow, Lemon Tree Park" },
    { id: 12, shift: "Morning", location: "Vijayawada", routeId: "4A", route: "Gannavaram", timing: "05:50 AM", stages: "Athukuru, Pedda Avutupalli, Chinna Avutupalli, Vidya Nagar, Venkateswara Theatre, Gandhi Bomma Centre, Down Centre Gannavaram, Kesarapalli Cheruvu, Kesarapalli Centre, Gudavalli Centre, Nidamanuru Bypass, Rama Nagar" },
    { id: 13, shift: "Morning", location: "Vijayawada", routeId: "4B", route: "Enikepadu", timing: "06:15 AM", stages: "Enikepadu Ramalayam, Bank Centre, SRK, SER Centre, Old Toyota (Prasadampadu)" },
    { id: 14, shift: "Morning", location: "Vijayawada", routeId: "4C", route: "Ramavarapadu", timing: "06:20 AM", stages: "Ankamma Temple, Ramavarapadu Old Check Post (Bunk), Currency Nagar, NTR University" },
    { id: 15, shift: "Morning", location: "Vijayawada", routeId: "4D", route: "Bank Colony", timing: "06:25 AM", stages: "Bank Colony, Novotel Hotel, Old Ramesh Hospital, Stella College, Matha Towers" },
    { id: 16, shift: "Morning", location: "Vijayawada", routeId: "6A", route: "Kandrika", timing: "06:00 AM", stages: "Cheruvu Centre, Bodapadu, Power Grid, Kandrika X Road, Payakapuram, Prakash Nagar" },
    { id: 17, shift: "Morning", location: "Vijayawada", routeId: "6B", route: "Ajit Singh Nagar", timing: "06:15 AM", stages: "Pipula Road, K L Rao Road, American Hospital (Ajit Singh Nagar)" },
    { id: 18, shift: "Morning", location: "Vijayawada", routeId: "6C", route: "Budameru Bridge", timing: "06:20 AM", stages: "Dabakotlu Road, Budameru Bridge, Raghavendra Theatre" },
    { id: 19, shift: "Morning", location: "Vijayawada", routeId: "6D", route: "Prabhas College", timing: "06:20 AM", stages: "Prabhas College, Mesala Raja Rao Bridge, Ambedkar Bomma, EluruLakulu, Challapalli Bunglow" },
    { id: 20, shift: "Morning", location: "Vijayawada", routeId: "6E", route: "Food Junction", timing: "06:20 AM", stages: "Food Junction (Sangetha Kalasala), Kothavanthena (Bavajipeta), Gandhi Nagar Inox, Alankar Theatre" },
    { id: 21, shift: "Morning", location: "Vijayawada", routeId: "6F", route: "Madhura Nagar", timing: "06:20 AM", stages: "Madhura Nagar, Kothavanthena, Vijaya Talkies, Rama Mandiram, Apsara Theatre" },
    { id: 22, shift: "Morning", location: "Vijayawada", routeId: "7A", route: "Mulapadu", timing: "05:40 AM", stages: "Mulapadu Centre, Kelesapuram, Jupudi, Kodapalli Sai Baba Temple, B Colony, A Colony" },
    { id: 23, shift: "Morning", location: "Vijayawada", routeId: "7B", route: "Tummalapalem", timing: "06:05 AM", stages: "IBM, Tummalapalem, Khazipeta, Guntupalli Centre, Wagon Work Shop Road, Ramesh Nagar, Nallakunta, Ayyappa Nagar" },
    { id: 24, shift: "Morning", location: "Vijayawada", routeId: "7C", route: "Gollapudi", timing: "06:10 AM", stages: "Gollapudi One Centre, Mylurai Centre, Andhra Hospital, Venkateswara Foundries, Swathi Theatres" },
    { id: 25, shift: "Morning", location: "Vijayawada", routeId: "7D", route: "Sivalayam", timing: "06:15 AM", stages: "Sivalayam, Church Centre, Sitara" },
    { id: 26, shift: "Morning", location: "Vijayawada", routeId: "7E", route: "Chittinagar", timing: "06:20 AM", stages: "Kabela, Milk Factory, Chittinagar, Srinivas Mahal" },
    { id: 27, shift: "Morning", location: "Vijayawada", routeId: "7F", route: "Panja Centre", timing: "06:20 AM", stages: "Panja Centre, Rajakumari Theatre, K.R Market, Old Government Hospital, BandharLakulu, Fire Station, American Hospital" },

    // Guntur Morning Routes
    { id: 28, shift: "Morning", location: "Guntur", routeId: "8A", route: "Vengalayapalem", timing: "05:35 AM", stages: "Vengalayapalem X Road, Nallapadu, Sri Ram Nagar, Chuttugunta Circle" },
    { id: 29, shift: "Morning", location: "Guntur", routeId: "8B", route: "Housing Board", timing: "05:35 AM", stages: "Housing Board Main Road, A T Agraharam" },
    { id: 30, shift: "Morning", location: "Guntur", routeId: "8C", route: "ITC", timing: "05:45 AM", stages: "ITC, Ethu Road, Cine Prime, Old Bus Stand, Market" },
    { id: 31, shift: "Morning", location: "Guntur", routeId: "8D", route: "Stambhalagaruvu", timing: "05:35 AM", stages: "Stambhalagaruvu, Syamalanagar 4 rth line, Recruitment Office, Pattabhipuram Petrol Bunk, Swamy Theatre, TJPS, Collector Office, 3 Bommala Centre" },
    { id: 32, shift: "Morning", location: "Guntur", routeId: "8E", route: "Hanumaiah Company", timing: "05:35 AM", stages: "Hanumaiah Company, Rajendra Nagar, Venkateswara Swamy Temple, Gardens Centre (NTR Stadium)" },
    { id: 33, shift: "Morning", location: "Guntur", routeId: "8F", route: "Sitaramaiah School", timing: "05:40 AM", stages: "Sitaramaiah School, Bakers Fun, KFC, Union Bank, Shankar Vilas" },
    { id: 34, shift: "Morning", location: "Guntur", routeId: "8G", route: "SVN Colony", timing: "05:35 AM", stages: "SVN Colony 6th line, Gujjanagundla Centre, Chalapathi Grounds" },
    { id: 35, shift: "Morning", location: "Guntur", routeId: "8H", route: "Guest House", timing: "05:40 AM", stages: "Guest House, Golden Gym, Vidyanagar 1 st line, Sai Baba Road" },
    { id: 36, shift: "Morning", location: "Guntur", routeId: "8I", route: "Koratipadu", timing: "05:45 AM", stages: "Koratipadu, Lodge Centre, SBI, Ala Hospital" },
    { id: 37, shift: "Morning", location: "Guntur", routeId: "8J", route: "Anjaneya Swamy Gudi", timing: "05:50 AM", stages: "Anjaneya Swamy Gudi, Medical Hostel, Nagaralu School" },
    { id: 38, shift: "Morning", location: "Guntur", routeId: "8K", route: "Chillies Dhabha", timing: "05:55 AM", stages: "Chillies Dhabha, Vijaya Digitals, VAR Gardens, Sri Chaitanya School (Reddy Palem), Reliance Petrol Bunk" },
    { id: 39, shift: "Morning", location: "Guntur", routeId: "8L", route: "Padmaja Petrol Bunk", timing: "06:00 AM", stages: "Padmaja Petrol Bunk, SIMS College" },
    { id: 40, shift: "Morning", location: "Guntur", routeId: "8M", route: "Peda Kakani", timing: "05:55 AM", stages: "Peda Kakani Police Station, Peda Kakani Centre, Nambur Main Road, Rain Tree Park, ANU, Kaza, Venkata Reddy Palem (Murugan Hotel), Chinna Kakani (Hai Land), NRI Hospital (Y Juntion)" },
    { id: 41, shift: "Morning", location: "Guntur", routeId: "8N", route: "NTR Bus Stand", timing: "06:00 AM", stages: "NTR Bus Stand" },
    { id: 42, shift: "Morning", location: "Guntur", routeId: "8O", route: "NTR Bus Stand", timing: "06:00 AM", stages: "NTR Bus Stand" },

    // Tenali Morning Routes
    { id: 43, shift: "Morning", location: "Tenali", routeId: "9A", route: "Chinnaravuri Park", timing: "05:40 AM", stages: "Chinnaravuri Park, Swaraj Talkies, Bilal Hotel" },
    { id: 44, shift: "Morning", location: "Tenali", routeId: "9B", route: "Montessori", timing: "05:40 AM", stages: "Montessori, Sivaji Bomma, ASN College" },
    { id: 45, shift: "Morning", location: "Tenali", routeId: "9C", route: "Angalakuduru", timing: "05:40 AM", stages: "Angalakuduru, Sultanabad, Chenchupeta, Railway Station Road" },
    { id: 46, shift: "Morning", location: "Tenali", routeId: "9D", route: "Bus Stand", timing: "05:50 AM", stages: "Bus Stand, VSR & NVR College, Katevaram, Somasundarapalem, Nandivelagu X Roads, Chintalapudi, Duggirala Lakulu, Duggirala HP Gas Agency, CCL Factory, Tummapudi, Revendrapadu Vanthena, Pedavadlapudi Centre, Atmakur By Pass" },

    // Thulluru Morning Routes
    { id: 47, shift: "Morning", location: "Thulluru", routeId: "8T", route: "Thulluru", timing: "05:50 AM", stages: "Dondapadu, Thulluru Tidko Houses, Thulluru, Rayapudi, High Court Road, Modilingaya Palem, Velagapudi, Malkapuram, Mandadam, Venkatapalem X Road, Krishnayapalem, Penumaka Boddu Rai Centre, Undavalli Village, Undavalli Centre, Sitanagaram Work Shop, Tadepalli Boys Hostel" }
];

// Update current date
function updateDate() {
    const dateDisplay = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    dateDisplay.textContent = currentDate;
}

// Populate routes table
function populateRoutesTable(location = 'all') {
    const tableBody = document.getElementById('routes-table-body');
    tableBody.innerHTML = '';

    const filteredRoutes = location === 'all' 
        ? busRoutes 
        : busRoutes.filter(route => route.location.toLowerCase() === location.toLowerCase());

    filteredRoutes.forEach(route => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${route.id}</td>
            <td>${route.shift}</td>
            <td>${route.location}</td>
            <td>${route.routeId}</td>
            <td>${route.route}</td>
            <td>${route.timing}</td>
            <td>${route.stages}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Page navigation
function initializeNavigation() {
    const headerNavLinks = document.querySelectorAll('.nav-links a');
    const homePageLinks = document.querySelectorAll('.home-page-links a');
    const allNavLinks = [...headerNavLinks, ...homePageLinks];
    
    const pages = document.querySelectorAll('.page');
    const backButtons = document.querySelectorAll('.back-button.back-to-home-btn');
    const routeNavButtons = document.querySelectorAll('.route-nav-btn');

    let currentPage = 'home-page';

    function showPage(pageId) {
        if (currentPage === pageId) return; // Prevent unnecessary transitions

        // Hide current page
        const currentPageElement = document.getElementById(currentPage);
        if (currentPageElement) {
            currentPageElement.classList.remove('active');
            currentPageElement.classList.add('inactive');
        }

        // Show new page
        const newPageElement = document.getElementById(pageId);
        if (newPageElement) {
            newPageElement.classList.remove('inactive');
            newPageElement.classList.add('active');
            currentPage = pageId;
        }

        // Update active nav link
        headerNavLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // If routes page is shown, populate the table
        if (pageId === 'routes-page') {
            populateRoutesTable();
        }

        // Scroll to top of the page
        window.scrollTo(0, 0);
    }

    // Handle all relevant link clicks
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const pageId = link.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // Handle back button clicks for all back buttons
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            showPage('home-page');
        });
    });

    // Handle back to main page button click
    const backToMainButton = document.querySelector('.back-to-main-btn');
    if (backToMainButton) {
        backToMainButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default button behavior
            window.location.href = '/'; // Use root path instead of relative path
        });
    }

    // Handle route navigation buttons
    routeNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            routeNavButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter routes
            const location = button.getAttribute('data-location');
            populateRoutesTable(location);
        });
    });

    // Initialize with home page
    showPage('home-page');
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    initializeNavigation();
}); 