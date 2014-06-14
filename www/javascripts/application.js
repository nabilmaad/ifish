// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("iFish");

// var loginText = null;

// document.addEventListener("DOMContentLoaded", function() {
//   loginText = document.querySelector("#login-text");
// });

// var loginButton = new steroids.buttons.NavigationBarButton();
// loginButton.title = "Log in";

// var logoutButton = new steroids.buttons.NavigationBarButton();
// logoutButton.title = "Log out";

// loginButton.onTap = function() {
//     loginText.textContent = "Welcome, Agnus M.!";
//     steroids.view.navigationBar.update({
//         buttons: {
//           right: [loginButton]
//         }
//     });
// };

// logoutButton.onTap = function() {
//     loginText.textContent = "Please log in.";
//     steroids.view.navigationBar.update({
//         buttons: {
//           right: [loginButton]
//         }
//     });
// };

// steroids.view.navigationBar.update({
//     //overrideBackButton: true,
//     buttons: {
//       right: [loginButton]
//     }
// });

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#FFFFFF");

function openLayer(location) {
  // Create a new WebView that...
  webView = new steroids.views.WebView({ location: "views/" + location });

  // ...is pushed to the navigation stack, opening on top of the current WebView.
  steroids.layers.push({ view: webView });
  //steroids.view.navigationBar.show("Sign up");
  //steroids.view.navigationBar.update("iFish");
}

function openModal(location) {
  // Create a new WebView that...
  webView = new steroids.views.WebView({ location: "/views" + location });

  // ...opens as a modal screen on top of the current WebView.
  steroids.modal.push({ view: webView });
}

function hideModal() {
  // Hide a currently open modal
  steroids.modal.hide();
}
