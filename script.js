// window.jQuery ||
//   document.write(
//     '<script src="/docs/4.3/assets/js/vendor/jquery-slim.min.js"></script>'
//   );

//#1 MENTORNEAR LANDING PAGE
$(document).ready(function() {
  watchFindMentorButton();
});

function watchFindMentorButton() {
  $("#find-mentor-start-button").click(e => {
    e.preventDefault();
    console.log("watchFindMentorButton works!");
    loadMentorProfilePage();
    watchChooseMentorButton();
    randomUserGeneratorApi();
    getRandomQuoteGeneratorApi();
    watchNextMentorProfileButton();
  });
}

//Render jQuery HTML Elements Injections
function loadMentorProfilePage() {
  console.log("loadMentorProfilePage function works");
  $("#new-page-renderer").empty();
  $("#new-page-renderer").append(
    `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#">MentorNear</a>
</nav>

<header role="banner">
  <h1>#2 Mentor Profile Slider</h1>
  <section role="section-instruction" class="row">
    <div class="col-md-4 container">
      <h3>Instructions</h3>
      <p>
        Select a professional as your mentor
      </p>
    </div>
  </section>
</header>

<!-- Random Quote Generator -->
<section role="motivational-quotes" id="random-quote-generator-api-section">
  <h2>Random Quote Generator</h2>
</section>

<!-- Random Profile Generator API Generated HTML Elements -->
<h2>Random Profile Generator</h2>
<section role="mentor-profile-slider" id="random-profile-generator-api-section">
</section>


<div>
        <a
          class="btn btn-success btn-lg"
          href="#"
          role="load-mentor-calendar-page"
          id="choose-mentor-button"
        >
          Choose This Mentor
        </a>
      </div>
      <div>
        <a
          class="btn btn-primary btn-sm"
          href="#"
          role="load-mentor-calendar-page"
          id="next-mentor-profile-button"
        >
          Next Mentor
        </a>
      </div>

<footer class="row">
  <p class="col-md-4">&copy; Alex Cho 2019</p>
  <p class="col-md-1">
    <a href="https://www.linkedin.com/in/alexsjcho/"
      ><i class="fab fa-linkedin"></i
    ></a>
  </p>
  <a href="https://github.com/alexsjcho">
    <p class="col-md-1"><i class="fab fa-github"></i></p>
  </a>
  <a href="https://www.mraddoil.com/">
    <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p>
  </a>
  <a href="https://www.alexsjcho.com/">
    <p class="col-md-1"><i class="fas fa-blog"></i></p>
  </a>
</footer>
    `
  );
}

//#2 MENTOR PROFILE SLIDER PAGE
function watchChooseMentorButton() {
  $("#choose-mentor-button").click(e => {
    e.preventDefault();
    console.log("watchChooseMentorButton works!");
    loadMentorCalendarPage();
    watchSelectTimeButton();
  });
}
//Watch Button for New Mentor Profile
function watchNextMentorProfileButton() {
  $("#next-mentor-profile-button").click(e => {
    e.preventDefault();
    console.log("watchNextMentorProfileButton works!");
    displayRandomUserGeneratorResults();
  });
}

//Random User Generator API
function randomUserGeneratorApi() {
  console.log("randomUserGeneratorApi function works!");
  fetch("https://randomuser.me/api/?results")
    .then(mentorData => {
      console.log("hello world", mentorData);
      return mentorData.json();
    })
    .then(mentorDataJson => displayRandomUserGeneratorResults(mentorDataJson))
    .catch(error =>
      alert("Hmm... we couldn't find a mentor, something went wrong")
    );
}

