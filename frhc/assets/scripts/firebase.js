
var config = {
    apiKey: "AIzaSyCa02CX_0V-4JlTL23RqWicIQsVaon_Nmc",
    authDomain: "project-5969147296536785851.firebaseapp.com",
    databaseURL: "https://project-5969147296536785851.firebaseio.com",
    storageBucket: "project-5969147296536785851.appspot.com",
};

var app = firebase.initializeApp(config);
var database = firebase.database();


/**
 * Handles the sign in button press.
 */
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        window.location.href = "index.html"
        // [END signout]
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
    document.getElementById('sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authwithemail]
  }
  document.getElementById('sign-in').disabled = true;
};

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (displayName.length < 4) {
        alert('Please enter your first and last name');
        return;
    }
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
};

/**
 * Sends an email verification to the user.
 */
function sendEmailVerification() {
    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
    });
    // [END sendemailverification]
};

function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
};

var user = firebase.auth().currentUser;
    
function submit() {
    var user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: displayName,
        photoURL: photoURL,
    }).then(function() {
      // Update successful.
    }, function(error) {
      // An error happened.
    });
};

/**
*@function updateProfile
*@description takes user to profile update page and saves profile info
*/
function updateProfile() {
    console.log('clicked!');
    
    var submit = function() {
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: displayName,
            photoURL: photoURL,
        }).then(function() {
          // Update successful.
        }, function(error) {
          // An error happened.
        });
    };
    
    document.getElementById('firebase-auth-container').innerHTML = 
        '<input class="mdl-textfield__input" style="width:auto;" type="text" id="display-name" name="displayName" placeholder="Full Name"/>'
    +   '<input class="mdl-textfield__input" style="width:auto;" type="photoURL" id="photoURL" name="photoURL" placeholder="URL of Your Display Photo"/>'
    +   '<button class="mdl-button mdl-js-button mdl- button--raised" id="submit" name="Submit" onclick="submit()">Submit</button>'
    ;
    
    var displayName = document.getElementById('display-name').value;
    var photoURL = document.getElementById('photoURL').value;
    var user = firebase.auth().currentUser;
    
    function submit() {
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: displayName,
            photoURL: photoURL,
        }).then(function() {
          // Update successful.
        }, function(error) {
          // An error happened.
        });
    };
};

/**
 * Handles registering callbacks for the auth status.
 *
 * This method registers a listener with firebase.auth().onAuthStateChanged. This listener is called when
 * the user is signed in or out, and that is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var refreshToken = user.refreshToken;
            var providerData = user.providerData;
            // [START_EXCLUDE silent]
            document.getElementById('sign-in-status').textContent = 'Signed in';
            document.getElementById('sign-in').textContent = 'Sign out';
            document.getElementById('firebase-auth-container').innerHTML = 
                '<h2>' + displayName + '</h2>'
            +   '<h4>' + email + '</h4>'   
            +   '<button class="mdl-button mdl-js-button mdl-button--raised" id="sign-in" name="signin">Sign In</button>&nbsp;&nbsp;&nbsp; '
            +   '<button class="mdl-button mdl-js-button mdl-button--raised" disabled id="verify-email" name="verify-email">Send Email Verification</button>&nbsp;&nbsp;&nbsp;'
            +   '<button class="mdl-button mdl-js-button mdl-button--raised" id="password-reset" name="verify-email">Send Password Reset Email</button>&nbsp;&nbsp;&nbsp;'
            
            +   '<button class="mdl-button mdl-js-button mdl-button--raised" id="update-profile" name="update-profile" onclick="updateProfile()">Update Profile</button>&nbsp;&nbsp;&nbsp;'
            +   '<a href="assets/pages/documents.html">My Documents</a>'
            ;
            document.getElementById('sign-in').textContent = 'Sign out';
            document.getElementById('sign-in').addEventListener('click', toggleSignIn, false) = 'Sign out';
            document.getElementById('update-profile').addEventListener('click', updateProfile(), false);
            if (!emailVerified) {
                document.getElementById('verify-email').disabled =   false;
            }
            // [END_EXCLUDE]
        } else {
            // User is signed out.
            // [START_EXCLUDE silent]
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
//            document.getElementById('account-details').textContent = 'null';
            document.getElementById('sign-in').disabled = false;
            // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('sign-in').disabled = false;
        // [END_EXCLUDE]
    });
    // [END authstatelistener]
    document.getElementById('sign-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('sign-up').addEventListener('click', handleSignUp, false);
    document.getElementById('verify-email').addEventListener('click', sendEmailVerification, false);
    document.getElementById('password-reset').addEventListener('click', sendPasswordReset, false);
};

window.onload = function() {
  initApp();
};