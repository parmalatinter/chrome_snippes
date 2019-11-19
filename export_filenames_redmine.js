function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('');
}

var destinationPath = "/c/"
var filenames = $(".filename")
var dateStr = formatDate(new Date())
var paths = [filenames.length , " Files"].join();
var commands = "mkdir " + destinationPath + dateStr;
filenames.each(function(index){
    var path = filenames[index].innerText;
    paths+= ["\n", path].join();
    commands+= ["\ncp --P -a ", path, destinationPath, dateStr].join('')
})
console.log(paths);
console.log(commands)
