function getAkanName (){
    let date_input = document.getElementById("birthday")
    let male = document.getElementById("male")
    let female = docuemnt.getEleemntById("female")

    docuemnt.getElementById("submit").onclik = function () {
        let gender, bdtae;

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
   
}