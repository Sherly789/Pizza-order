function Order(cheese, tomato, mushroom, pizzaSize) {
  this.cheese = cheese;
  this.tomato = tomato;
  this.mushroom = mushroom;
  this.pizzaSize = pizzaSize;
}

Order.prototype.cost = function() {
  var cost = 0;
  if (this.pizzaSize === "Small" ) {
      cost += 6;
  } else {
    alert("1000");
  }
  return cost;
}

// User interface
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var cheese = 0;
    if ($("#cheese").prop('checked')) {
      cheese = 1;
    }
    var tomato = 0;
    if ($("#tomato").prop('checked')) {
      tomato = 1;
    }
    var mushroom = 0;
    if ($("#mushroom").prop('checked')) {
      mushroom = 1;
    }

    var pizzaSize = $("input:radio[name=size]:checked").val();
    var orderobject = new Order(cheese, tomato, mushroom, pizzaSize);
    var output = orderobject.cost();

    console.log(orderobject);
    $("#output").text(output)


  });
});
