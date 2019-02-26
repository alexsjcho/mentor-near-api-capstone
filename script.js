"use strict";

//#1 MENTORNEAR LANDING PAGE

//Call Initial App Functions on Landing Page
$(document).ready(function() {
  watchFindMentorButton();
  menuItemListener();
});

//Navbar Menu Item Event Listeners
function menuItemListener() {
  $("a.href").bind("click", function(e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        3000,
        function() {
          location.hash = target;
        }
      );
    return false;
  });
}

//Mentor Button Event Listener
function watchFindMentorButton() {
  $("#find-mentor-start-button").click(e => {
    e.preventDefault();
    loadMentorProfilePage();
    watchChooseMentorButton();
    randomUserGeneratorApi();
    getRandomQuoteGeneratorApi();
    watchNextMentorProfileButton();
  });
}

//Function to Render Mentor Profile Page via HTML injection
function loadMentorProfilePage() {
  $("#new-page-renderer").empty();
  $("#new-page-renderer").append(
    `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#">MentorNear</a>
</nav>

<!-- Random Quote Generator -->
<section role="motivational-quotes" id="random-quote-generator-api-section">
  <h2>Random Quote Generator</h2>
</section>


<!-- Random Profile Generator API Generated HTML Elements -->
<section
  role="mentor-profile-slider"
  id="random-profile-generator-api-section"
></section>

<div id = "mentor-buttons-container">
<a
class="btn btn-primary btn-large"
href="#"
role="load-mentor-calendar-page"
id="next-mentor-profile-button"
>
Next Mentor
</a>
<a
class="btn btn-success btn-large"
href="#"
role="load-mentor-calendar-page"
id="choose-mentor-button"
>
Choose This Mentor
</a>
</div>

<footer class="row bg-dark">
<p class="col-md-3">&copy; Alex Cho 2019</p>
<a href="https://www.linkedin.com/in/alexsjcho/">
  <p class="col-md-1"><i class="fab fa-linkedin"></i></p
></a>
<a href="https://github.com/alexsjcho">
  <p class="col-md-1"><i class="fab fa-github"></i></p
></a>
<a href="https://www.mraddoil.com/">
  <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p
></a>
<a href="https://www.alexsjcho.com/">
  <p class="col-md-1"><i class="fas fa-blog"></i></p
></a>
</footer>

    `
  );
}

//#2 MENTOR PROFILE SLIDER PAGE

//Event Listener for Choose Mentor Button
function watchChooseMentorButton() {
  $("#choose-mentor-button").click(e => {
    e.preventDefault();
    let mentorName = $("#mentor-name").text();
    loadMentorCalendarPage(mentorName);
    watchSelectTimeButton(mentorName);
  });
}

//Event Listener for Next Mentor Profile Button
function watchNextMentorProfileButton() {
  $("#next-mentor-profile-button").click(e => {
    e.preventDefault();
    randomUserGeneratorApi();
    getRandomQuoteGeneratorApi();
  });
}

//Fetch GET Request on Random User API
function randomUserGeneratorApi() {
  fetch("https://randomuser.me/api/?results")
    .then(mentorData => mentorData.json())
    .then(mentorDataJson => displayRandomUserGeneratorResults(mentorDataJson))
    .catch(error =>
      alert("Hmm... we couldn't find a mentor, something went wrong")
    );
}

//Capitalize Random User API Response JSON Word Strings
function captializeLetters(word) {
  let wordArray = word.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    const currWord = wordArray[i];
    wordArray[i] = currWord.charAt(0).toUpperCase() + currWord.substring(1);
  }
  return wordArray.join(" ");
}

//Display Data From Random User API to the DOM
function displayRandomUserGeneratorResults(mentorDataJson) {
  const firstName = mentorDataJson.results[0].name.first;
  const lastName = mentorDataJson.results[0].name.last;
  const mentorPhoto = mentorDataJson.results[0].picture.large;
  const mentorTimeZone =
    mentorDataJson.results[0].location.timezone.description;
  const mentorCityData = mentorDataJson.results[0].location.city;
  const mentorStateData = mentorDataJson.results[0].location.state;

  const fullName = captializeLetters(firstName, lastName);
  const mentorCity = captializeLetters(mentorCityData);
  const mentorState = captializeLetters(mentorStateData);

  $("#random-profile-generator-api-section").empty();
  $("#random-profile-generator-api-section").append(
    `
    <h2>Choose A Mentor</h2>
    <div class="text-center" id = "mentor-profile-container">
    <div class="carousel-inner text-center">
      <div class="carousel-item active text-center">
        <img
          id="mentor-profile-img"
          src="${mentorPhoto}"
          alt="mentor-profile-picture-placeholder"
          height="250"
          width="250"
        />
        <div class="container text-center" id="mentor-profile-info">
            <h2 id="mentor-name"> 
         ${fullName}
            </h2>
          <div  class="container text-center" id="mentor-description">
          <p>
          Age: ${mentorDataJson.results[0].dob.age}
         </p>
            <p>
            Email:  ${mentorDataJson.results[0].email}
            </p>
            <p>
            Phone:  ${mentorDataJson.results[0].cell}
            </p>
            <p>
            Location: ${mentorTimeZone}
            </p>
            <p>
            City:  ${mentorCity}
            </p>
            <p>
            State:  ${mentorState}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      `
  );
}

