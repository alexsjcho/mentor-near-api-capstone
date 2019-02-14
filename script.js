//Call Button Functions
$(document).ready(function() {
  watchFindMentorButton();
});
//Watch Button to Load New HTML Page

function watchFindMentorButton() {
  $("#find-mentor-start-button").click(e => {
    e.preventDefault();
    console.log("watchFindMentorButton works!");
    loadMentorProfilePage();
    watchChooseMentorButton();
  });
}

function watchChooseMentorButton() {
  $("#choose-mentor-button").click(e => {
    e.preventDefault();
    console.log("watchChooseMentorButton works!");
    loadMentorCalendarPage();
    watchSelectTimeButton();
  });
}

function watchSelectTimeButton() {
  $("#select-time-option-button").click(e => {
    e.preventDefault();
    console.log("watchSelectTimeButton function works!");
    loadMentorFormPage();
    watchSubmitFormResponseButton();
  });
}

function watchSubmitFormResponseButton() {
  $("#submit-form-response-button").click(e => {
    e.preventDefault();
    console.log("watchSubmitFormResponseButton function works!");
    loadConfirmationPage();
  });
}

//Render jQuery HTML Elements
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

    <section role="mentor-profile-slider">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active text-right">
                    <img src="https://www.argentum.org/wp-content/uploads/2018/12/blank-profile-picture-973460_6404.png"
                        alt="mentor-profile-picture-placeholder" height="300" width="300" />
                    <rect width="100%" height="100%" fill="#777" />
                    <div class="container" id="mentor-profile-info">
                        <div class="carousel-caption text-left">
                            <div id="mentor-name">
                                <h2>Mentor Profile #1</h2>
                            </div>

                            <p id="mentor-description">
                                Mentor Description
                            </p>

                            <div class="row" id="mentor-social-media" >
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
                            <div>
                            
                                    <a
                                    class="btn btn-primary btn-lg"
                                    href="#"
                                    role="load-mentor-calendar-page"
                                    id="choose-mentor-button"
                                  >
                                    Choose This Mentor
                                  </a>
                            
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">

                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
    </section>
    <footer class="row">
        <p class="col-md-4">&copy; Alex Cho 2019</p>
        <p class="col-md-1">
            <a href="https://www.linkedin.com/in/alexsjcho/"><i class="fab fa-linkedin"></i></a>
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
    <p>What is your favorite color?</p>
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
        <h3>Instructions</h3>
        <p>
          Remember to prepare questions before meeting your mentor
        </p>
      </div>
    </section>
  </header>
  <section role="mentor confirmation page" id="mentor-confirmation">
        <h2 class="mt-4" id="mentor-name">Your Mentor Details</h2>
        <p id="mentor-description">
          Mentor Description
        </p>
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
      </section>
  <section role="mentor session confirmation">
    <h2 class="mt-4" id="session-confirmation">
      Your Mentor Session Details
    <p>Date</p>
   <p>Time</p>
   <p>Location</p>
    </div>
  </section>
  <section role="questionarie form answers">
        <h2 class="mt-4" id="form-feedback-render">
          Your Questionarie Responses
     <div>Render Form Responses</div>
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
