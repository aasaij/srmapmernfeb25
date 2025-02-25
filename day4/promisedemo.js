let fetchData = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const name = null;
      if (name) resolve(name);
      else reject(new Error("Name is not found!"));
    }, 2000);
  });
};
let data = fetchData();
data
  .then((result) => console.log("Successful! " + result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Thank you for being very active"));
