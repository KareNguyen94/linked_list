var enterButton = document.querySelector(".enter-button");
var websiteTitle = document.querySelector(".title-input");
var websiteUrl = document.querySelector(".url-input");
var bookmarkParent = document.querySelector('.main-empty')
var bookmarkArray = [];
var bookmarkId = 0;

enterButton.addEventListener("click", clickEnterButton);
bookmarkParent.addEventListener("click", onBookmarkClick);

function clickEnterButton() {
  instantiation();
  // createBookmark();
}

function onBookmarkClick() {
  deleteBookmark(event);
  styleReadBookmark(event);
}

function instantiation() {
  instantiateBookmark(websiteTitle.value, websiteUrl.value);
}

function instantiateBookmark(title, url, read) {
  var bookmark = new Bookmark(bookmarkId, title, url, read);
  createBookmark(bookmark);
  // bookmarkArray.push(bookmark);
  bookmarkId ++;
}

function createBookmark(bookmark) {
  // wipe out all ele within bookMarkParent
  // for (var i = 0; i < bookmarkArray.length; i++) {
  //   console.log(bookmarkArray)

  var bookmarkHtml = `
    <section>
      <div class="bookmark-card">
        <h2 class="website-title">${bookmark.title}</h2>
        <a href="${bookmark.url}" target="_blank" class="website-url">${bookmark.url}</a>
        <div class="card-button">
          <p class="read-button">Read</p>
          <p class="delete-button">Delete</p>
        </div>
      </div>
    </section>`
    bookmarkParent.insertAdjacentHTML('afterbegin', bookmarkHtml);
  // }
}

// function readProperty(event) {
//   var bookId = event.target.parentNode.dataset.bookid;
//   for (var i = 0; i < bookmarkArray.length; i++) {
//     if (bookmarkArray[i].id === bookId) {
//         bookmarkArray[i].toggleRead();
//         return bookmarkArray[i];
//     }
//   }
// }

function styleReadBookmark(event) {
  if (event.target.classList.contains("read-button")) {
    // var bookmark = toggleRead();
  // var object = readProperty(event);
  if (bookmark.read === true) {
      event.target.parentNode.classList.add("bookmark-read");
      event.target.parentNode.classList.add("text-read");
    } else {
      event.target.classList.remove("bookmark-read");
      event.target.parentNode.classList.remove("text-read");
    }
  }
}

function deleteBookmark(event) {
    if (event.target.classList.contains("delete-button")) {
       event.target.closest("section").remove();
    }
};
