var id=document.getElementById('id');
var pass=document.getElementById('pass');
var rslogin=document.getElementById('rslogin');
var souei1=document.getElementById('souei1');
var souei2=document.getElementById('souei2');
var close = document.getElementById('close');

close.addEventListener('click', (e) => {
	f1();
});

function f1(){
	rslogin.remove();
	souei1.remove();
	souei2.remove();
};
