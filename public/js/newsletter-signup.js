(function() {
    // Variables
    var $form = $('#signup-email');

    // event handlers and callbacks
    function register(event) {
        event.preventDefault();

        $.when($.post('/newsletter', $form.serialize()))
            .then(handleSuccess, handleError);
    }

    function handleSuccess() {
        console.log('hooray');
    }

    function handleError(jqXHR) {
        if(jqXHR.status === 400) {
            return showIllegalEmail();
        }
        if(jqXHR.status === 409) {
            return showAlreadySignedUp();
        }
        showServerError();
    }

    function showIllegalEmail() {
        console.log('illegal email format!');
    }

    function showAlreadySignedUp() {
        console.log('you\'re already signed up!');
    }

    function showServerError() {
        console.log('wow crazy, such server error');
    }

    $form.on('submit', register);
})();
