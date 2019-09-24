var enterButton = document.querySelector(".enter-button");
var websiteTitle = document.querySelector(".title-input");
var websiteUrl = document.querySelector(".url-input");
var bookmarkParent = document.querySelector('.main-empty')
var bookmarkArray = [];
var bookmarkId = 0;

enterButton.addEventListener("click", clickEnterButton);

function clickEnterButton() {
  instantiation();
  createBookmark();
}

function instantiation() {
  instantiateBookmark(websiteTitle.value, websiteUrl.value);
}

function instantiateBookmark(title, url, read) {
  var bookmark = new Bookmark(bookmarkId, title, url, read);
  bookmarkArray.push(bookmark);
  bookmarkId ++;
}

function createBookmark() {
  for (var i = 0; i < bookmarkArray.length; i++) {
  var bookmarkHtml = `
    <div class="bookmark-card">
      <h2 class="website-title">${bookmarkArray[i].title}</h2>
      <p class="website-url">${bookmarkArray[i].url}</p>
      <div class="card-button">
        <p class="read-button">Read</p>
        <p class="delete-button">Delete</p>
      </div>
    </div>`
    bookmarkParent.insertAdjacentHTML('afterbegin', bookmarkHtml);
  }
  return bookmarkHtml;
}
