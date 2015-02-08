(function() {
    var $form;

    function login(e) {
        e.preventDefault();

        // TODO: Add spinner

        $.when( $.post('/login', $form.serialize()) )
            .then(loginSuccess, loginError);
    }

    function loginSuccess(data) {
        // TODO: Remove spinner
        // TODO: Redirect user
        console.log('login successful!', data);
    }

    function loginError(data, textStatus, jqXHR) {
        // TODO: Remove spinner
        // TODO: Show error
        console.log('error!', jqXHR);
    }

    function init() {
        $form = $('.login-form');
        $form.on('submit', login);
        $form.find('#login-button').on('click', login);
    }
    init();
})();
