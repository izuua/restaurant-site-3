$('#submit').on('click', function (event) {
    // event.preventDefault();

    console.log("clicked")

    if ($('#inputName').val() && $('#inputEmail').val() && $('#inputPhone').val()) {
        alert('Thank you for submitting your inquiry!')
    }
})

