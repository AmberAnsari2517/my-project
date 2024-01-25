export const MyPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (MyPromise) {
      resolve("Success data");
    } else {
      reject("Error message");
    }
  });
  
  MyPromise
    .then((data) => {
      // Handle successful case
      console.log(data);
    })
    .catch((error) => {
      // Handle error case
      console.error(error);
    });
  