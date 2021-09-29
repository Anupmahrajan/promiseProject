 const request = require("request");

const getInfoAPIV1 = () => {
    return new Promise((resolve, reject) => {
      request(
        "https://reqres.in/api/users",
        (error, response, body) => {
          if (error) {
            reject(error);
          }
          resolve({
            version: "v1",
            data: body,
          });
        }
      );
    });
  };
  
  const getInfoAPIV2 = () => {
    return new Promise((resolve, reject) => {
      request(
        "https://reqres.in/api/users",
        (error, response, body) => {
          if (error) {
            reject(error);
          }
          resolve({
            version: "v2",
            data: body,
          });
        }
      );
    });
  };
  
  Promise.all([getInfoAPIV1(), getInfoAPIV2()])
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  
  Promise.race ([getInfoAPIV1(),getInfoAPIV2()])
  .then ((result)=> console.log(result))
  .catch((error) => console.log (error))