//RANDOM QUOTE GENERATOR API SECTION

//Check Whether GET Request Works or Return Errors
const checkRandomQuoteGeneratorApiStatus = randomQuoteResponse => {
  if (randomQuoteResponse.ok) {
    return randomQuoteResponse;
  } else {
    let quoteGeneratorApiError = new Error(randomQuoteResponse.statusText);
    quoteGeneratorApiError = randomQuoteResponse;
    throw error;
  }
};

//Take API Data and Convert It to JSON Format
const randomQuoteResponseParseJson = randomQuoteResponse => {
  let randomQuoteResponseJson = randomQuoteResponse.json();
  return randomQuoteResponseJson;
};

//Turn API Data into String Text
const getRandomQuoteText = randomQuoteData => {
  const {
    quote: { quote }
  } = randomQuoteData;
  return `${quote}`;
};

//Render Random Quote Text to the Dom
const displayRandomQuote = randomQuoteGeneratorApiData => {
  const randomQuoteText = randomQuoteGeneratorApiData.contents.quotes[0].quote;
  $("#random-quote-generator-api-section").empty();
  $("#random-quote-generator-api-section").append(
    `
    <h6>
    <span class="typcn typcn-ticket icon"></span> You Are That Much
    Closer To Getting Mentorship
  </h6>
    <div class="progressBar">
    <div class="progressBarContainer">
      <div class="progressBarValue value-40">40%</div>
    </div>
  
    </div>

    <h2> Today's Word of Inspiration </h2>
      <p id = "random-quote-text">${randomQuoteText}</p>
    
      `
  );
};

//Fetch GET Request to Random Quote Generator API
function getRandomQuoteGeneratorApi() {
  fetch("https://quotes.rest/qod")
    .then(checkRandomQuoteGeneratorApiStatus)
    .then(randomQuoteResponseParseJson)
    .then(displayRandomQuote)
    .catch(quoteError => alert("Theres no random quote, try again"));
}

//#3 FIND TIME ON MENTORS CALENDAR PAGE

//Render Load Mentor Calendar HTML
function loadMentorCalendarPage(mentorName) {
  const getDateData = new Date();
  const getHourMins = getDateData.getHours() + ":" + getDateData.getMinutes();
  const dateTomorrow = Date.today()
    .addDays(1)
    .toString("dddd MMMM dS, yyyy");
  const threeHourPlusTomorrow = Date.today()
    .at(getHourMins)
    .addHours(3)
    .toString("HH:mm tt");
  const fiveHourPlusTomorrow = Date.today(getHourMins)
    .at(getHourMins)
    .addHours(5)
    .toString("HH:mm tt");
  const sevenHourPlusTomorrow = Date.today(getHourMins)
    .at(getHourMins)
    .addHours(7)
    .toString("HH:mm tt");
  $("#new-page-renderer").empty();
  $("#new-page-renderer").append(
    `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">MentorNear</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

  <section>
  <h6>
  <span class="typcn typcn-ticket icon"></span> You Are That Much
  Closer To Getting Mentorship
</h6>
  <div class="progressBar">
  <div class="progressBarContainer">
    <div class="progressBarValue value-60">60%</div>
  </div>

  </div>
  </section>

  <section role="find time on mentor's calendar">
    <div class="calendar">
      <div class="calendar_header">
        <h1 class="header_title">${mentorName}</h1>
        <p class="header_copy">Let's Meet For 30 Minutes</p>
      </div>
      <div class="calendar_plan">
        <div class="cl_plan">
          <div class="cl_title">${dateTomorrow}</div>
        </div>
      </div>
      <div class="calendar_events">
      <a href="#" class="select-time-option-button">
        <div class="event_item">
          <div class="ei_Dot dot_active"></div>
          <div class="ei_Title"  aria-live="assertive">${threeHourPlusTomorrow}</div>
          <div class="ei_Copy">Get Mentored At This Time</div>
        </div>
        </a>
        <div class="calendar_events">
        <a href="#" class="select-time-option-button">
          <div class="event_item">
            <div class="ei_Dot dot_active"></div>
            <div class="ei_Title"   aria-live="assertive">${fiveHourPlusTomorrow}</div>
            <div class="ei_Copy">Get Mentored At This Time</div>
          </div>
          </a>
          <div class="calendar_events">
          <a href="#" class="select-time-option-button">
            <div class="event_item">
              <div class="ei_Dot dot_active"></div>
              <div class="ei_Title"   aria-live="assertive">${sevenHourPlusTomorrow}</div>
              <div class="ei_Copy">Get Mentored At This Time</div>
            </div>
            </a>
      </div>
    </div>
  </section>
  
  <footer class="row bg-dark">
  <p class="col-md-3">&copy; Alex Cho 2019</p>
  <a href="https://www.linkedin.com/in/alexsjcho/">
    <p class="col-md-1"><i class="fab fa-linkedin"></i></p
  ></a>
  <a href="https://github.com/alexsjcho">
    <p class="col-md-1"><i class="fab fa-github"></i></p
  ></a>
  <a href="https://www.mraddoil.com/">
    <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p
  ></a>
  <a href="https://www.alexsjcho.com/">
    <p class="col-md-1"><i class="fas fa-blog"></i></p
  ></a>
</footer>

    `
  );
}

