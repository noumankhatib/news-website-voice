export const getAllArticles =()=>{
return new Promise((resolve,reject)=>{

    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch('http://localhost:5000/api/v1/articles/getAllArticles', requestOptions)
    .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return reject(error);
        }

        return resolve(data)
       // this.setState({ postId: data.id })
    })
    .catch(error => {
       // this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });

})
}