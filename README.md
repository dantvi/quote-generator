# Quote Generator

This project is a random quote generator created as part of the course "JavaScript Web Projects: 20 Projects to Build Your Portfolio" by Zero To Mastery. It allows users to load and view a random quote, with an option to share the quote on Twitter.

## Table of contents

- [Quote Generator](#quote-generator)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

This project enables users to:
- Display a random quote upon loading the page.
- Load a new quote by clicking the "New Quote" button.
- Share the current quote on Twitter via the Twitter button.

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [DT Code](https://quote-generator.dtcode.se/)

## My process

### Built with

- HTML5 for structure
- CSS3 for styling, including Flexbox and responsive design
- JavaScript (ES6+) for functionality
- Fetch API to retrieve quotes from an external JSON file
- Font Awesome icons for buttons

### What I learned

While building this project, I learned how to use the Fetch API to retrieve data from an external JSON file and dynamically update the DOM based on that data. I also implemented a loading spinner to improve user experience during API fetch delays.

Example code for fetching and displaying quotes:

```js
async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(error);
    }
}
```

### Useful resources

- [JavaScript Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - This helped me understand how to retrieve data asynchronously.
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - A great resource for responsive layout design.

## Author

- GitHub - [@dantvi](https://github.com/dantvi)
- LinkedIn - [@danieltving](https://www.linkedin.com/in/danieltving/)

## Acknowledgments

Special thanks to Zero To Mastery for providing the course and project structure, which was instrumental in helping me build my JavaScript and API integration skills.
