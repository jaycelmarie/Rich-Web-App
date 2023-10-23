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
            <tr>
            <th>Name</th><td>${data.name ? data.name : "N/A"}</td>
            <th>Username</th><td>${data.login ? data.login : "N/A"}</td>
            <th>Email</th><td>${data.email ? data.email : "N/A"}</td>
            <th>Location</th><td>${data.location ? data.location : "N/A"}</td>
            <th>Number of Gists</th><td>${data.public_gists ? data.public_gists : "N/A"}</td>
            </tr>
        `
    })


    fetch("https://api.github.com/users/"+origName+"/repos")
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        for(let i = 0; i < data.length; i++) {
            document.getElementById("result2").innerHTML += `
            <td>${data[i].name}</td>
            <td>${data[i].description ? data[i].description : "N/A"}</td>
            `
        }
        
    })


});