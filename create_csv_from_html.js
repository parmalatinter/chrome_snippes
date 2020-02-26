function json2csv(json) {
    var header = Object.keys(json[0]).join(',') + "\n";

    var body = json.map(function(d){
        return Object.keys(d).map(function(key) {
            return d[key];
        }).join(',');
    }).join("\n");

    return header + body;
}

var history_list = []
$('.tbl-02 tbody tr').each(function(){
 	var row = {
      // change foollowing json value
  		//date : $(this).find('.date').text().trim().replace(',', ''),
  		//content : $(this).find('.content').text().trim().replace(',', ''),
  		//yen : $(this).find('.use-yen').text().trim().replace(',', ''),
	}
	if(row['date'] && row['date'] && row['yen']){
		history_list.push(row)
	}
});

console.log(history_list)

var json = json2csv(history_list)
console.log(json)

var csvName = 'history.csv';
var link = document.createElement('a');
var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
var blob;

if (window.navigator.msSaveOrOpenBlob) {
  // for ie
  blob = new Blob([bom, json], {type: 'text/csv'});
  window.navigator.msSaveOrOpenBlob(blob, csvName);
} else if (window.webkitURL && window.webkitURL.createObjectURL) {
  // for chrome (and safari)
  blob = new Blob([bom, json], {type: 'text/csv'});
  link.setAttribute('download', csvName);
  link.setAttribute('href', window.webkitURL.createObjectURL(blob));
  link.click();
} else if (window.URL && window.URL.createObjectURL) {
  // for firefox
  blob = new Blob([bom, json], {type: 'text/csv'});
  link.setAttribute('download', csvName);
  link.setAttribute('href', window.URL.createObjectURL(blob));
  link.click();
}
