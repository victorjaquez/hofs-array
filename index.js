const serverResponse = {
  essentials: {
    price: 1.99,
    desc: "The Bare necessities",
    offerID: 123
  },
  plus: {
    price: 3.99,
    desc: "The Next level",
    offerID: 345
  },
  pro: {
    price: 5.99,
    desc: "The Boss level",
    offerID: 678
  }
};

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2010 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/* ----- reduce ----- */
// Convert server response
function parseServerResponse(serverResponse) {
  return Object.entries(serverResponse).reduce((response, [label, data]) => {
    response.push({ ...data, label });
    return response;
  }, []);
}
let data = parseServerResponse(serverResponse);
// console.log(Object.entries(serverResponse));

// Sum of ages
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// const ageSum = ages.reduce((total, age) => {
//   return total + age;
// }, 0);
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
// const totalYears = companies.reduce((total, company) => {
//   return total + (company.end - company.start);
// }, 0);
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
// console.log(totalYears);

/* ----- forEach ----- */

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i].name);
// }

companies.forEach(company => {
  console.log(company.category);
});

/* ----- filter ----- */

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(age => {
//   if (age >= 21) return true;
// });

const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// filter retail companies
// const retailCompanies = companies.filter(company => {
//   if (company.category === "Retail") return true;
// });

const retailCompanies = companies.filter(
  company => company.category === "Retail"
);
// console.log(retailCompanies);

// get 80s companies
const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);
// console.log(eightiesCompanies);

// get companies that lasted 10 years or more
const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);
// console.log(lastedTenYears);

/* ----- map ----- */

// Create array of company names
const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// Create array of company names and years
// const nameAndYears = companies.map(company => {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

const nameAndYears = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);

// console.log(nameAndYears);

// age math
const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age * 2);
const agesSquareTimesTwo = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(agesSquareTimesTwo);

/* ----- sort ----- */
// sort by start date
// const startData = companies.sort((a, b) => {
//   if (a.start > b.start) return 1;
//   else return -1;
// });
const startData = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(startData);

// sort ages
const descending = ages.sort((a, b) => b - a);
// console.log(descending);

// Combined methods
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

// console.log(combined);
