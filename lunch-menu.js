
const menuData = [
    {
        date: "03-Mar-2025",
        category: "Western",
        dish: "Grilled Chicken wings w/ BBQ sauce/ Cheese sticks",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=146&filename=Grilled Chicken wings with BBQ sauce.jpg"
    },
    {
        date: "03-Mar-2025",
        category: "Asian",
        dish: "Bun Cha & spring rolls",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=40&filename=bun cha.JPG"
    },
    {
        date: "04-Mar-2025",
        category: "Western",
        dish: "Fried Chicken Legs w/ Orange Sauce/ Meat Pie",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=404&filename=Meat Pie.jpg"
    },
    {
        date: "04-Mar-2025",
        category: "Asian",
        dish: "Australian beef w/ Vegetables in Black pepper sauce/ Steamed rice/ Bao Buns",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=36&filename=bò sốt tiêu đen.jpg"
    },
    {
        date: "06-Mar-2025",
        category: "Western",
        dish: "Baked Australian Beef Steak w/ Cheese",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=405&filename=Baked Australian Beef Steak w Cheese.jpg"
    },
    {
        date: "06-Mar-2025",
        category: "Asian",
        dish: "Hainanese Chicken rice/ Steamed Shrimp Dumplings",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=261&filename=Hainanese chicken rice.JPG"
    },
    {
        date: "07-Mar-2025",
        category: "Western",
        dish: "Hot dog w Onion rings/ Mixed Fresh Fruits Salad",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=61&filename=W_Hot dog 3.jpg"
    },
    {
        date: "07-Mar-2025",
        category: "Asian",
        dish: "Fried Noodle & Beef and Vegetables/ Pork Skewers",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=359&filename=fried fresh noodles vegetable.jpg"
    },
    {
        date: "10-Mar-2025",
        category: "Western",
        dish: "Chicken Parmigiana/ Butter pasta",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=101&filename=Chicken parmigiana.jpg"
    },
    {
        date: "10-Mar-2025",
        category: "Asian",
        dish: "Gyudon (Beef rice bowl Japanese style)/ Grilled Pork Skewers",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=395&filename=Gyudon.jpg"
    },
    {
        date: "11-Mar-2025",
        category: "Western",
        dish: "Smoked pulled BBQ pork meat/ Rolled bread/ French Fries",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=318&filename=Sweet smoky pulled pork sandwiches.jpg"
    },
    {
        date: "11-Mar-2025",
        category: "Asian",
        dish: "Fried Chicken w/ Tonkatsu sauce/ Steamed rice/ Tuna Sushi",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=314&filename=Fried chicken Tonkatsu sauce.JPG"
    },
    {
        date: "12-Mar-2025",
        category: "Western",
        dish: "Bolognese Spaghetti/Chicken nugget",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=175&filename=Bolognese-spagetti.jpg"
    },
    {
        date: "12-Mar-2025",
        category: "Asian",
        dish: "Bibimbap/ Fried Chicken & Gochujang Sauce",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=270&filename=Bibimbap.JPG"
    },
    {
        date: "13-Mar-2025",
        category: "Western",
        dish: "Tuna & Egg Sandwich/ Onion Ring",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=396&filename=Tuna n Egg Sandwhich.jpg"
    },
    {
        date: "13-Mar-2025",
        category: "Asian",
        dish: "Bun Thang (Vermicelli and Chicken Soup)/ Fried chicken wings w/ Banana leafs",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=364&filename=Bun Thang.jpg"
    },
    {
        date: "14-Mar-2025",
        category: "Western",
        dish: "Mozzarella Cheese Burger/ Bacon/ Baked tomato & Cheese",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=347&filename=W_Mozzarella Cheese Burger 2.jpg"
    },
    {
        date: "14-Mar-2025",
        category: "Asian",
        dish: "Chicken curry/ Steamed rice/ Nan breads",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=388&filename=Chicken curry n Steamed rice n Nan breads n Mash potato balls.jpg"
    },
    {
        date: "17-Mar-2025",
        category: "Western",
        dish: "Chorizo pepper Pizza/ French fries",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=55&filename=pizza (2).JPG"
    },
    {
        date: "17-Mar-2025",
        category: "Asian",
        dish: "Shoyu Ramen Noodle/ Grilled Chicken w Honey sauce",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=280&filename=Shoyu Ramen noodle.jpg"
    },
    {
        date: "18-Mar-2025",
        category: "Western",
        dish: "Seafood Pasta/ Garlic Bread/ Cheese Ball",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=397&filename=Seafood Pasta.jpg"
    },
    {
        date: "18-Mar-2025",
        category: "Asian",
        dish: "Fried Chicken Rice/Minced Meat w Seawed Rools",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=412&filename=Fried Chicken Rice.jpg"
    },
    {
        date: "19-Mar-2025",
        category: "Western",
        dish: "Stewed beef & Vegetable / Breads",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=85&filename=stewed beef bread.jpg"
    },
    {
        date: "19-Mar-2025",
        category: "Asian",
        dish: "Jajangmyeon/ Rolled bacon & Mushroom",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=301&filename=Jajangmyeon n Rolled bacon n Mushroom.jpg"
    },
    {
        date: "20-Mar-2025",
        category: "Western",
        dish: "Garlic Fresh Prawn Spaghetti/ Bread/ Cheese sticks",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=189&filename=Garlic Fresh Prawn Spaghetti.jpeg"
    },
    {
        date: "20-Mar-2025",
        category: "Asian",
        dish: "Kimchi fried rice/ Australian beef / Minced Meat & Sunny side up",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=206&filename=Kimchi-Fried-Rice-The-Chutney-Life-18-1024x683.jpg"
    },
    {
        date: "21-Mar-2025",
        category: "Western",
        dish: "Chicken wrap",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=57&filename=IMG_1864.JPG"
    },
    {
        date: "21-Mar-2025",
        category: "Asian",
        dish: "'Phở' Chicken w/ fresh prawn spring rolls",
        imageUrl: "http://canteen.stpaulhanoi.com//abcd.php?id=43&filename=DSC_0007.JPG"
    }
];


