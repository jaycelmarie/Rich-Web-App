const api='https://jsonplaceholder.typicode.com/posts';

function request(url) {
    /* Promise: pending, fulfilled or rejected. 
        Pending: Initial state, neither fulfilled / rejected.
        Fulfilled: Operation completed.
        Rejected: Operation failed
    */
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (response.status !== 200) {
                console.log("Error. Status Code: " + response.status);
                return; 
            }

            response.json().then(data => {
                resolve(data);
            });
        })
        .catch(function(error) {
            console.log("Error:", error);
            reject(error);
        });
    })
    
};

async function useData() {
    const data = await request(api);
    
    data.map(el => {

        var result = el.title.split(" ");

        // Get all titles with values > 6
        if (result.length > 6) {
            console.log(el.id);
            console.log(el.title);
        }     
    });
    
};

useData();