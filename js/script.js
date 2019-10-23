var dating = [
  {
    name: "Stacey Lane Mathews",
    gender: "Female",
    simulation: true,
    age: 30,
    favouriteColour: "Blue",


  },
  {
    name: "Kate Tiffany",
    gender: "Female",
    simulation: false,
    age: 25,
    favouriteColour: "Green",


  },
  {
    name: "Vincent Peters",
    gender: "Male",
    simulation: true,
    age: 22,
    favouriteColour: "Pink",


  },
  {
    name: "Friendrich Heinz",
    gender: "Male",
    simulation: true,
    age: 28,
    favouriteColour: "Purple",


  },
  {
    name: "George Thomas Arthur",
    gender: "Male",
    simulation: true,
    age: 30,
    favouriteColour: "Blue",


  },
  {
    name: "Amelia Charlotte",
    gender: "Female",
    simulation: false,
    age: 24,
    favouriteColour: "Yellow",


  },
  {
    name: "Ava Mia Olivia",
    gender: "Female",
    simulation: false,
    age: 26,
    favouriteColour: "Red",


  },
  {
    name: "Aaron Gabriel Baldwin",
    gender: "Male",
    simulation: true,
    age: 20,
    favouriteColour: "Green",


  },
  {
    name: "Daniel Felix Barry",
    gender: "Male",
    simulation: true,
    age: 29,
    favouriteColour: "Pink",


  },
  {
    name: "Harold Earl Fabian",
    gender: "Male",
    simulation: false,
    age: 30,
    favouriteColour: "Orange",


  },
  {
    name: "Abigail Evelyn Beth",
    gender: "Female",
    simulation: false,
    age: 19,
    favouriteColour: "Navy",


  },
  {
    name: "Scarlett Emma Grace",
    gender: "Female",
    simulation: false,
    age: 20,
    favouriteColour: "Scarlet",


  },
  {
    name: "Ronnie Vin Calvin",
    gender: "Male",
    simulation: true,
    age: 18,
    favouriteColour: "Yellow",


  },
  {
    name: "Caleb Harry Abe",
    gender: "Male",
    simulation: true,
    age: 27,
    favouriteColour: "Blue",


  },
  {
    name: "Gabe Ned Eddy",
    gender: "Male",
    simulation: false,
    age: 22,
    favouriteColour: "Green",


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
  return '<div class="card-body">' +
    '<h5 class="card-title">' + person.name + '</h5>' +
    '<p class="card-text">gender: ' + person.gender + '</p>' +
    '<p class="card-text">simulation: ' + person.simulation + '</p>' +
    '<p class="card-text">age: ' + person.age + '</p>' +
    '<p class="card-text">favouriteColour: ' + person.favouriteColour + '</p>' +
    '</div>';
}