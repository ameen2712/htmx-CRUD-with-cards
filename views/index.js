const createHomepageTemplate = () => /*html*/`
<!DOCTYPE html>
<html>
<head>
  <title>My Reading and Movie List</title>
  <script src="https://unpkg.com/htmx.org@1.9.12"></script>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <main>
    <div class="section">
      <header>
        <h1>My Reading List</h1>
        <div class="search">
          <input 
            type="search"
            name="search"
            required
            placeholder="Search books by title..."
            hx-post="/books/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".book-list"
          />
          <button hx-get="/books" hx-target=".book-list">Show Books</button>
        </div>
      </header>

      <div class="book-list list">
        <ul></ul>
      </div>
      
      <div class="add-book-form">
        <h2>Add a Book</h2>
        <form
          hx-post="/books" 
          hx-target=".book-list ul" 
          hx-swap="beforeend" 
          hx-on::after-request="document.querySelector('.add-book-form form').reset()"
        >
          <input 
            id="title" 
            name="title"
            placeholder="Title" 
            type="text"
            required 
          />
          <input 
            id="author" 
            name="author"
            placeholder="Author" 
            type="text"
            required
          />
          <button>Add</button>
        </form>
      </div>
    </div>

    <div class="section">
      <header>
        <h1>My Favourite Movies List</h1>
        <div class="search">
          <input 
            type="search"
            name="search"
            placeholder="Search movies by title..."
            hx-post="/movies/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".movie-list"
            required
          />
          <button hx-get="/movies" hx-target=".movie-list">Show Movies</button>
        </div>
      </header>

      <div class="movie-list list">
        <ul></ul>
      </div>
      
      <div class="add-movie-form">
        <h2>Add a Movie</h2>
        <form
          hx-post="/movies" 
          hx-target=".movie-list ul" 
          hx-swap="beforeend" 
          hx-on::after-request="document.querySelector('.add-movie-form form').reset()"
        >
          <input 
            id="title" 
            name="title"
            placeholder="Title" 
            type="text"
            required 
          />
          <input 
            id="director" 
            name="director"
            placeholder="Director" 
            type="text"
            required
          />
          <button>Add</button>
        </form>
      </div>
    </div>

    <div class="section">
      <header>
        <h1>My Education</h1>
        <div class="search">
          <input 
            type="search" 
            name="search"
            placeholder="Search education by standard"
            hx-post="/education/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".education-list"
            required
          />
          <button hx-get="/education" hx-target=".education-list">Show Education</button>
        </div>
      </header>

      <div class="education-list list">
        <ul></ul>
      </div>
      
      <div class="add-education-form">
        <h2>Add Education Details</h2>
        <form
          hx-post="/education" 
          hx-target=".education-list ul" 
          hx-swap="beforeend" 
          hx-on::after-request="document.querySelector('.add-education-form form').reset()"
        >
          <input 
            id="standard" 
            name="standard"
            placeholder="Standard" 
            type="text"
            required 
          />
          <input 
            id="institution" 
            name="institution"
            placeholder="Institution" 
            type="text"
            required
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  </main>
</body>
</html>

`;

export default createHomepageTemplate;