const datePicker = document.getElementById('date-picker');
const showTodayBtn = document.getElementById('show-today');
const prevDayBtn = document.getElementById('prev-day');
const nextDayBtn = document.getElementById('next-day');
const currentDateDiv = document.getElementById('current-date');
const menuContainer = document.getElementById('menu-container');
const messageDiv = document.getElementById('message');


const availableDates = [...new Set(menuData.map(item => item.date))].map(dateStr => new Date(dateStr));
availableDates.sort((a, b) => a - b);

const minDate = availableDates[0];
const maxDate = availableDates[availableDates.length - 1];


function formatDateForInput(date) {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
}

datePicker.min = formatDateForInput(minDate);
datePicker.max = formatDateForInput(maxDate);


function initializeWithTodayDate() {
    const today = new Date();

    const options = { timeZone: 'Asia/Ho_Chi_Minh' };
    const hanoiTime = today.toLocaleString('en-US', options);
    const hanoiDate = new Date(hanoiTime);
    
        const closestDate = findClosestAvailableDate(hanoiDate);
    

    datePicker.value = formatDateForInput(closestDate);
    

    displayMenuForSelectedDate(true);
}


function findClosestAvailableDate(targetDate, searchForward = true) {

    const targetDateStr = formatDateForComparison(targetDate);
    

    const hasMenu = menuData.some(item => item.date === targetDateStr);
    if (hasMenu) return targetDate;
    

    let closestDate = null;
    let minDiff = Infinity;
    
    if (searchForward) {
     
        for (const date of availableDates) {
            if (date > targetDate) {
                return date; 
            }
        }
        // If we reach here, there's no future date, return the last available date
        return availableDates[availableDates.length - 1];
    } else {
        // Look for the previous available date
        for (let i = availableDates.length - 1; i >= 0; i--) {
            if (availableDates[i] < targetDate) {
                return availableDates[i]; // Return the first date that's before the target
            }
        }
        // If we reach here, there's no previous date, return the first available date
        return availableDates[0];
    }
}

