function tablecreate() {
    
    let marks = document.getElementById("mark1").value;
    let outputDiv = document.getElementById("tableOutput");
        outputDiv.innerHTML = "";

        if (marks) {
for(let i=1; i<=10; i++) {
    let result = marks + " x " + i + " = " + (marks * i);

    let p = document.createElement("p");
                p.textContent = result;
                outputDiv.appendChild(p);
            }}
         else {
            alert("Please enter a valid number.");
        }
    }
    
  
    



