const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const notesContainer = document.getElementById('notesContainer');
const modal = document.getElementById('noteModal');
const addNoteBtn = document.getElementById('addNoteBtn');
console.log(addNoteBtn);

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notas')) || [];
  notesContainer.innerHTML = '';
  notes.forEach(renderNote);
}

function saveNote(note) {
  const notes = JSON.parse(localStorage.getItem('notas')) || [];
  notes.push(note);
  localStorage.setItem('notas', JSON.stringify(notes));
}

function renderNote(note) {
  const card = document.createElement('div');
  card.className = 'mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col';
  card.style.padding = '16px';
  card.innerHTML = `<div class="mdl-card__supporting-text">${note}</div>`;
  notesContainer.appendChild(card);
}

noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const note = noteInput.value.trim();
  if (note) {
    saveNote(note);
    loadNotes();
    noteInput.value = '';
    modal.classList.add('hidden');
  }
});

addNoteBtn.addEventListener('click', () => {
  console.log('Add Note Button Clicked');
  modal.classList.remove('hidden');
  noteInput.focus();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

loadNotes();
