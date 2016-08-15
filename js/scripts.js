$(document).ready(function() {
  $("h1").click(function() {
    var flavors=["Vanilla", "Bubble_Gum", "Birthday_Cake", "Black_Raspberry_Crunch", "Black_Walnut", "Computer_Chip", "Industrial_Chocolate", "Puke"];
    flavors.forEach(function(flavor) {
      var someText = "<div class='col-sm-3'><h3>" + flavor + "</h3><img src='img/"+flavor+".jpg'></div>";
      $("div.row").append(someText);
    });
  });
});
