//This information should be stored in 4 different objects. All of this objects should be 
//stored in localstorage in advance. Their localstorage key should be their respective names.  
//For e.g Scope data will be stored in LocalStorage with key as "scope". 
//( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.


var scopeData = [
    "Scopes in JavaScript refer to the accessibility of variables.",
    "JavaScript has two types of scopes: local and global.",
    "Local scope refers to variables declared within a function and can only be accessed within that function.",
    "Global scope refers to variables declared outside of any function and can be accessed from anywhere in the code.",
    "Understanding scope is crucial for avoiding variable conflicts and writing maintainable code.",
  ];

var hoistingData = [
    "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.",
    "Variable declarations are hoisted but not their initializations.",
    "Function declarations are hoisted along with their definitions.",
    "Understanding hoisting helps in understanding unexpected behavior in JavaScript code.",
    "It's recommended to declare variables at the top of their scope to avoid hoisting-related issues.",
  ];

var varructorFunctionsData = [
    "varructor functions in JavaScript are used to create objects with similar properties and methods.",
    "They are defined using the 'function' keyword followed by the name of the varructor.",
    "The 'this' keyword refers to the current instance of the object being created.",
    "varructor functions are invoked using the 'new' keyword.",
    "They can have parameters to initialize the object's properties.",
  ];

var prototypeData = [
    "In JavaScript, objects can have a prototype property, which makes inheritance possible.",
    "The prototype property allows adding methods and properties to all instances of an object.",
    "Objects inherit properties and methods from their prototype.",
    "Modifying the prototype of an object affects all instances of that object.",
    "Understanding prototypes is essential for building efficient and maintainable JavaScript code.",
  ];
 
localStorage.setItem('scope', JSON.stringify(scopeData));
localStorage.setItem('hoisting', JSON.stringify(hoistingData));
localStorage.setItem('varructor', JSON.stringify(varructorFunctionsData));
localStorage.setItem('prototype', JSON.stringify(prototypeData));

// Function to display information
function displayInfo(concept) {
   // Retrieve data from localStorage
   var data = JSON.parse(localStorage.getItem(concept));
  
  // Get reference to the info div
  var infoDiv = document.getElementById('info');
  
  // Clear previous content
  infoDiv.innerHTML = '';
  
  // Create a list element to hold the information
  var list = document.createElement('ul');
  
  // Iterate through the data and create list items
data.forEach(function(item) {
  var listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
});

  
  // Append the list to the info div
  infoDiv.appendChild(list);
  
  
  
  // Show video if available
  var video = document.getElementById('video');
  video.style.display = 'none'; // Hide video by default
  if (concept === 'scope') {
    video.style.display = 'block';
    video.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"; // Replace 'scope_video.mp4' with actual video source
  } else if (concept === 'hoisting') {
    video.style.display = 'block';
    video.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"; // Replace 'hoisting_video.mp4' with actual video source
  } else if (concept === 'varructor') {
    video.style.display = 'block';
    video.src =  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"; // Replace 'varructor_video.mp4' with actual video source
  } else if (concept === 'prototype') {
    video.style.display = 'block';
    video.src =  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"; // Replace 'prototype_video.mp4' with actual video source
  }
}

// Add event listeners to buttons
document.getElementById('scope').addEventListener('click', function() {
  displayInfo('scope');
});

document.getElementById('hoisting').addEventListener('click', function() {
  displayInfo('hoisting');
});

document.getElementById('varructor').addEventListener('click', function() {
  displayInfo('varructor');
});

document.getElementById('prototype').addEventListener('click', function() {
  displayInfo('prototype');
});