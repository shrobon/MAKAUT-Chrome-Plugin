document.addEventListener('DOMContentLoaded',function(){
	var findButton=document.getElementById('find');
	findButton.addEventListener('click',function(){
		chrome.tabs.getSelected(null,function(tab){
			d=document;
			rollno=d.getElementById('roll').value;
			semno=d.getElementById('sem').value;
			if(rollno!="" && semno!="")
			{
				var f=d.createElement('form');
				f.action="http://wbutech.net/show-result_even.php";
				f.method="POST";

				var s=d.createElement('input');
				var r=d.createElement('input');
				var rectype=d.createElement('input');
				
				s.type=hidden;
				r.type=hidden;
				rectype.type=hidden;

				s.value=semno;
				r.value=rollno;
				rectype.value=1;

				f.appendChild(s);
				f.appendChild(r);
				f.appendChild(rectype);
				d.body.appendChild(f);

				f.submit();



			}
		});
	},false);
},false);