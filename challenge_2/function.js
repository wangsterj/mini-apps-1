
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

module.exports =objToCSV;