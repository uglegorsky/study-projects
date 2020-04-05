const fs = require('fs');
const path = require('path');

// File system

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw new Error(err);

//   console.log('Dir was created');
// })

// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello World',
//   err => {
//     if (err) throw new Error(err);

//     console.log('File was created')

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' from append file',
//       err => {
//         if (err) throw new Error(err);

//         console.log('Append into file')

//         fs.readFile(
//           path.join(__dirname, 'notes', 'mynotes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw new Error(err);

//             console.log(data)
//           }
//         )
//       }
//     )
//   })

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw new Errow(err);

    console.log('File was renamed')
  }
)