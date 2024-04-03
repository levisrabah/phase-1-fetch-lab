function fetchBooks() {
  // Sending a fetch request to 'https://anapioficeandfire.com/api/books'
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

// Funtion rendering the book titles into the DOM by passing a JSON object to render books
function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})