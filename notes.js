const fs = require('fs')
const chalk = require('chalk');


const addNote = (title, body)=>{
  const notes = loadNotes()
  //const duplicateNotes = notes.filter(note => note.title === title)
  const duplicateNote = notes.find(note => note.title === title)
  if(!duplicateNote){
    notes.push({
      title: title,
      body:body
    })
    saveNotes(notes)
    console.log('New note added!')
  }else{
    console.log('Note title taken!')
  }
  
}

const saveNotes=(notes)=>{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  }catch(e){
    return []
  }
}


const removeNotes=(title)=> {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note)=> note.title !== title)

if(notes.length > notesToKeep.length){
  console.log(chalk.red.inverse('Note Removed'));
  saveNotes(notesToKeep)
}else{
  console.log(chalk.green.inverse('No note found!'))
}
}

const listNotes = () =>{
  const notes = loadNotes()
  console.log(chalk.yellow('Your notes: '))
  notes.forEach(element => {
    console.log(element.title)
  });
}

const readNotes = (title) => {
 const notes = loadNotes()
 const note = notes.find((item)=>item.title === title)
  if(note){
    console.log(chalk.inverse('Title: '+ note.title) + ' Body: ' + note.body)

  }else{
    console.log(chalk.red.inverse('Note not found'))
  }

 
}

module.exports = {
  addNote,
  removeNotes,
  listNotes,
  readNotes
}
