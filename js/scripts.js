$(document).ready(function() {
  $("h1").click(function() {
    var flavors=[
      "Vanilla", "Bubble_Gum", "Birthday_Cake", "Black_Raspberry_Crunch", "Black_Walnut", "Computer_Chip", "Industrial_Chocolate", "Honeydew", "Blue_Moon",
      "Blueberry", "Caramel_Praline", "Chocolate",
      "Chocolate_Brownies", "Chocolate_Chip", "Chocolate_Custard",
      "Coffee", "Cookies_&_Dough", "Cotton_Candy",
      "French_Vanilla", "Fudge_Marble", "Kulfi",
      "Lavender_Honey", "Lemon_Cookie", "Lychee",
      "Marshmallow_Treat", "Mexican_Chocolate", "Mint_Chocolate_Chip",
      "Mint_Cookies", "Mocha_Almond_Fudge", "Peach",
      "Peppermint_Chip", "Pistachio_Almond", "Rainbow_Sherbert",
      "Rocky_Road", "Rose", "Saffron_Pistachio",
      "Salty_Caramel", "Sideways", "Strawberry",
      "Sweet_Coconut", "Swiss_Mocha", "Tiger_Tails",
      "Toasted_Almond", "Toffeeness", "Vanilla_Bean",
      "White_Chocolate_Ginger"
    ];
    flavors.forEach(function(flavor) {
      var someText = "<div class='col-sm-3'><h3>" + flavor + "</h3><img src='img/"+flavor+".jpg'></div>";
      $("div.row").append(someText);
    });
  });
});
