function validate(){
	
	var name = document.getElementById("n").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;
    var mobile = document.getElementById("mobile").value;
    var website = document.getElementById("website").value;
    
    var regularExpEmail = /[a-z0-9._]+@[a-z0-9.-]+\.[a-z0-9]{2,3}$/;
	var regularExpMobile = /^\d{3}-\d{3}-\d{4}$/;
    var regularExpWebsite = /^http:\/\/+[a-z0-9]+.[a-z0-9]+.[a-z0-9]{2,5}$/;
    
	
    if(name == ""){
        document.getElementById("p1").innerHTML="Enter name !";
	}
	else{
		document.getElementById("p1").innerHTML="";
	}
	
    

	if(mobile == ""){
		document.getElementById("p5").innerHTML="";
	}
    else if(!regularExpMobile.test(mobile)){
		document.getElementById("p5").innerHTML="Invalid mobile format !";
	}
	else{
		document.getElementById("p5").innerHTML="";
	}


    
	if(email == ""){
		document.getElementById("p2").innerHTML="Enter email !";
	}
    else if(!regularExpEmail.test(email)){
        document.getElementById("p2").innerHTML="Invalid email !";
	}
	else{
		document.getElementById("p2").innerHTML="";
	}
    

    
	if(website == ""){
	    document.getElementById("p6").innerHTML="";
		
	}
    else if(!regularExpWebsite.test(website)){
		document.getElementById("p6").innerHTML="Invalid Website url !";
	}
	else{
		document.getElementById("p6").innerHTML="";
	}


    
	if(password1 == ""){
	    document.getElementById("p3").innerHTML="Choose password !";
	}
	else{
		document.getElementById("p3").innerHTML="";
	}
	
	
	
	if(password2 == ""){
	    document.getElementById("p4").innerHTML="Cannot be empty !";
	}
	else if(password1 != password2){
		document.getElementById("p4").innerHTML="Both password does not match !";
	}
	else{
		document.getElementById("p4").innerHTML="";
		
	}
}

function resetData(){
	 document.getElementById("p1").innerHTML="";
	 document.getElementById("p2").innerHTML="";
	 document.getElementById("p3").innerHTML="";
	 document.getElementById("p4").innerHTML="";  
	 document.getElementById("p5").innerHTML="";
	 document.getElementById("p6").innerHTML="";
}
    
	
    
