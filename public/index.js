
const form = document.getElementsByTagName('form')[0];
const inputURL = document.getElementById('longURL');
const linkTag = document.getElementById('linkTag');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
    event.preventDefault();   
    const longURL = inputURL.value; 

    if(longURL.length > 0) {
        try {
            fetch('/shortURL',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    longURL: longURL
                })
            })
            .then(response => response.json())
            .then(response => {
                if(response.status === 'success') {
                    error.innerHTML = '';
                    shortLink = response.data;  
                    linkTag.innerText = shortLink;
                    linkTag.setAttribute('href', shortLink);
                }
                else {
                    error.innerText = response.message;
                    linkTag.innerText = '';
                    linkTag.setAttribute('href', '');
                }
            });
        }
        catch(err) {
            error.innerText = 'Something went wrong. Please try again.';
            linkTag.innerText = '';
            linkTag.setAttribute('href', '');
        }
        
    }
    else {
        error.innerText = 'URL field cannot be empty';
        linkTag.innerText = '';
        linkTag.setAttribute('href', '');
    }
});