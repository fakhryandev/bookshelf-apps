const books = [];

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.querySelector("form");
  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addBook();
  });
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
}

function clearForm() {
  const form = document.querySelector("form");
  form.reset();
  console.log(books);
}

function generateId() {
  return +new Date();
}
