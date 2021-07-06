const record = [
    {year: "2018", result: "L"},
    {year: "1969", result: "W"},
    {year: "2016", result: "N/A"}
  ];

// function blueFilter (collection) {
//     for (const user of collection) {
//       if (user.favoriteColor === 'Blue') {
//         console.log(user.firstName);
//       }
//     }
//   }

 function superbowlWin(collection){
    for (const user of collection) {
        if (user.result === "W") {
            return user.year
        }
    }
 }

 superbowlWin(record);

//  superbowlWin(record);