//Event Listener for Select Mentor Time Links
function watchSelectTimeButton(mentorName) {
  $(".select-time-option-button").click(function(e) {
    e.preventDefault();
    const selectedTimeData = $(this).find(".ei_Title");
    const selectedTime = selectedTimeData.text();
    loadMentorFormPage(mentorName);
    watchSubmitFormResponseButton(mentorName, selectedTime);
  });
}

//#4 MENTOR QUESTIONAIRE FORM PAGE

//Render Mentor Question Form HTML
function loadMentorFormPage(mentorName) {
  $("#new-page-renderer").empty();
  $("#new-page-renderer").append(
    `

  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#">MentorNear</a>
</nav>

<section role="mentor's question">
<h6>
    <span class="typcn typcn-ticket icon"></span> You Are That Much
    Closer To Getting Mentorship
  </h6>
<div class="progressBar">
  <div class="progressBarContainer">
    <div class="progressBarValue value-80">80%</div>
  </div>
  
  </div>

  <div>
  <h2 aria-live="assertive">${mentorName}'s Question</h2>
  <p>What do you want to talk about in our first meeting?</p>
</div>
</section>

<section role="fill out mentor's qualification form">
<form>
<fieldset>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Write Your Answer</label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
  </fieldset>
  </form>
  <button type="button" class="btn btn-primary"  id="submit-form-response-button" aria-live="assertive">Submit Your Response</button>
</section>


<footer class="row bg-dark">
<p class="col-md-3">&copy; Alex Cho 2019</p>
<a href="https://www.linkedin.com/in/alexsjcho/">
  <p class="col-md-1"><i class="fab fa-linkedin"></i></p
></a>
<a href="https://github.com/alexsjcho">
  <p class="col-md-1"><i class="fab fa-github"></i></p
></a>
<a href="https://www.mraddoil.com/">
  <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p
></a>
<a href="https://www.alexsjcho.com/">
  <p class="col-md-1"><i class="fas fa-blog"></i></p
></a>
</footer>

    `
  );
}

//Event Listener for Mentor Form Butoon
function watchSubmitFormResponseButton(mentorName, selectedTime) {
  $("#submit-form-response-button").click(e => {
    e.preventDefault();
    loadConfirmationPage(mentorName, selectedTime);
  });
}
//#5 CONFIRMATION PAGE

//Render Confirmation Page HTML
function loadConfirmationPage(mentorName, selectedTime) {
  const dateTomorrow = Date.today()
    .addDays(1)
    .toString("dddd MMMM dS, yyyy");
  $("#new-page-renderer").empty();
  $("#new-page-renderer").append(
    `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#">MentorNear</a>
</nav>
<section>
<div class="progressBar">
  <div class="progressBarContainer">
    <div class="progressBarValue value-100">100%</div>
  </div>
  <h6>
    <span class="typcn typcn-ticket icon"></span> Congrats! Look Forward To New Breakthroughs!
  </h6>
  </div>
</section>

  <section role="section-instruction" class="row">
    <div class="col-md-4 container">
      <h3>Your Mentor Session With ${mentorName} Has Been Booked!</h3>
      <p>
      You will meet your mentor on ${dateTomorrow} at ${selectedTime}
    </p>
      <p>
        Remember to prepare questions before meeting your mentor
      </p>
    </div>
  </section>

  <footer class="row bg-dark">
        <p class="col-md-3">&copy; Alex Cho 2019</p>
        <a href="https://www.linkedin.com/in/alexsjcho/">
          <p class="col-md-1"><i class="fab fa-linkedin"></i></p
        ></a>
        <a href="https://github.com/alexsjcho">
          <p class="col-md-1"><i class="fab fa-github"></i></p
        ></a>
        <a href="https://www.mraddoil.com/">
          <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p
        ></a>
        <a href="https://www.alexsjcho.com/">
          <p class="col-md-1"><i class="fas fa-blog"></i></p
        ></a>
      </footer>
    `
  );
}
