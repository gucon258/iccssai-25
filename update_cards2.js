const fs = require('fs');
const file = 'utils/slideArray.js';
let content = fs.readFileSync(file, 'utf8');

const cardsStart = content.indexOf('export const cards = [');
const cardsEndMatch = content.indexOf('export const sponsors = [', cardsStart);

if (cardsStart === -1 || cardsEndMatch === -1) {
    console.error('Could not find cards array');
    process.exit(1);
}

// Find the last ]; before export const sponsors
const cardsEnd = content.lastIndexOf('];', cardsEndMatch);

const newCards = 'export const cards = [\n' +
'  {\n' +
'    "name": "Shri Suneel Galgotia",\n' +
'    "position": "Hon\'ble Chancellor",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/suneelSir.png"\n' +
'  },\n' +
'  {\n' +
'    "name": "Dr. Dhruv Galgotia",\n' +
'    "position": "CEO",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/dhruvSir 2.png"\n' +
'  },\n' +
'  {\n' +
'    "name": "Ms. Aradhana Galgotia",\n' +
'    "position": "Director Operations",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/aradhna.png"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) S.N. Singh",\n' +
'    "position": "Director",\n' +
'    "organization": "ABV-IIITM, Gwalior, India",\n' +
'    "imgSrc": "/ImportantPersons/snsingh.png"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) K.M. Babu",\n' +
'    "position": "Vice-Chancellor",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/mkbabu.png"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) Avadhesh Kumar",\n' +
'    "position": "Pro-Vice Chancellor",\n' +
'    "organization": "Galgotias University, Greater Noida, India (Vice Chair, IEEE UP Section)",\n' +
'    "imgSrc": "/ImportantPersons/avadhesh.png"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) Yogesh S. Chauhan",\n' +
'    "position": "Professor",\n' +
'    "organization": "IIT Kanpur, India (Chair, IEEE UP Section)",\n' +
'    "imgSrc": "/ImportantPersons/yogesh.png"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) Aanjey M. Tripathi",\n' +
'    "position": "Professor",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/aanjeymanitripathi.jpg"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) Kuldeep S. Kaswan",\n' +
'    "position": "Associate Dean, Planning",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/kuldeepkaswan.png"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) Shrddha Sagar",\n' +
'    "position": "Professor",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/shraddha.jpg"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) Manish Kumar",\n' +
'    "position": "Professor",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/manish kumar.jpeg"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) Sonia Setia",\n' +
'    "position": "Professor",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/sonia.jpg"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. (Dr.) Trapti Shrivastava",\n' +
'    "position": "Assistant Professor",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/trapti.jpg"\n' +
'  },\n' +
'  {\n' +
'    "name": "Prof. Arpesh Singh",\n' +
'    "position": "Professor",\n' +
'    "organization": "Galgotias University, Greater Noida, India",\n' +
'    "imgSrc": "/ImportantPersons/arpesh.jpg"\n' +
'  }\n' +
']';

content = content.substring(0, cardsStart) + newCards + content.substring(cardsEnd + 2);
fs.writeFileSync(file, content);
console.log('Cards updated successfully');
