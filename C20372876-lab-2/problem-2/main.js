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
        .catch(function(err) {
            console.log("Error:", err);
            reject(err);
        });
    })
    
};

async function useData() {
    const data = await request(api);
    var newArray = [], wordObj;

    data.forEach(el => {
        let body = el.body.split(/[\\\s]+/);

        var result = el.title.split(" ");

        // // Get all titles with values > 6
        // if (result.length > 6) {
        //     console.log(el.id);
        //     console.log(el.title);
        // }

        // Show word frequency map for all of the body contents of the posts
        body.map((word) => {

            // Check if word exists in the array using filter()
            wordObj = newArray.filter((w) => {
                return w.text == word;  // Return 
            })

            // If it does exist (i.e., there's length)
            if (wordObj.length) {
                wordObj[0].size += 1;   // Increment its size
            } else {
                newArray.push({text: word, size: 1});   // Push new word 
            };
        });        
    });

    console.log(newArray);
    
};

useData();