var randomNum;
$(document).ready(function(){
  addAnimals();
  $('#submit').on('click', postAnimal);
});

function addAnimals(){
  $('#animalcontainer').empty();
  $.ajax({
    type:'GET',
    url:'/animals',
    success: function(animals){
console.log(animals);
animals.forEach(function (animal) {
  $container = $('<div></div>');
  var animalProperties = ['type', 'amount'];
  animalProperties.forEach(function (prop){
    var $el = $('<div id ="' + animal.id + '">' + prop +': ' + animal[prop] + ' </div>');
    $('#animalcontainer').append($el);
  });
});
    //$('#animalcontainer').append($container);
  }
});
}

function postAnimal(event){
  event.preventDefault();
  $.ajax({
    type:'GET',
    url:'/random',
    success: function(random){
      console.log(random);
      var animal = {
        amount:random,
        type:$('#type').val()
      };
 $.ajax({
   type:'POST',
   url:'/animals',
   data: animal,
   success: function(){
console.log("Successfully posted");
addAnimals();
}
});
}
});
}
