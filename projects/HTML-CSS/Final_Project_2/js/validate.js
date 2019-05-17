function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var lastname = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name=="") {
        alert("Name must be filled out");
        return false;
    } else if (lastname=="") {
        alert("Last name must be filled out");
        return false;
    }


    alert("All good");
    
}