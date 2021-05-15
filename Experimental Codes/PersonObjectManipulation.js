const person = (type) =>
  ({
    PF: "PESSOA FISICA",
    PJ: "PESSOA JURIDICA",
  }[type]);

console.log(person("PF"));
