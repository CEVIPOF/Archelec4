/*  This file contains a few handy function that are used
    all around the app.
*/

export const cleanStr = (str) => {
  return str.toLowerCase().replace(/éèêë/g, "e");
};

/*
   HINT: Pour le moment la fonction filterData renvoie des résultats dès que
   ce que l'utilisateur cherche est contenu dans une des méthadonnées
   (ex : chercher "test" renverra "test" et "testounet" et "tests").
   À voir si ce comportement fonctionne pour tous les types de champs.
*/
export const filterData = (formData, data) => {
  const keys = Object.keys(formData);

  const filteredData = data.filter((obj) => {
    const matchingKey = keys.find((key) => {
      const objectValue = cleanStr(obj[key]);
      const filterValue = cleanStr(formData[key]);
      if (filterValue.length && objectValue.includes(filterValue)) {
        return true;
      }
      return false;
    });
    return matchingKey !== undefined;
  });

  return filteredData;
};
