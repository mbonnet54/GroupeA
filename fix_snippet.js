// Example fix for the wheel of fortune code
// Keep the span with id="finalMessage" when updating the message area
function startQuickPuzzle(){
    var messageDiv = document.getElementById('finalMessageDisplay');
    messageDiv.innerHTML = '';
    var span = document.createElement('span');
    span.id = 'finalMessage'; // Preserve id so future updates work
    span.textContent = 'Énigme rapide en cours. Le gagnant remporte des points !';
    var btn = document.createElement('button');
    btn.textContent = 'Révéler une lettre';
    btn.onclick = revealRandomLetter;
    messageDiv.appendChild(span);
    messageDiv.appendChild(document.createElement('br'));
    messageDiv.appendChild(btn);
}

// In the rest of the code replace direct manipulations of innerHTML
// such as:
// document.getElementById('finalMessageDisplay').innerHTML = '<span>'+msg+'</span>'; 
// with the helper below to always recreate the span with the id.
function updateFinalMessage(msg){
    var container = document.getElementById('finalMessageDisplay');
    container.innerHTML = '<span id="finalMessage">'+msg+'</span>';
}
