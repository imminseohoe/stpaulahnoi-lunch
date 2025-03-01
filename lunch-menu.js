const menuData = [
    {
        date: "03-Mar-2025",
        category: "Western",
        dish: "Grilled Chicken wings w/ BBQ sauce/ Cheese sticks",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851926/Grilled%20Chicken%20wings%20with%20BBQ%20sauce.jpg"
    },
    {
        date: "03-Mar-2025",
        category: "Asian",
        dish: "Bun Cha & spring rolls",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851928/bun%20cha.jpg"
    },
    {
        date: "04-Mar-2025",
        category: "Western",
        dish: "Fried Chicken Legs w/ Orange Sauce/ Meat Pie",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851930/Meat%20Pie.jpg"
    },
    {
        date: "04-Mar-2025",
        category: "Asian",
        dish: "Australian beef w/ Vegetables in Black pepper sauce/ Steamed rice/ Bao Buns",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851930/b%C3%B2%20s%E1%BB%91t%20ti%C3%AAu%20%C4%91en.jpg"
    },
    {
        date: "06-Mar-2025",
        category: "Western",
        dish: "Baked Australian Beef Steak w/ Cheese",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851931/Baked%20Australian%20Beef%20Steak%20w%20Cheese.jpg"
    },
    {
        date: "06-Mar-2025",
        category: "Asian",
        dish: "Hainanese Chicken rice/ Steamed Shrimp Dumplings",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851933/Hainanese%20chicken%20rice.jpg"
    },
    {
        date: "07-Mar-2025",
        category: "Western",
        dish: "Hot dog w Onion rings/ Mixed Fresh Fruits Salad",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851934/W_Hot%20dog%203.jpg"
    },
    {
        date: "07-Mar-2025",
        category: "Asian",
        dish: "Fried Noodle & Beef and Vegetables/ Pork Skewers",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851936/fried%20fresh%20noodles%20vegetable.jpg"
    },
    {
        date: "10-Mar-2025",
        category: "Western",
        dish: "Chicken Parmigiana/ Butter pasta",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851937/Chicken%20parmigiana.jpg"
    },
    {
        date: "10-Mar-2025",
        category: "Asian",
        dish: "Gyudon (Beef rice bowl Japanese style)/ Grilled Pork Skewers",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851938/Gyudon.jpg"
    },
    {
        date: "11-Mar-2025",
        category: "Western",
        dish: "Smoked pulled BBQ pork meat/ Rolled bread/ French Fries",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851939/Sweet%20smoky%20pulled%20pork%20sandwiches.jpg"
    },
    {
        date: "11-Mar-2025",
        category: "Asian",
        dish: "Fried Chicken w/ Tonkatsu sauce/ Steamed rice/ Tuna Sushi",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851941/Fried%20chicken%20Tonkatsu%20sauce.jpg"
    },
    {
        date: "12-Mar-2025",
        category: "Western",
        dish: "Bolognese Spaghetti/Chicken nugget",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851942/Bolognese-spagetti.jpg"
    },
    {
        date: "12-Mar-2025",
        category: "Asian",
        dish: "Bibimbap/ Fried Chicken & Gochujang Sauce",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851943/Bibimbap.jpg"
    },
    {
        date: "13-Mar-2025",
        category: "Western",
        dish: "Tuna & Egg Sandwich/ Onion Ring",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851945/Tuna%20n%20Egg%20Sandwhich.jpg"
    },
    {
        date: "13-Mar-2025",
        category: "Asian",
        dish: "Bun Thang (Vermicelli and Chicken Soup)/ Fried chicken wings w/ Banana leafs",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851945/Bun%20Thang.jpg"
    },
    {
        date: "14-Mar-2025",
        category: "Western",
        dish: "Mozzarella Cheese Burger/ Bacon/ Baked tomato & Cheese",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851946/W_Mozzarella%20Cheese%20Burger%202.jpg"
    },
    {
        date: "14-Mar-2025",
        category: "Asian",
        dish: "Chicken curry/ Steamed rice/ Nan breads",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851948/Chicken%20curry%20n%20Steamed%20rice%20n%20Nan%20breads%20n%20Mash%20potato%20balls.jpg"
    },
    {
        date: "17-Mar-2025",
        category: "Western",
        dish: "Chorizo pepper Pizza/ French fries",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851950/pizza%20%282%29.jpg"
    },
    {
        date: "17-Mar-2025",
        category: "Asian",
        dish: "Shoyu Ramen Noodle/ Grilled Chicken w Honey sauce",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851951/Shoyu%20Ramen%20noodle.jpg"
    },
    {
        date: "18-Mar-2025",
        category: "Western",
        dish: "Seafood Pasta/ Garlic Bread/ Cheese Ball",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851953/Seafood%20Pasta.jpg"
    },
    {
        date: "18-Mar-2025",
        category: "Asian",
        dish: "Fried Chicken Rice/Minced Meat w Seawed Rools",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851956/Fried%20Chicken%20Rice.jpg"
    },
    {
        date: "19-Mar-2025",
        category: "Western",
        dish: "Stewed beef & Vegetable / Breads",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851957/stewed%20beef%20bread.jpg"
    },
    {
        date: "19-Mar-2025",
        category: "Asian",
        dish: "Jajangmyeon/ Rolled bacon & Mushroom",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851959/Jajangmyeon%20n%20Rolled%20bacon%20n%20Mushroom.jpg"
    },
    {
        date: "20-Mar-2025",
        category: "Western",
        dish: "Garlic Fresh Prawn Spaghetti/ Bread/ Cheese sticks",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851960/Garlic%20Fresh%20Prawn%20Spaghetti.jpg"
    },
    {
        date: "20-Mar-2025",
        category: "Asian",
        dish: "Kimchi fried rice/ Australian beef / Minced Meat & Sunny side up",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851961/Kimchi-Fried-Rice-The-Chutney-Life-18-1024x683.jpg"
    },
    {
        date: "21-Mar-2025",
        category: "Western",
        dish: "Chicken wrap",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851962/IMG_1864.jpg"
    },
    {
        date: "21-Mar-2025",
        category: "Asian",
        dish: "'Phở' Chicken w/ fresh prawn spring rolls",
        imageUrl: "https://res.cloudinary.com/dnd0modpi/image/upload/v1740851965/DSC_0007.jpg"
    }
];

