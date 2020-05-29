/*  This file contains a few handy function that are used
    all around the app.
*/


export const cleanStr = str => {
     return str.toLowerCase()
     .replace(/éèêë/g, 'e');
}

 export const filterData = (formData, data) => {
     const keys = Object.keys(formData);

     const filteredData = data.filter((obj) => {
        const matchingKey = keys.find(key => {
            const objectValue = cleanStr( obj[key] );
            const filterValue = cleanStr( formData[key] );
            if (!filterValue && objectValue.includes( filterValue ) ) {
                return true;
            }
            return false;
        });
        return matchingKey !== undefined;
     });

     return filteredData;
 }
