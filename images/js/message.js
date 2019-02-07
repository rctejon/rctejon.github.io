var sendMessage = () => {

    // Initiate Variables With Form Content
    //var name = $("#name").val();
    //var email = $("#email").val();
    //var message = $("#message").val();
    // if (name == "") {
    //     alert('Invalid Name');
    //     return;
    // }
    // if (message == "") {
    //     alert('Message cannot be empty');
    //     return;
    // }
    // var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    // if (!emailReg.test(email)) {
    //     alert('Invalid Email');
    //     return;
    // }

    alert('This funcionality will be soon');
    Email.send("rc.tejon@uniandes.edu.co",
        "rc.tejon@uniandes.edu.co",
        "Message from ",
        "hola",

        {
            token: "63cb3a19-2684-44fa-b76f-debf422d8b00",
            callback: function done(message) {
                alert("sent")
            }

        });


};