//Display Random User Generator API GET Request Results
function displayRandomUserGeneratorResults(mentorDataJson) {
  console.log("displayRandomUserGeneratorResults function works!");
  $("#random-profile-generator-api-section").empty();
  $("random-profile-generator-api-section").append(
    `
  <div data-ride="carousel">
  <div class="carousel-inner">
      <div class="carousel-item actsive text-center">
          <img id="mentor-profile-img" src="${
            mentorDataJson.results[0].picture.medium
          }" alt="mentor-profile-picture-placeholder"
              height="300" width="300" />
          <div class="container" id="mentor-profile-info">
              <div id="mentor-name">
                  <h2>${mentorDataJson.results[0].name.first} ${
      mentorDataJson.name.last
    }</h2>
              </div>
              <div id="mentor-description">
                  <p>
                      ${mentorDataJson.results[0].email}
                  </p>
                  <p>
                      ${mentorDataJson.results[0].cell}
                  </p>
                  <p>
                      ${mentorDataJson.results[0].timezone.offset}
                  </p>
                  <p>
                      ${mentorDataJson.results[0].timezone.description}
                  </p>
                  <p>
                      ${mentorDataJson.results[0].dob.age}
                  </p>
                  <p>
                      ${mentorDataJson.results[0].location.city}
                  </p>
                  <p>
                      ${mentorDataJson.results[0].location.state}
                  </p>
              </div>
              <div class="row" id="mentor-social-media">
                  <p class="col-md-1">
                      <a href="#"><i class="fab fa-linkedin"></i></a>
                  </p>
                  <a href="#">
                      <p class="col-md-1"><i class="fab fa-github"></i></p>
                  </a>
                  <a href="#">
                      <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p>
                  </a>
                  <a href="#">
                      <p class="col-md-1"><i class="fab fa-youtube"></i></p>
                  </a>
              </div>
          </div>
      </div>
  </div>
</div>
      `
  );
}

//Random Quote Generator API Variables
const checkRandomQuoteGeneratorApiStatus = randomQuoteResponse => {
  if (randomQuoteResponse.ok) {
    return randomQuoteResponse;
  } else {
    let quoteGeneratorApiError = new Error(randomQuoteResponse.statusText);
    quoteGeneratorApiError = randomQuoteResponse;
    throw error;
  }
};
//Takes API Data Response and converts it to JSON format
const randomQuoteResponseParseJson = randomQuoteResponse => {
  return randomQuoteResponse.json();
};

//Form Random Quote Text
const getRandomQuoteText = randomQuoteData => {
  const {
    quote: { quote }
  } = randomQuoteData;
  return `${quote}`;
};

//Display Random Quote Generator API
const displayRandomQuote = randomQuoteGeneratorApiData => {
  if (randomQuoteGeneratorApiData.contents.length > 0) {
    const randomQuoteData = randomQuoteGeneratorApiData.contents[0];
    const randomQuoteText = getRandomQuoteText(randomQuoteData);
    $("#random-quote-generator-api-section").empty();
    $("random-quote-generator-api-section").append(
      `
      <p>${randomQuoteText}</p>
      `
    );
  }
};

//Random Quote Generator API GET Results
function getRandomQuoteGeneratorApi() {
  console.log("getRandomQuoteGeneratorApi function works!");
  fetch("http://quotes.rest/qod")
    .then(checkRandomQuoteGeneratorApiStatus)
    .then(randomQuoteResponseParseJson)
    .then(displayRandomQuote);
}

