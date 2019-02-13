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
}
