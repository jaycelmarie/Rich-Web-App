var form = document.getElementById("myForm");

form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

    var origName = search.split(' ').join('')

    fetch("https://api.github.com/users/"+origName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
            <img src="${data.avatar_url}"/> 
            <tr class="tbl1">
                <th>Name: </th>
                <td>${data.name ? data.name : "N/A"}</td>
            </tr>
            <tr class="tbl1">
                <th>Username: </th>
                <td>${data.login ? data.login : "N/A"}</td>
            </tr>
            <tr class="tbl1">
                <th>Email: </th>
                <td>${data.email ? data.email : "N/A"}</td>
            </tr>
            <tr class="tbl1">
                <th>Location: </th>
                <td>${data.location ? data.location : "N/A"}</td>
            </tr>
            <tr class="tbl1">
                <th>Number of Gists: </th>
                <td>${data.public_gists ? data.public_gists : "N/A"}</td>
            </tr>
        `
    })

    fetch("https://api.github.com/users/"+origName+"/repos")
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        const tbl = document.querySelector("#result2");
        const row = document.getElementById('list');

        if (row.length == 0) {
            console.log(`No repos found`)
        } else {
            const r = document.getElementById('list');
            while (r.firstChild) {
                r.removeChild(r.firstChild);
            }
        }

        for(let i = 0; i < data.length; i++) {
 
            row.innerHTML += `

            <tr class="title">
                <th>Title </th>
                <td>${data[i].name}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>${data[i].description ? data[i].description : "N/A"}</td>
            </tr>
            `;
            
            tbl.appendChild(row);
         
        }
        
        let rowCount = document.getElementById('table-wrapper');
        if(document.querySelectorAll('#list tr').length > 10) {
            console.log('Found more than 5 repos');
            rowCount.style.display = 'block';
            rowCount.classList.add('add-scroll');
        } else {
            console.log('Found less than 5 repos');
            // rowCount.style.display = 'none';
            rowCount.classList.remove('add-scroll');
        }

    }) 

   

});

