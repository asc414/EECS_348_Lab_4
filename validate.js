function validate() {
    const first_password = document.getElementById("first_password").value;
    const second_password = document.getElementById("second_password").value;
    if (first_password.length < 8) {
        alert("First password must be at least 8 characters long.");
        return;
    } else if(second_password.length < 8) {
        alert("Second password must be at least 8 characters long.")
        return;
    } else if(first_password != second_password) {
        alert("Passwords do not match.");
        return;
    } else {
        alert("Passwords match!");
    }


}