const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];




//-------------------------------------forEach----------------------------------------


for(let i = 0; i < companies.length; i++){
  console.log(companies[i]);
}

//forEach: better way to loop through an array compared with for loop; doesnt return anything back

companies.forEach(function(company){
  console.log(company.name)
})

//recommended arrow functions
companies.forEach(company => console.log(company.name))


//-------------------------------------filter----------------------------------------

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//   if(ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);


//filter age >=21
const canDrink = ages.filter(function(age){
  if (age >= 21){
    return true;
  }
})
console.log(canDrink);

//recommended arrow functions
const canDrink2 = ages.filter(age => age >= 21);
console.log(canDrink2);




//filter retail companies
const retailCompanies = companies.filter(function(company){
  if (company.category === 'Retail'){
    return 'true';
  }
})
console.log(retailCompanies)

//recommended arrow functions
const retailCompanies2 = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies2);




//filter 80s companies
const eightiesCompanies = companies.filter(function(company){
  if (company.start >= 1980 && company.start < 1990){
    return 'true';
  }
})
console.log(eightiesCompanies);

//recommended arrow functions
const eightiesCompanies2 = companies.filter(company => company.start >= 1980 && company.start < 1990)
console.log(eightiesCompanies2)


//filter companies lasted > 10yrs
const lastedTenYears = companies.filter(function(company){
  if ((company.end - company.start) >= 10){
    return 'true';
  }
})
console.log(lastedTenYears)

//recommended arrow functions
const lastedTenYears2 = companies.filter(company => (company.end - company.start) >= 10)
console.log(lastedTenYears2)



//-------------------------------------map------create new array from current array------------------------


//create array of company names

const companyNames = companies.map(function(company){
  return company.name;
})
console.log(companyNames);

//recommended arrow functions
const companyNames2 = companies.map(company => company.name);
console.log(companyNames2)


//test
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap)


//get the squre root of age then times 2
const agesSquareTimesTwo = ages.map(function(age){
  return Math.sqrt(age);
}).map(function(age){
  return age * 2;
})
console.log(agesSquareTimesTwo);

//recommended arrow functions
const agesSquareTimesTwo2 = ages.map(age => Math.sqrt(age)).map(age => age * 2)
console.log(agesSquareTimesTwo2)


//-------------------------------------sort-------------------------------------------------

//sort company by start date
const sortedCompanies = companies.sort(function(company1, company2){
  if (company1.start > company2.start){
    return 1;
  }else{
    return -1;
  }
})
console.log(sortedCompanies)

//recommended arrow functions
const sortedCompanies2 = companies.sort((company1, company2) => (company1.start > company2.start ? 1 : -1))
console.log(sortedCompanies2)


//sort ages
const sortAges = ages.sort(function(age1, age2){
  if (age1 > age2){
    return 1;
  }else{
    return -1;
  }
})
console.log(sortAges)

//recommended arrow functions
const sortAges2 = ages.sort((age1, age2) => age1 > age2 ? 1 : 0)
console.log(sortAges2)



//-------------------------------------reduce---------------------------------------------

//total ages

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//   ageSum += ages[i];
// }
// console.log(ageSum)


const ageSum = ages.reduce(function(total, age){
  return total + age;
}, 0)
console.log(ageSum);

//recommended arrow functions
const ageSum2 = ages.reduce((total, age) => total + age, 0);    //total = 0
console.log(ageSum2);


//total years of companies

const totalYears = companies.reduce(function(total, company){
  return total + (company.end - company.start)
}, 0)
console.log(totalYears)

//recommended arrow functions
const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears2)



//-------------------------------------conbime methods-------------------------------------


const combined = ages.map(age => age * 2).filter(age => age >= 40).sort((age1, age2) => age1 > age2).reduce((age1, age2) => age1 + age2, 0)
console.log(combined)















