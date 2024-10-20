console.log('inBuilt Objects');

let lastName = 'MicroSoft';

let firstName = new String('Logic Building');

// let message = 'This Is\' \n My "\First \n Message';

// template literals 
// let message = `This is 
// My First 
// Message`;

let message = 
`Hello ${lastName},

Thanks for the Opportunity

Regards,
Faiz
`


let words = message.split(' ');

console.log(words);

console.log(message);


let date = new Date();

let date2 = new Date('June 20 2005 08:15');

let date3 = new Date(2003, 8, 11,8);

console.log(date3);

date3.setFullYear(2005);

console.log(date3);

