
var firebaseConfig = {
    apiKey: "AIzaSyCCtwkSWXXSGyh4dMc1h5P8gc4Tz3j67zc",
    authDomain: "kwitterapp-62153.firebaseapp.com",
    databaseURL: "https://kwitterapp-62153-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-62153",
    storageBucket: "kwitterapp-62153.appspot.com",
    messagingSenderId: "582857285147",
    appId: "1:582857285147:web:65aa45b67c2daeb0c4e2be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send() {
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
