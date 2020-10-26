var cl = false;
function dis(val) 
		{ 
			if(!cl){
			document.getElementById("result").value+=val ;
			}
			else{
				clr();
				document.getElementById("result").value+=val;
				cl = false;
			}
		} 
		
		
		function solve() 
		{ 
		try{
			let x = document.getElementById("result").value ;
			let y = eval(x);
			document.getElementById("result").value = y ;
			cl = true;
			}catch{
				document.getElementById("result").value = "error";
			}
		} 
		

		function clr() 
		{ 
			document.getElementById("result").value = "" 
		}