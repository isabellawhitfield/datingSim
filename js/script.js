var dating = [
  {
    name: "Stacey Lane Mathews",
    gender: "Female",
    simulation: true,
    age: 30,
    favouriteColour: "Blue",
    photo: "images/stacey.jpeg"


  },
  {
    name: "Kate Tiffany",
    gender: "Female",
    simulation: false,
    age: 25,
    favouriteColour: "Green",
    photo: "images/kate.jpeg"


  },
  {
    name: "Vincent Peters",
    gender: "Male",
    simulation: true,
    age: 22,
    favouriteColour: "Pink",
    photo: "images/vincent.jpeg"


  },
  {
    name: "Friendrich Heinz",
    gender: "Male",
    simulation: true,
    age: 28,
    favouriteColour: "Purple",
    photo: "images/friendrich.jpeg"


  },
  {
    name: "George Thomas Arthur",
    gender: "Male",
    simulation: true,
    age: 30,
    favouriteColour: "Blue",
    photo: "images/george.jpeg"


  },
  {
    name: "Amelia Charlotte",
    gender: "Female",
    simulation: false,
    age: 24,
    favouriteColour: "Yellow",
    photo: "images/amelia.jpeg"


  },
  {
    name: "Ava Mia Olivia",
    gender: "Female",
    simulation: false,
    age: 26,
    favouriteColour: "Red",
    photo: "images/ava.jpeg"


  },
  {
    name: "Aaron Gabriel Baldwin",
    gender: "Male",
    simulation: true,
    age: 20,
    favouriteColour: "Green",
    photo: "images/aaron.jpeg"


  },
  {
    name: "Daniel Felix Barry",
    gender: "Male",
    simulation: true,
    age: 29,
    favouriteColour: "Pink",
    photo: "images/daniel.jpeg"


  },
  {
    name: "Harold Earl Fabian",
    gender: "Male",
    simulation: false,
    age: 30,
    favouriteColour: "Orange",
    photo: "images/harold.jpeg"


  },
  {
    name: "Abigail Evelyn Beth",
    gender: "Female",
    simulation: false,
    age: 19,
    favouriteColour: "Navy",
    photo: "images/abigal.jpeg"


  },
  {
    name: "Scarlett Emma Grace",
    gender: "Female",
    simulation: false,
    age: 20,
    favouriteColour: "Scarlet",
    photo: "images/scarlett.jpeg"


  },
  {
    name: "Ronnie Vin Calvin",
    gender: "Male",
    simulation: true,
    age: 18,
    favouriteColour: "Yellow",
    photo: "images/ronnie.jpeg"


  },
  {
    name: "Caleb Harry Abe",
    gender: "Male",
    simulation: true,
    age: 27,
    favouriteColour: "Blue",
    photo: "images/caleb.jpeg"


  },
  {
    name: "Gabe Ned Eddy",
    gender: "Male",
    simulation: false,
    age: 22,
    favouriteColour: "Green",
    photo: "images/gabe.jpeg"


  },
];

document.getElementById('female').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].gender === "Female") {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('male').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].gender === "Male") {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('simulation').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].simulation === true) {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('blue').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].favouriteColour === "Blue") {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('green').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].favouriteColour === "Green") {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('pink').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].favouriteColour === "Pink") {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('yellow').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].favouriteColour === "Yellow") {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('orange').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].favouriteColour === "Orange") {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('navy').addEventListener('click', function () {
  document.getElementById('results').innerHTML = "";
  for (var i = 0; i < dating.length; i++) {
    if (dating[i].favouriteColour === "Navy") {
      document.getElementById('results').innerHTML += getHtml(dating[i]);
    }
  }
});

document.getElementById('results').innerHTML = "";
for (var i = 0; i < dating.length; i++) {
  document.getElementById('results').innerHTML += getHtml(dating[i]);
}

function getHtml(person) {
  return '<div class="card"><img class="datingimage" src="' + person.photo + '">' +
    '<h5 class="card-title">' + person.name + '</h5>' +
    '<p class="card-text">gender: ' + person.gender + '</p>' +
    '<p class="card-text">simulation: ' + person.simulation + '</p>' +
    '<p class="card-text">age: ' + person.age + '</p>' +
    '<p class="card-text">favouriteColour: ' + person.favouriteColour + '</p>' +
    '</div>';
}