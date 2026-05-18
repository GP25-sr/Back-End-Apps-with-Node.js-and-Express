const axios = require('axios');

async function getBooksByTitle() {
    try {
        const response = await axios.get('http://localhost:5000/title/booktitle');
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

getBooksByTitle();
