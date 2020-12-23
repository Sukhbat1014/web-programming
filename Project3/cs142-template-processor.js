function Cs142TemplateProcessor(template) {
	this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dictionary){
	var new_tem=this.template;
	var regEx=/{{[^ ]*}}/g;
	var result = this.template.match(regEx);
	//console.log(result);
	var str;
	var char;
	var data;
	var i;
	for (i=0; i<result.length; i++){
		str=result[i];
		//console.log(str);
		char=str.replace("{{", "");
		char=char.replace("}}", "");
		//char-d string char="x"
		data=dictionary[char];
		console.log("Ene bol solikh utga: ");
		console.log(dictionary[char]);
		//console.log(data);
		//console.log(str);
		new_tem=new_tem.replace(str, data);
	}
	console.log(new_tem);
	return new_tem;
};