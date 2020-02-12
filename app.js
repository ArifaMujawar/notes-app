const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

// console.log(chalk.yellow('Success'));
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

yargs.version('1.0.0')

yargs.command({
  command: 'add',
  describe:'Add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note Body',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title,argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe:'Removing a note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
   notes.removeNotes(argv.title)
    
  }
})


yargs.command({
  command: 'list',
  describe:'listing a note',
  handler(){
    notes.listNotes()
  }
})


yargs.command({
  command: 'read',
  describe:'reading a note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    notes.readNotes(argv.title)
  }
})

// console.log(yargs.argv)
yargs.parse()