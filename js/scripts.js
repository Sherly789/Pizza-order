function Order(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.topping = [];
}

function Topping(cheese, tomato, mushroom) {
  this.cheese = cheese;
  this.tomato = tomato;
  this.mushroom = mushroom;
}

Order.prototype.cost = function() {
  var cost = 0;
  if (this.pizzaSize === "Small" ) {
    cost += 6;
  } else if (this.pizzaSize === "Medium" ) {
    cost += 8;
  } else if (this.pizzaSize === "Large") {
    cost += 10;
  }

  return cost;
};

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
    var orderObject = new Order(pizzaSize);
    var toppingInput = new Topping (cheese, tomato, mushroom)
    var output = orderObject.cost();

    orderObject.topping.push(toppingInput);

    console.log(orderObject);
    console.log(toppingInput);
    $("#output").text(output)


  });
});
