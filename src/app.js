const {TextInput, WebView, ui} = require('tabris');

// Create a web view to show a web page

let urlInput = new TextInput({
  left: 8, right: 8, top: 8,
  message: 'Enter URL...',
  text: 'https://owambestyles.com'
}).on('accept', loadUrl)
  .appendTo(ui.contentView);

let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(ui.contentView);

function loadUrl() {
  webView.url = urlInput.text;
}

loadUrl();
