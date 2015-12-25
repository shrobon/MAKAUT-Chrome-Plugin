document.addEventListener('DOMContentLoaded',function(){
	var findButton=document.getElementById('find');
	findButton.addEventListener('click',function(){
			d=document;
			rollno=d.getElementById('roll').value;
			semno=d.getElementById('sem').value;
			rectype=1;
			var str="semno="+semno+"&rollno="+rollno+"&rectype="+rectype;
			var xhr = new XMLHttpRequest();
			xhr.open("POST",'http://wbutech.net/show-result_even.php',true);
			xhr.setRequestHeader("Content-Type",'application/x-www-form-urlencoded');
			
			xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {

			  }
			};
			xhr.send(str);
			document.getElementById("demo").innerHTML = xhr.responseText;
			console.log(xhr.responseText);
			

	},false);
},false);