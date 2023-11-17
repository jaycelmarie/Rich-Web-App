// I created a new function for selecting colours for this lab as the onClick function from my problem 1 week 1 was clashing
// with the rxjs
function colorSelection(){

    var color_selection = ["#1E90FF", "#5F9EA0", "#F0E68C", "#ADFF2F", "#DC143C", "#EE82EE", "#8A2BE2", "#2F4F4F", "#696969", "#D3D3D3"];

    // get element of colour chosen
    document.getElementById("blue").style.backgroundColor = color_selection[0];



    //
    addNote();

}