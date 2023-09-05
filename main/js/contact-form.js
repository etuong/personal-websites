(function () {
    $('#contact-form').validator();

    $('#contact-form').on('submit', async function (e) {
        if (!e.isDefaultPrevented()) {
            // const url = "contact_form/contact_form.php";

            // $.ajax({
            //     type: "POST",
            //     url: url,
            //     data: $(this).serialize(),
            //     success: function (data) {
            //         const messageAlert = 'alert-' + data.type;
            //         const messageText = data.message;

            //         const alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
            //         if (messageAlert && messageText) {
            //             $('#contact-form').find('.messages').html(alertBox);
            //             $('#contact-form')[0].reset();
            //         }
            //     }
            // });
            const url = "https://v6n3delani.execute-api.us-east-1.amazonaws.com/default/sendEmail";

            await fetch(url,
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: "Name",
                        email: "Email",
                        message: "Message",
                    }),
                }
            ).then(value => {
                const messageText = "Sent! I'll be in touch with you shortly.";

                const alertBox = '<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                $('#contact-form').find('.messages').html(alertBox);
                $('#contact-form')[0].reset();
            })

            return false;
        }
    });
})();