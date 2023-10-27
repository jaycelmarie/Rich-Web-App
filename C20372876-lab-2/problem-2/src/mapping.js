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
    var newArr = [], obj;

    data.map(el => {
        let body = el.body.split(/[\\\s]+/);

        // map through body contents of posts
        body.map((word) => {

            obj = newArr.filter((w) => {
                return w.text == word; 
            })

            if (obj.length) {
                obj[0].size += 1;   
            } else {
                newArr.push({text: word, size: 1});  
            };
        });        
    });
    console.log(newArr);
};

useData();