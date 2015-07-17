// Initial load of about page and adding current class (highlights menu button)
$(document).ready(function() {
  $("#page").load("pages/about.html");
  $("#page_about").addClass('current');
}); 
  
// Load About page
$(document).ready(function() {
  $("#page_about").click(function(){
    $("#page").load("pages/about.html");
  }); 
}); 

// Load Projects page
$(document).ready(function() {
  $("#page_projects").click(function(){
    $("#page").load("pages/projects.html");
  }); 
}); 