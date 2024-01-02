
export const fetchDocs = () => {
    return fetch("http://localhost:8080/docs")
    .then((response) => response.json())
    .catch((e) => {
    console.error(e);
    });
   };