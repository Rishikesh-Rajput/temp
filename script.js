function submitForm() {
    var name = document.getElementById("name").value.trim();
    var roll = document.getElementById("roll").value.trim();
    var branch = document.getElementById("branch").value.trim();
    if(name&&roll&&branch){
        console.log(document.getElementById("Confirmation").innerHTML = "Name: " + name + "<br>Roll: " + roll + "<br>Branch: " + branch);
        alert("Form submitted successfully!");
    }
    else{
        alert("Please fill in all the fields.");
    }
}