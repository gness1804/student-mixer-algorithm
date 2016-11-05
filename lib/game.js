const $ = require('jquery');

const students = ['Ryan Westlake', 'Chelsea Skovgaard', 'Graham Nessler', 'Alex Pilewski', 'Andrew Crist', 'Mike Ziccardi', 'Kristen Burgess', 'Lacey Knaff', 'Christine Gamble', 'Matt Kaufman', 'Ian Lancaster', 'Hilary Lewis', 'Kinan Whyte', 'Gabi Procell', 'Dale Hendrickson', 'Maia Stone', 'Nick Chambers'];

const button = $('.select-button');

function selectStudent() {
  let number = randomize();
  console.log(number)
} // end of selectStudent

function randomize() {
  const min = 0;
  const max = students.length;
  return Math.floor(Math.random() * (max - min) + min);
} // end of randomize

button.on('click', () => {
  selectStudent();
});
