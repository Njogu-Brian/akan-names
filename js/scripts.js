function getAkanName (){
    let date_input = document.getElementById("birthday")
    let male = document.getElementById("male")
    let female = docuemnt.getEleemntById("female")

    docuemnt.getElementById("submit").onclik = function () {
        let gender, DateOfBirth;

        bdate =date_input.nodeValue;

        if (male.checked)   {
            gender = "male";
        }   else if (female.checked){
            gender = "female";
        }   else {
            document.getElementById("akan-name").innerHTMML = 
            <div cladd ="alert alert-danger" role="alert">
                <p class="text-sm">Kindly fill in the options to learn your Akan name</p>
            </div>
            ;
        }

        if (DateofBirth != '' gender !='' {

            let d = new Date(DateofBirth);
            let day = d.getDay();
            let month = d.getMonth();
            let year = d.getFullYear().toString();
            let CC = year.substring(o, 2);

            dw = ((((CC / 4) - 2) * (CC - 1)) + ((5 * year) / 4) + ((26 * (month + 1) / 10)) +
                        day) % 7;
            
        }
   
}