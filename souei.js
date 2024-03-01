var id=document.getElementById('id');
var pass=document.getElementById('pass');
var rslogin=document.getElementById('rslogin');
var souei1=document.getElementById('souei1');
var souei2=document.getElementById('souei2');
var close = document.getElementById('close');
var selectid=document.getElementById('selectid');

var kkk;

f2();

close.addEventListener('click', (e) => {
	f1();
});

selectid.oninput = function() {
	f2();
};

id.addEventListener('click', (e) => {
	navigator.clipboard.writeText(id.textContent);
});

pass.addEventListener('click', (e) => {
	navigator.clipboard.writeText(pass.textContent);
});

function f1(){
	rslogin.remove();
	souei1.remove();
	souei2.remove();
};

function f2(){
	kkk=selectid.value;
	for(i=0;i<l;i++){
		if(kkk==data1[i]){
			id.innerHTML=data1[i];
			pass.innerHTML=data2[i];
		};
	};
};
