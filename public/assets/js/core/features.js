function showAlert() {
  const btn = document.getElementById("btn");
  if(btn.innerText === "BLOCK"){
	  if (confirm("Are you sure : BLOCK Floor ? ")) {
	    alert("FLOOR BLOCKED");
	    nameChange();
	  } else {
	    alert("NO CHANGES DONE");
	  }
	}
  else{
  	if (confirm("Are you sure : ENABLE Floor ? ")) {
	    alert("FLOOR ENABLED");
	    nameChange();
	  } else {
	    alert("NO CHANGES DONE");
	  }
  }
	  
} 

const colorChangeRG = () => {
    $("#btn").removeClass("btn btn-danger");
    $("#btn").addClass("btn btn-success");       
};

const colorChangeGR = () => {
    $("#btn").removeClass("btn btn-success");  
    $("#btn").addClass("btn btn-danger");     
};



const nameChange =  () => {
	const btn = document.getElementById("btn");
    if(btn.innerText === "BLOCK"){
        btn.innerText = "ENABLE";
        colorChangeRG();
    }else{
        btn.innerText= "BLOCK";
        colorChangeGR();
    }
};
