import React from 'react';

module.exports = function () {
  return (
    <div>
      <p> In validating form input fields, we wanted to create a directive that would handle the validation of an email.
      The most common way to do this would be to look at <code>$valid</code> and <code>$invalid</code> on the field. But what if that is not enough
      and you want to validate an email against a regex or make a call to the server to validate a value?
      When you use <code>NgModel</code> on a directive, <code>NgModelController</code> has a collection of validators called <code>$validators</code>
      that can be used to create your custom field validations.
      </p>
      <p> This can be accessed in the link function and set for the field you would like to validate.
        <code data-gist-id="f71e72bc81f7382843f099afba677164" data-gist-show-spinner="true" />
      </p>
      <p> What if you needed to make that call to the server to validate? You would use <code>asyncValidators</code>.
        <code data-gist-id="d5b9d402e7a2d9ab88853e1c78e5b5cb" data-gist-show-spinner="true" />
      </p>
      <p> One caveat is that every time you type in the input, the call to the server is being made. To alleviate this use <code>ng-model-options</code>
      to update the behavior of the validation.
      </p>
      <p> These can be set on the field:
        <code data-gist-id="638367bd374f55b9d8f372aa697d2e71" data-gist-show-spinner="true" />
      </p>
      <p> What these options say is that we want to update on default, update on blur, set the <code>debounce</code> default to 300 ms and blur.
      The really important part here is <code>debounce</code>. What <code>debounce</code> says is that we only want the validation to occur
      if no input has been entered after 300ms or a blur occurs on the input field. This allows the user to keep typing without being interrupted
      with validation errors and we make fewer calls to the server for validation.
      </p>
      <p> These can also be added in the link function.
        <code data-gist-id="bfcdee582b2bad79452679f7a9b6988e" data-gist-show-spinner="true" />
      </p>
      <p> It is preferable to set default options in the link function and allow anyone using your directive to set their own options on the input field.
        <code data-gist-id="900ff593b3ca2d74443b1c2f54d10a2b" data-gist-show-spinner="true" />
      </p>
      <p> <code>angular.merge</code> performs a deep copy of the object as opposed to <code>angular.extend</code> which performs a shallow copy of the object.
      We will discuss the different functions provided by Angular in a future post.
      </p>
      <p> Now that we have your custom validation in place for an email, we can create more and add them to the <code>$validators</code>
      or <code>$asycValidators</code> property. Maybe we want to have a unique email validator or put validation on a password.
      That can all be done by adding them to the appropriate property on <code>NgModelController</code>.
      </p>
      <p> How do you validate form fields? Let us know in the comments below.</p>
    </div>
  );
};