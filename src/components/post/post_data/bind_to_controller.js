import React from 'react';

module.exports = function () {
  return (
    <div>
      <p>
        <code>BindToController</code> allows you to bind the components properties directly to <code>Controller</code> rather than the
        <code>isolated $scope</code> of the component. This is a huge win for component development!
        The Controller of the component now has the ability to be decoupled from the component <code>isolated $scope</code>.
        There is now no reason to have a messy mixing of <code>$scope</code> and the context of the Controller.
      </p>
      <p>
        Before we get into the code, this is how Angular defines the <code>BindToController</code> property:
      </p>
      <blockquote>
        <a rel="_blank" href="https://docs.angularjs.org/api/ng/service/$compile">BindToController</a> - This property is used to bind scope properties
        directly to the Controller. It can be either true or an object hash with the same format as the scope property. Additionally,
        a controller alias must be set, either by using controllerAs: &apos;myAlias&apos; or by specifying the alias in the controller definition:
        controller: &apos;myCtrl as myAlias&apos;.
      </blockquote>
      <p>
        Ok, so what exactly does this mean? This means that we can remove the passing and binding of <code>$scope </code>
        through out our <code>controller/directive</code>.
      </p>
      <hr />
      <h3>The Messy Way</h3>
      <p>
        Below is an example of this <em>(working example can be found here -&gt; <a rel="_blank" href="http://codepen.io/refinedjs/pen/dMBLqb/?editors=1011">Code Pen</a>)</em>.
      </p>
      <code data-gist-id="1fb1731c3c9f362d63c1049127210f44" data-gist-show-spinner="true" />
      <hr />
      <h3>The Refined Way</h3>
      <p>
        To clean up the code above and to make more sense of what we are using we will incorporate the <code>BindToController</code> property.
        The <code>BindToController</code> property can be either a True/False or an object hash. Also, the <code>ControllerAs</code> property must be set
        in order to use <code>BindToController</code>. With these to properties set, we can not have Angular bind the given properties to the controller
        rather the <code>$scope</code>.
      </p>
      <p>
        In our example, we will be using the an object hash, by using the hash, this tells Angular to set up bindings to the controller directly.
        <strong>**One important thing to note</strong>, If <code>BindToController</code> and <code>$scope</code> are both defined with object hashes,
        <code> BindToController</code> will override the components <code>$scope</code>.
      </p>
      <p>
        Below you can see this in action <em>(working example can be found here -&gt; <a rel="_blank" href="http://codepen.io/refinedjs/pen/ONeYJm?editors=1011">Code Pen</a>)</em>.
      </p>
      <code data-gist-id="46a1eefa119c2d550b1c5413f8a2646b" data-gist-show-spinner="true" />
      <p>
        As you can see from the code example above that <code>BindToController</code> makes it easier and more elegant option
        when using Controllers in Directives/Components. This is a fairly basic example; however, it gives good insight into the property as a whole.
        Please comment any suggestions or better ways to use the <code>BindToController</code> property.
      </p>
    </div>
  );
};