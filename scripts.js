document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const resultContainer = document.querySelector('.result-container');

    const books = [
        { title: 'The Way of Kings', author: 'Brandon Sanderson', cover: 'imgs/TheWayOfKings.png' },
        // Add more book objects here
    ];

    function displayBooks(books) {
        resultContainer.innerHTML = '';
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('result-card');
            bookCard.innerHTML = `
                <img src="${book.cover}" alt="Capa do Livro" class="book-cover">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                </div>
            `;
            resultContainer.appendChild(bookCard);
        });
    }

    function filterBooks() {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    }

    searchInput.addEventListener('input', filterBooks);

    // Initial display of books
    displayBooks(books);
});