addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Get the current date and month
  let today = new Date();
  let currentMonth = today.getMonth();

  // Check if the request includes a query string parameter for the month
  if (request.url.includes('?')) {
    const params = new URL(request.url).searchParams;
    const monthParam = params.get('month');
    if (monthParam) {
      // If the month parameter is set, use it to set the current month
      currentMonth = parseInt(monthParam);
      today = new Date(today.getFullYear(), currentMonth, 1);
    }
  }

  // Get the number of days in the current month
  const daysInMonth = new Date(today.getFullYear(), currentMonth + 1, 0).getDate();

  // Create an array of events for the current month, with each event containing a date and a description
  const events = [    
      {date: new Date(2022, 11, 24),description: "Train strike",url: "https://tfl.gov.uk/campaign/strikes"},    
      {date: new Date(2022, 11, 25),description: "Train strike",url: "https://tfl.gov.uk/campaign/strikes"},    
      {date: new Date(2022, 11, 26),description: "Train strike",url: "https://tfl.gov.uk/campaign/strikes"},    
      {date: new Date(2022, 11, 27),description: "Train strike",url: "https://tfl.gov.uk/campaign/strikes"},    
      {date: new Date(2022, 09, 21),description: "Ambulance strike",url: "https://www.nhsemployers.org/news/ambulance-industrial-action-dates-announced"},    
      {date: new Date(2022, 10, 28),description: "Ambulance Strike",url: "https://www.nhsemployers.org/news/ambulance-industrial-action-dates-announced"},
      {date: new Date(2022, 11, 26),description: "Border Force Strike",url: "https://leftfootforward.org/2022/12/a-full-list-of-upcoming-strike-dates/"},
      {date: new Date(2022, 11, 28),description: "Border Force Strike",url: "https://leftfootforward.org/2022/12/a-full-list-of-upcoming-strike-dates/"},
      {date: new Date(2022, 11, 29),description: "Border Force Strike",url: "https://leftfootforward.org/2022/12/a-full-list-of-upcoming-strike-dates/"},
      {date: new Date(2022, 11, 30),description: "Border Force Strike",url: "https://leftfootforward.org/2022/12/a-full-list-of-upcoming-strike-dates/"},
      {date: new Date(2022, 11, 31),description: "Border Force Strike",url: "https://leftfootforward.org/2022/12/a-full-list-of-upcoming-strike-dates/"},
      {date: new Date(2023, 01, 12),description: "NHS strike",url: "https://www.example.com/"},      
      ];

  // Get the first day of the week for the current month
  const firstDay = new Date(today.getFullYear(), currentMonth, 1).getDay();

  // Generate the HTML for the calendar
  let calendarHTML = `<style>
    table {
      border-collapse: collapse;
    }

    td {
      width: 14%;
      height: 100px;
      text-align: center;
      vertical-align: middle;
      border: 1px solid #ddd;
    }

    .today {
      background-color: lightblue;
    }

    .event {
      color: blue;
      cursor: pointer;
    }
  </style>
  <h1>UK Strike Calendar</h1>
  <h>Created by Chat GPT <br> Something missing : me[at]himanshuanand.com</h>
  <h1>${getMonthName(currentMonth)} ${today.getFullYear()}</h1>
  <table>
    <tr>
      <th>Sun</th>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th>Sat</th>
    </tr>
    <tr>`;

  // Loop through the days in the month and create a table cell for each day
  for (let i = 0; i < daysInMonth + firstDay; i++) {
    // Check if the day is the first day of the week (Sunday)
    if (i % 7 === 0) {
      // If it is, close the current row and start a new one
      calendarHTML += `</tr><tr>`;
    }

    // Skip the days that come before the first day of the month
    if (i < firstDay) {
      calendarHTML += `<td></td>`;
      continue;
    }

    // Check if the day is today
    if (i + 1 - firstDay === today.getDate() && currentMonth === today.getMonth()) {
      // If it is, highlight it in the calendar
      calendarHTML += `<td class="today">${i + 1 - firstDay}`;
    } else {
      // If it is not, just display the day
      calendarHTML += `<td>${i + 1 - firstDay}`;
    }

    // Check if there are any events on the current day
    for (const event of events) {
      if (event.date.getDate() === i + 1 - firstDay && event.date.getMonth() === currentMonth) {
        // If there is, add a link to the event description
        calendarHTML += `<br><span class="event" data-description="${event.description}" data-url="${event.url}">${event.description}</span>`;
      }
    }

    calendarHTML += `</td>`;
  }

  calendarHTML += `</tr></table>`;

  // Generate the HTML for the navigation buttons
  let navHTML = `<button id="prev">Previous</button> <button id="next">Next</button>`;

  // Set up a click handler for the event links
  const clickHandler = `<script>
    const events = document.querySelectorAll('.event');
    events.forEach(event => {
      event.addEventListener('click', event => {
        const description = event.target.getAttribute('data-description');
        const url = event.target.getAttribute('data-url');
        alert(description + ': ' + url);
      });
    });
  </script>`;

// Set up a click handler for the navigation buttons
  navHTML += `<script>
    const prevButton = document.querySelector('#prev');
    prevButton.addEventListener('click', () => {
      const currentMonth = ${currentMonth};
      let newMonth = currentMonth - 1;
      if (newMonth < 0) {
        newMonth = 11;
      }
      window.location = './?month=' + newMonth;
    });

    const nextButton = document.querySelector('#next');
    nextButton.addEventListener('click', () => {
      const currentMonth = ${currentMonth};
      let newMonth = currentMonth + 1;
      if (newMonth > 11) {
        newMonth = 0;
      }
      window.location = './?month=' + newMonth;
    });
  </script>`;

  // Combine the calendar HTML, navigation buttons, and click handler
  const html = calendarHTML + navHTML + clickHandler;

  // Create an HTML response
  const response = new Response(html, {
    headers: { 'content-type': 'text/html' }
  });

  return response;
}

// Function to get the name of a month
function getMonthName(month) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[month];
}
