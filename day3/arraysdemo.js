let data = [
  "Samhitha",
  "Avinash",
  "Vijay",
  "Hemanth",
  "Samanvitha",
  "Prathima",
  "Navya",
  10,
  20.5,
  { id: 101, name: "Jay" },
  { firstName: "Aasaithambi", lastName: "Jay" },
];

// console.log(data);
for (let index = 0; index < data.length; index++) {
  if (typeof data[index] === "object") {
    console.log("{");
    for (let key in data[index])
      console.log(key + " : " + data[index][key] + ", ");
    console.log("}");
  } else console.log(index + 1 + " : " + data[index]);
}
