class Bookmark {
  constructor(id, title, url, read) {
    this.id = id;
    this.title  = title;
    this.url = url;
    this.read = false;
  }

  toggleRead() {
    this.read = !this.read;
  }

}
