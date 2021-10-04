let targetBtn = document.getElementById('targetBttn');
displayNotes();

targetBtn.addEventListener('click', function (e) {
    let text = document.getElementById('targetText');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(text.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    text.value = "";
    displayNotes();
});

//function to create notes
function displayNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    // let vaer=0;
    notesObj.forEach(function (element, index){
        // vaer=vaer+1;
        html += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    // console.log(vaer);
    let noteElm=document.getElementById('notes');
    if(notesObj.length!=0){
        noteElm.innerHTML=html;
    }
    else{
        noteElm.innerHTML=`Nothing to display! Click on Add Notes to Add notes`;
    }
}

//function to delete note
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    displayNotes();
}

let searchTxt=document.getElementById('searchtxt');

searchTxt.addEventListener("input",function(){
    inputVal=searchTxt.value;
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let para=element.getElementsByTagName("p")[0].innerText;
        // console.log(para);
        if(para.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    });
});