//#3 FIND TIME ON MENTORS CALENDAR PAGE
function loadMentorCalendarPage() {
  console.log("loadMentorCalendarPage function works");
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

  <header role="banner">
    <h1>#3 Find Time on Mentor's Calendar</h1>
    <section role="section-instruction" class="row">
      <div class="col-md-4 container">
        <h3>Instructions</h3>
        <p>
          Select a time on your mentor's calendar
        </p>
      </div>
    </section>
  </header>

  <section role="find time on mentor's calendar">
    <div class="calendar dark">
      <div class="calendar_header">
        <h1 class="header_title">Mentor's Name</h1>
        <p class="header_copy">Times I'm Free</p>
      </div>
      <div class="calendar_plan">
        <div class="cl_plan">
          <div class="cl_title">Today</div>
          <div class="cl_copy">22nd April 2018</div>
          <div class="cl_add">
            <i class="fas fa-plus"></i>
          </div>
        </div>
      </div>
      <div class="calendar_events">
      <a href="#" id="select-time-option-button">
        <div class="event_item">
          <div class="ei_Dot dot_active"></div>
          <div class="ei_Title">10:30 am</div>
          <div class="ei_Copy">Choose This Mentorship Time Block</div>
        </div>
        </a>
      </div>
    </div>
  </section>
  <footer class="row">
    <p class="col-md-4">&copy; Alex Cho 2019</p>
    <p class="col-md-1">
      <a href="https://www.linkedin.com/in/alexsjcho/"
        ><i class="fab fa-linkedin"></i
      ></a>
    </p>
    <a href="https://github.com/alexsjcho">
      <p class="col-md-1"><i class="fab fa-github"></i></p>
    </a>
    <a href="https://www.mraddoil.com/">
      <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p>
    </a>
    <a href="https://www.alexsjcho.com/">
      <p class="col-md-1"><i class="fas fa-blog"></i></p>
    </a>
  </footer>

    `
  );
}

function watchSelectTimeButton() {
  $("#select-time-option-button").click(e => {
    e.preventDefault();
    console.log("watchSelectTimeButton function works!");
    loadMentorFormPage();
    watchSubmitFormResponseButton();
  });
}

//#4 MENTOR QUESTIONAIRE FORM PAGE
function loadMentorFormPage() {
  console.log("loadMentorFormPage function works");
  $("#new-page-renderer").empty();
  $("#new-page-renderer").append(
    `

  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#">MentorNear</a>
</nav>

<header role="banner">
  <h1>#4 Mentor's Questionaire</h1>
  <section role="section-instruction" class="row">
    <div class="col-md-4 container">
      <h3>Instructions</h3>
      <p>
        Fill out mentor's qualification form
      </p>
    </div>
  </section>
</header>

<section role="mentor's question">
  <div>
  <h2>Mentor's Question</h2>
  <p>What do you want to talk about in our first meeting?</p>
</div>
</section>
<section role="fill out mentor's qualification form">
<form>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Write Your Answer</label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
  <button type="button" class="btn btn-primary"  id="submit-form-response-button">Submit Your Response</button>
  </form>
</section>
<footer class="row">
  <p class="col-md-4">&copy; Alex Cho 2019</p>
  <p class="col-md-1">
    <a href="https://www.linkedin.com/in/alexsjcho/"
      ><i class="fab fa-linkedin"></i
    ></a>
  </p>
  <a href="https://github.com/alexsjcho">
    <p class="col-md-1"><i class="fab fa-github"></i></p>
  </a>
  <a href="https://www.mraddoil.com/">
    <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p>
  </a>
  <a href="https://www.alexsjcho.com/">
    <p class="col-md-1"><i class="fas fa-blog"></i></p>
  </a>
</footer>

    `
  );
}
function watchSubmitFormResponseButton() {
  $("#submit-form-response-button").click(e => {
    e.preventDefault();
    console.log("watchSubmitFormResponseButton function works!");
    loadConfirmationPage();
  });
}
//#5 CONFIRMATION PAGE
function loadConfirmationPage() {
  console.log("loadConfirmationPage function works");
  $("#new-page-renderer").empty();
  $("#new-page-renderer").append(
    `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#">MentorNear</a>
</nav>

<header role="banner">
  <h1>#5 Confirmation Page</h1>
  <section role="section-instruction" class="row">
    <div class="col-md-4 container">
      <h3>Your Mentor Session Has Been Booked!</h3>
      <p>
        Remember to prepare questions before meeting your mentor
      </p>
    </div>
  </section>
</header>

<footer class="row">
  <p class="col-md-4">&copy; Alex Cho 2019</p>
  <p class="col-md-1">
    <a href="https://www.linkedin.com/in/alexsjcho/"
      ><i class="fab fa-linkedin"></i
    ></a>
  </p>
  <a href="https://github.com/alexsjcho">
    <p class="col-md-1"><i class="fab fa-github"></i></p>
  </a>
  <a href="https://www.mraddoil.com/">
    <p class="col-md-1"><i class="fab fa-wordpress-simple"></i></p>
  </a>
  <a href="https://www.alexsjcho.com/">
    <p class="col-md-1"><i class="fas fa-blog"></i></p>
  </a>
</footer>
    `
  );
}
