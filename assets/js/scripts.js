const books = [];
const RENDER_EVENT = "render-book";

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.querySelector("form");
  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addBook();
  });
});

document.addEventListener(RENDER_EVENT, function () {
  const onProgressBookshelf = document.getElementById("onprogress-bookshelf");
  const finishedBookshelf = document.getElementById("finished-bookshelf");

  onProgressBookshelf.innerHTML = "";
  finishedBookshelf.innerHTML = "";

  for (const book of books) {
    console.log(book);
  }
});

function addBook() {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const year = document.getElementById("book-year").value;
  const isComplete = document.getElementById("book-finish").checked;

  const id = generateId();

  const bookObject = {
    id,
    title,
    author,
    year,
    isComplete,
  };

  books.push(bookObject);
  clearForm();

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function clearForm() {
  const form = document.querySelector("form");
  form.reset();
}

function generateId() {
  return +new Date();
}