// Format date for display
function formatDateForDisplay(dateStr) {
    const date = new Date(dateStr);
    const options = { 
        weekday: 'long',
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
    };
    
    return date.toLocaleDateString('en-GB', options);
}

// Format date for comparison with menu data
function formatDateForComparison(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
}

// Display menu for selected date
function displayMenuForSelectedDate(autoSkip = false) {
    const selectedDate = datePicker.value;
    if (!selectedDate) return;
    
    // Create date object from selected date
    const dateObj = new Date(selectedDate);
    
    // Format date for comparison
    const formattedDate = formatDateForComparison(selectedDate);
    
    // Get menu items for the selected date
    const dateMenu = menuData.filter(item => item.date === formattedDate);
    
    // If no menu and autoSkip is true, find next available date
    if (dateMenu.length === 0 && autoSkip) {
        const nextAvailableDate = findClosestAvailableDate(dateObj);
        datePicker.value = formatDateForInput(nextAvailableDate);
        
        // Show a message about redirecting
        messageDiv.textContent = `No menu found for ${formattedDate}. Showing the next available menu.`;
        
        // Call display again but without auto-skip to avoid infinite loop
        return displayMenuForSelectedDate(false);
    }
    
    // Set current date display
    currentDateDiv.textContent = formatDateForDisplay(selectedDate);
    
    // Clear the container
    menuContainer.innerHTML = '';
    
    // Display menu or "No menu" message
    if (dateMenu.length > 0) {
        dateMenu.forEach(menu => {
            const menuCard = document.createElement('div');
            menuCard.className = 'menu-card';
            
            const categoryClass = menu.category.toLowerCase();
            
            menuCard.innerHTML = `
                <div class="menu-header ${categoryClass}">${menu.category} Menu</div>
                <img src="${menu.imageUrl}" alt="${menu.dish}" class="menu-image" >
                <div class="menu-details">
                    <p>${menu.dish}</p>
                </div>
            `;
            
            menuContainer.appendChild(menuCard);
        });
        
        const dayOfWeek = new Date(selectedDate).getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            messageDiv.textContent = "Note: This is a weekend menu. Service hours may differ.";
        } else if (!messageDiv.textContent.includes("No menu found")) {
            messageDiv.textContent = "Enjoy your meal!";
        }
    } else {
        menuContainer.innerHTML = '<div class="no-menu">No menu available for this date.</div>';
        messageDiv.textContent = "The canteen might be closed on this day or the menu hasn't been updated. You can select another date or use the navigation buttons to find available menus.";
    }
}

// Navigate to previous day with menu
function navigateToPrevDay() {
    const currentDate = new Date(datePicker.value);
    currentDate.setDate(currentDate.getDate() - 1);
    
    // Find the previous available date with a menu
    const prevAvailableDate = findClosestAvailableDate(currentDate, false);

    if (prevAvailableDate >= minDate) {
        datePicker.value = formatDateForInput(prevAvailableDate);
        displayMenuForSelectedDate(false);
    }
}

// Navigate to next day with menu
function navigateToNextDay() {
    const currentDate = new Date(datePicker.value);
    currentDate.setDate(currentDate.getDate() + 1);
    
    // Find the next available date with a menu
    const nextAvailableDate = findClosestAvailableDate(currentDate, true);
    
    // Check if within range
    if (nextAvailableDate <= maxDate) {
        datePicker.value = formatDateForInput(nextAvailableDate);
        displayMenuForSelectedDate(false);
    }
}

// Handle date picker change
function onDatePickerChange() {
    displayMenuForSelectedDate(true); // Auto-skip to next available date if needed
}

// Event listeners
datePicker.addEventListener('change', onDatePickerChange);
showTodayBtn.addEventListener('click', initializeWithTodayDate);
prevDayBtn.addEventListener('click', navigateToPrevDay);
nextDayBtn.addEventListener('click', navigateToNextDay);

// Initialize on page load
window.onload = initializeWithTodayDate;