// var data ={
//     "firstName": "Joshie",
//     "lastName": "Wyattson",
//     "county": "San Mateo",
//     "city": "San Mateo",
//     "role": "Broker",
//     "sales": 1000000,
//     "children": [
//     {
//       "firstName": "Beth Jr.",
//       "lastName": "Johnson",
//       "county": "San Mateo",
//       "city": "Pacifica",
//       "role": "Manager",
//       "sales": 2900000,
//       "children": [
//         {
//           "firstName": "Smitty",
//           "lastName": "Won",
//           "county": "San Mateo",
//           "city": "Redwood City",
//           "role": "Sales Person",
//           "sales": 4800000,
//           "children": []
//         },
//         {
//           "firstName": "Allen",
//           "lastName": "Price",
//           "county": "San Mateo",
//           "city": "Burlingame",
//           "role": "Sales Person",
//           "sales": 2500000,
//           "children": []
//         }
//       ]
//     },
//     {
//       "firstName": "Beth",
//       "lastName": "Johnson",
//       "county": "San Francisco",
//       "city": "San Francisco",
//       "role": "Broker/Sales Person",
//       "sales": 7500000,
//       "children": []
//     }
//   ]
// };


function objToCSV(obj) {
    var keys = 'firstName,lastName,county,city,role,sales +\n';
    var result ='';
    var queue = [];
    queue.push(obj);

    function pushChildren(parent) {
        parent.children.forEach((child)=> {
            queue.push(child);
        });
    }

    while (queue.length != 0) {
        curChild = queue.shift();
        pushChildren(curChild);
        result+=objToString(curChild);
    }
    return result;
}

function objToString (obj){
    var string ='';
    for (var key in obj) {
        if (key !== "children") {
            string += obj[key] + ',';
        }
    }
    return string.slice(0,-1) + "\n";
}

objToCSV(data)