// 나머지 코드는 동일
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
        return availableDates[availableDates.length - 1];
    } else {
        for (let i = availableDates.length - 1; i >= 0; i--) {
            if (availableDates[i] < targetDate) {
                return availableDates[i];
            }
        }
        return availableDates[0];
    }
}

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

function formatDateForComparison(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function displayMenuForSelectedDate(autoSkip = false) {
    const selectedDate = datePicker.value;
    if (!selectedDate) return;
    const dateObj = new Date(selectedDate);
    const formattedDate = formatDateForComparison(selectedDate);
    const dateMenu = menuData.filter(item => item.date === formattedDate);
    if (dateMenu.length === 0 && autoSkip) {
        const nextAvailableDate = findClosestAvailableDate(dateObj);
        datePicker.value = formatDateForInput(nextAvailableDate);
        messageDiv.textContent = `No menu found for ${formattedDate}. Showing the next available menu.`;
        return displayMenuForSelectedDate(false);
    }
    currentDateDiv.textContent = formatDateForDisplay(selectedDate);
    menuContainer.innerHTML = '';
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

function navigateToPrevDay() {
    const currentDate = new Date(datePicker.value);
    currentDate.setDate(currentDate.getDate() - 1);
    const prevAvailableDate = findClosestAvailableDate(currentDate, false);
    if (prevAvailableDate >= minDate) {
        datePicker.value = formatDateForInput(prevAvailableDate);
        displayMenuForSelectedDate(false);
    }
}

function navigateToNextDay() {
    const currentDate = new Date(datePicker.value);
    currentDate.setDate(currentDate.getDate() + 1);
    const nextAvailableDate = findClosestAvailableDate(currentDate, true);
    if (nextAvailableDate <= maxDate) {
        datePicker.value = formatDateForInput(nextAvailableDate);
        displayMenuForSelectedDate(false);
    }
}

function onDatePickerChange() {
    displayMenuForSelectedDate(true);
}

datePicker.addEventListener('change', onDatePickerChange);
showTodayBtn.addEventListener('click', initializeWithTodayDate);
prevDayBtn.addEventListener('click', navigateToPrevDay);
nextDayBtn.addEventListener('click', navigateToNextDay);

window.onload = initializeWithTodayDate;