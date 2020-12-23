'use strict';

class TableTemplate {
    static fillIn(id, dictionary, columnName) {

        var tableElm = document.getElementById(id);

        if (tableElm.style.visibility === 'hidden') {
            tableElm.style.visibility = 'visible';
        }
        var idx = [];
        var header= tableElm.rows.item(0);
        var headobj = new Cs142TemplateProcessor(header.innerHTML);
        var newHeader = headobj.fillIn(dictionary);
       
        header.innerHTML = newHeader;

        var numCols = header.cells.length;
        if(columnName){
            for (var i = 0; i < numCols; i++ ){
                if (header.cells[i].innerHTML === columnName) {
                    idx = [i];
                    break;
                }
            }
        }
        var k = 0;
        if (!columnName){
        	for (var i = 0; i < numCols; i++ ){
                if (header.cells[i].innerHTML !== columnName) {
                    idx[k] = [i];
                    k++;
                   
                }
            }
        } 
        var numRows = tableElm.rows.length;
        for (var t = 1; t < numRows ; t++) {
            var row = tableElm.rows[t];
            for (var j = 0; j < idx.length; j++ ){
                var td = row.cells[idx[j]];
                var str = new Cs142TemplateProcessor(td.innerHTML);
                td.innerHTML = str.fillIn(dictionary);
            }
        }
    }
}