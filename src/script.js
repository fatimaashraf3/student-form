
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getDatabase , ref, set, get,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyARlS0Pf3KF-vNL_WLl5cZO2Jy-rGffr6o",
    authDomain: "assignment-20b62.firebaseapp.com",
    projectId: "assignment-20b62",
    storageBucket: "assignment-20b62.appspot.com",
    messagingSenderId: "860776131548",
    appId: "1:860776131548:web:533ac9f9d17be95cf63d19",
    measurementId: "G-4YV72JYR75"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  let submit = document.getElementById("submit")

  submit.addEventListener("click", function(){

    set(ref(db, 'user/' + document.getElementById("name").value),
    {

        name : document.getElementById("name").value,
        fathername : document.getElementById("fathername").value,
        email : document.getElementById("email").value,
         birth : document.getElementById("birth").value,
  })
  name.value = ""
  fathername.value = ""
  email.value = ""
  birth.value = ""
})
  
  