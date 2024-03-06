var id=document.getElementById('id');
var pass=document.getElementById('pass');
var rslogin=document.getElementById('rslogin');
var souei1=document.getElementById('souei1');
var souei2=document.getElementById('souei2');
var close = document.getElementById('close');
var selectid=document.getElementById('selectid');

var kkk;
var l=ids.length;
var y;

f2();
f3();

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

window.addEventListener('scroll',(e) => {
	console.log("hello");
	f3();
});

function f1(){
	rslogin.remove();
	souei1.remove();
	souei2.remove();
};

function f2(){
	kkk=selectid.value;
	for(i=0;i<l;i++){
		if(kkk==ids[i]){
			id.innerHTML=ids[i];
			pass.innerHTML=passes[i];
		};
	};
};

function f3(){
	y=window.pageYOffset;
	rslogin.style="display: block;position: absolute;background-color: #f9f9f9;border: 1px solid #ccc;z-index: 1000;left:35vw;top:"+String(y)+"px;";
};
