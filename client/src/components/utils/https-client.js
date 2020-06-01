export const getAllArticles =(filter)=>{
return new Promise((resolve,reject)=>{

    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    };

    fetch('http://localhost:5000/api/v1/articles/getAllArticles?'+filter, requestOptions)
				
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


export const getArticles =(articleType, category,filter)=>{
    return new Promise((resolve,reject)=>{
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category,
            articleType})
        };
    
        fetch('http://localhost:5000/api/v1/articles/getArticles?'+filter, requestOptions)
                    
        .then(async response => {
            const data = await response.json();
    
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return reject(error);
            }
            console.log("data!!!!!!!!!!!!"+JSON.stringify(data))
            return resolve(data)
           // this.setState({ postId: data.id })
        })
        .catch(error => {
           // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    
    })
    }


export const getAllCatagory =()=>{
    return new Promise((resolve,reject)=>{
        const requestOptions = {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:5000/api/v1/category/getAll', requestOptions)
        .then(async response => {
            const data = await response.json();
    
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return reject(error);
            }
            console.log("data" +JSON.stringify(data.data[0].categorys))
            return resolve(data.data[0].categorys)
           // this.setState({ postId: data.id })
        })
        .catch(error => {
           // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    
    })
    }
    export const addArticle =(data)=>{
        return new Promise((resolve,reject)=>{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(data)
            };
            fetch('http://localhost:5000/api/v1/articles/createArticles', requestOptions)
            .then(() => resolve('Record Created'))
            .catch(err => {
                console.error(err);
            });
        })
        }

