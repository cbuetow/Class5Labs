$(document).ready(function () {

    $("form").submit(register);

    function register(event) {
        // get firstName from input
        let firstName = $("input#f-Name").val();

        // get lastName from input
        let lastName = $("input#l-Name").val();

        // get rank from name

        let militaryRank = $("input[name=rank]:checked").val();

        // create an output message string
        let outputMessage = `Hello, ${militaryRank} ${firstName} ${lastName}.`;

        // put a message in confirmation paragraph
        $("p#confirmation").text(outputMessage);

        // declare variable to check which rank is selected
        let foreground = $("input[name=rank]:checked").data("color");
        $("p#confirmation").css("color", foreground);

        // stop form from reloading itself
        event.preventDefault();
}
    }
);