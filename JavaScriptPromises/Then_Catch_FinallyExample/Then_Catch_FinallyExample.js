function checkNumber() {
  const value = Number(document.getElementById("numInput").value);

  const checkPromise = new Promise((resolve, reject) => {
    // value > 0 ? resolve("Positive number!") : reject("Not a positive number!");

    if(value > 0){
        resolve("Positive number!")
    }else{
        reject("Not a positive number!")
    }
    
  });

  checkPromise
    .then((msg) => (document.getElementById("label").textContent = msg))
    .catch((err) => (document.getElementById("label").textContent = err))
    .finally(() => console.log("Done"));
}