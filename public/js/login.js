(function() {
    var $form;

    function logIn(e) {
        e.preventDefault();

        $.when( $.post('/login', $form.serialize()) )
            .then(loginSuccess, loginError);
    }

    function loginSuccess(data) {

    }

    function loginError(data, textStatus, jqXHR) {
        console.log('error!');
    }

    function init() {
        $form = $('.login-form');
        $form.on('submit', logIn);
    }
    init();
})();
