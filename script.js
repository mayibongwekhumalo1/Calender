const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };
  
  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };
  
  const month_names = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  let calendar = document.querySelector('.calendar');
  let month_picker = document.querySelector('#month-picker');
  let calendar_days = document.querySelector('.calendar-days');
  let calendar_header_year = document.querySelector('#year');
  let month_list = document.querySelector('.month-list');
  
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  
  const generateCalendar = (month, year) => {
    calendar_days.innerHTML = "";
    let days_of_month = [
      31,
      getFebDays(year),
      31, 30, 31, 30,
      31, 31, 30, 31, 30, 31
    ];
  
    let first_day = new Date(year, month, 1);
  
    month_picker.innerHTML = month_names[month];
    calendar_header_year.innerHTML = year;
  
    for (let i = 0; i < first_day.getDay(); i++) {
      let empty = document.createElement("div");
      empty.classList.add("empty-day");
      calendar_days.appendChild(empty);
    }
  
    for (let i = 1; i <= days_of_month[month]; i++) {
      let day = document.createElement("div");
      day.classList.add("day");
      day.innerHTML = i;
  
      if (
        i === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add("current-day");
      }
  
      calendar_days.appendChild(day);
    }
  };
  
  document.querySelector('#pre-year').addEventListener('click', () => {
    currentYear--;
    generateCalendar(currentMonth, currentYear);
  });
  
  document.querySelector('#next-year').addEventListener('click', () => {
    currentYear++;
    generateCalendar(currentMonth, currentYear);
  });
  
  // month list
  month_names.forEach((month, index) => {
    let monthEl = document.createElement("span");
    monthEl.innerHTML = month;
    monthEl.addEventListener("click", () => {
      currentMonth = index;
      generateCalendar(currentMonth, currentYear);
      month_list.classList.remove("show");
    });
    month_list.appendChild(monthEl);
  });
  
  // Toggle month list
  month_picker.addEventListener("click", () => {
    month_list.classList.toggle("show");
  });
  
  // Initialize
  generateCalendar(currentMonth, currentYear);

  // today


 let today = document.querySelector("#today");
 

 today.append (currentDate);
 
  