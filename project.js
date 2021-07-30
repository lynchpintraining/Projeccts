
function addData(){
    var bTitle = document.getElementById("bt").value;
    var bText = document.getElementById("btxt").value;

    // // var myPTag = document.createElement("p");
    // var myDiv = document.createElement('div');
    // myDiv.id = count;

    var myH1Tag = document.createElement("h1");
    var myBlog = document.createElement("p");
    var myHr = document.createElement("hr");

    var myTitle = document.createTextNode(bTitle);
    var myPTagContent = document.createTextNode(bText);

    myH1Tag.appendChild(myTitle);
    myBlog.appendChild(myPTagContent);
   
    // document.getElementById("title").appendChild(myH1Tag);
   
    document.getElementById("main").appendChild(myH1Tag);
    document.getElementById("main").appendChild(myBlog);
    document.getElementById("main").appendChild(myHr); 
    
}

