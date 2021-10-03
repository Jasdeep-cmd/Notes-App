let targetBtn = document.getElementById('targetBttn');

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

function displayNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    let vaer=0;
    notesObj.forEach(function (element, index){
        vaer=vaer+1;
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button href="#" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    console.log(vaer);
    let noteElm=document.getElementById('notes');
    if(notes.length!=0){
        noteElm.innerHTML=html;
    }
}
