console.log('hello world')

async function getData() {
   const response = await fetch ('data.csv');
   // when using the .text() function the data is turned into a string //
    const data = await response.text();
    console.log(data);
    // data.split splits the csv file at every new line break '\n' //
    const arrRows = data.split('\n').slice(1);
    //.slice slices the array and gets rid of 0 and starts at 1 //
   
   //for each loop that loops over every row of the table //
    arrRows.forEach(arrRows => {
        //split method used again to split data at every comma //
        const rowData = arrRows.split(',');
        // variables that contain the year and temp data from split //
        const year = rowData[0]
        //pushing the year data into the empty array called xlabels //
        xlabels.push(year);
        const temperature = rowData[1];
        // pushing temperature into empty array called ytemps //
        // parseFloat takes a string and turns it into a number //
        ytemps.push(parseFloat(temperature) + 14);
    });
}

getData();