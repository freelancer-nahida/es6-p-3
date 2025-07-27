const user = { id: 1, name: "sumaiya", job: "student" };
// console.log(user);

const strfy = JSON.stringify(user);

// console.log(strfy);

// const prs = JSON.parse(strfy);
// console.log(prs);

const shop = {
  owner: "Maria",
  address: {
    street: "Nalchity",
    city: "Nolcity",
  },
  products: ["laptop", "mobile", "air buds"],

  revenue: 50000,
  isNew: true,
};

const sp = JSON.stringify(shop);

// console.log(sp);
const pr = JSON.parse(sp);
console.log(pr);
