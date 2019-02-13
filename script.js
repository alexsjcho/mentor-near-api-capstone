// window.jQuery ||
//   document.write(
//     '<script src="/docs/4.3/assets/js/vendor/jquery-slim.min.js"></script>'
//   );

watchFindMentorButton();

//Watch "Find Mentor Button"

function watchFindMentorButton() {
  $("#find-mentor-start-button").click(e => {
    e.preventDefault();
    console.log("watchFindMentorButton works!");
    loadMentorProfilePage();
  });
}

//Render jQuery HTML Elements
function loadMentorProfilePage() {
  console.log("loadMentorProfilePage function works");
  $("#new-page-renderer").empty();
  $("#new-page-renderer").append(
    `<main id="new-page-renderer"  role="this is the HTML hook to render new page">
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
                                <p>
                                    <a class="btn btn-lg btn-primary" href="#" role="button">Choose This Mentor</a>
                                </p>
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
</main>
    `
  );
}
