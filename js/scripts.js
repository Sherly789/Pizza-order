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
    // var toppingInput = $("input:checkbox[name=topping]:checked").val();
    var pizzaSize = $("input:radio[name=size]:checked").val();


  });
});
