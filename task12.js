const axios = require('axios');

async function getBooksByAuthor() {
    try {
        const response = await axios.get('http://localhost:5000/author/authorname');
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

getBooksByAuthor();
