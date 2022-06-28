// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBptsU7NSrmE-giGFrtulB9t--2igHz4s",
    authDomain: "bus-ticket-reservation-7f9fa.firebaseapp.com",
    databaseURL: "https://bus-ticket-reservation-7f9fa-default-rtdb.firebaseio.com",
    projectId: "bus-ticket-reservation-7f9fa",
    storageBucket: "bus-ticket-reservation-7f9fa.appspot.com",
    messagingSenderId: "57977828568",
    appId: "1:57977828568:web:c6a79759f30e2b762d93ad",
    measurementId: "G-4C8M1H9RSH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Create firebase databasesss
  let messageRef = firebase.database().ref("Booked");
  
  // Listening for form submit
  document.getElementById("control-from").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    // get values
    let username = getInputIdal("username");
    let Numseats = getInputIdal("Numseats");
   
  
    saveMessage(username, Numseats);
  
  
    // show alert
    document.querySelector(".alert").style.display = "block";
  
    // Hide alert after 3sec
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Clear form
    document.getElementById("control-from").reset();
  }
  
  // function to get form value
  function getInputIdal(id) {
    return document.getElementById(id).value;
  }
  
  // save data to firebase
  function saveMessage(name, email) {
    let newMessageRef = messageRef.push();
    newMessageRef.set({
      name: name,
      email: email,
    });
  }
  