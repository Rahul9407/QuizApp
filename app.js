// ...existing code...
const firebaseConfig = {
   apiKey: "AIzaSyDRAHHUf5LUqYKeycs2Pf8iUyaDBHmz_3I",
    authDomain: "quiz-app-9e35f.firebaseapp.com",
    databaseURL: "https://quiz-app-9e35f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quiz-app-9e35f",
    storageBucket: "quiz-app-9e35f.firebasestorage.app",
    messagingSenderId: "389622783983",
    appId: "1:389622783983:web:535e6e70a0a6a59c74e01a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Auth
const auth = firebase.auth();

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById("status").innerText = "Sign Up successful!";
    })
    .catch(error => {
      document.getElementById("status").innerText = `Error: ${error.message}`;
    });
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById("status").innerText = "Sign In successful!";
      window.location.href = "dashboard.html"
    })
    .catch(error => {
      document.getElementById("status").innerText = `Error: ${error.message}`;
    });
}

function signOut() {
  auth.signOut()
    .then(() => {
      document.getElementById("status").innerText = "Sign Out successful!";
      window.location.href = "login.html";
    })
    .catch(error => {
      document.getElementById("status").innerText = `Error: ${error.message}`;
    });
}

// Make signOut available globally
window.signOut = signOut;

// ...existing code...