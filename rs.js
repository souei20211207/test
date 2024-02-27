function makebukilist(){
	$.get('https://souei20211207.github.io/test/data.txt', (data) => {
		re="";
		var datalist=data.split("\n");
		var l=datalist.length;
		for(i=0;i<l;i++){
			var bukidata=datalist[i].split(",");
			if(bukidata[bukidata.length-1].indexOf(job.value)!=-1){
				re=re+'<option value="'+bukidata[0]+'">'+bukidata[0]+'</option>';
				
			}
		}
		codeType.innerHTML=re;
	});
}
