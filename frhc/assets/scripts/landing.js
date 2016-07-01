var accountDetailsContainer =
        '<h2></h2>'
    +   '<button class="mdl-button mdl-js-button mdl-button--raised" id="sign-in" name="signin">Sign In</button>&nbsp;&nbsp;&nbsp; '
       '</div>'
    ;

var buildFirebaseAuthContainerSO = function() {
    var template = 
        '<input class="mdl-textfield__input" style="display:inline;width:auto;" type="text"' + ' id="email" name="email" placeholder="Email"/> '
    +   '&nbsp;&nbsp;&nbsp; '
    +   '<input class="mdl-textfield__input" style="display:inline;width:auto;" type="password" id="password" name="password" placeholder="Password"/> '
    +   '<br/><br/>'
    +   '<button class="mdl-button mdl-js-button mdl-button--raised" id="sign-in" name="signin">Sign In</button>&nbsp;&nbsp;&nbsp; '
    +   '<button class="mdl-button mdl-js-button mdl-button--raised" id="sign-up" name="signup">Sign Up</button> &nbsp;&nbsp;&nbsp; '
    +   '<button class="mdl-button mdl-js-button mdl-button--raised" disabled id="verify-email" name="verify-email">Send Email Verification</button>&nbsp;&nbsp;&nbsp;'
    +   '<button class="mdl-button mdl-js-button mdl-button--raised" id="password-reset" name="verify-email">Send Password Reset Email</button>'
    ;
    return $(template);
};

$(document).ready(function(){
    
        $(".rslides").responsiveSlides({
            auto: false,
            pagination: true,
            nav: true,
            fade: 500,
            maxwidth: 1200
      });
        
    $('#login').animatedDialog({
        content: "~ .animated-dialog-content"
    })
});