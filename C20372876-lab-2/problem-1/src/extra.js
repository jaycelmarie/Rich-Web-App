/* Function to Search for Phone Numbers */
function search(n) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("num2");
    let noresult = document.getElementById("no-result");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbl");
    //tBody = document.getElementById("Plist");
    tr = table.getElementsByTagName("tr");
  
    var counter = tr.length-1;
    
    //for loop to go through rows and its data
    for(i = 0; i < tr.length; i++) {
  
     
      td = tr[i].getElementsByTagName("td")[n];
      console.log(tr.data)
  
      // if there's data with content / text
      if(td) {
        txtValue = td.textContent || td.innerText;
        
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
          counter = counter-1
        }
      }
    }
  
      // if no result
      if(counter == 0) {
        noresult.style.display="block";
      } else {
        noresult.style.display = "none";
      }
  }