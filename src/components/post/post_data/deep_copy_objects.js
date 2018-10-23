import React from 'react';

module.exports = function(props) {
  const obj = '{ name: \'\', dob: \'\', planet: \'Krypton\' }';
  
  return (
    <div>
      <p>
        Let&apos;s say you had object <code>{obj}</code>. You want to modify the values to create a new Kryptonian,
        but you want to keep the original state of your object. To do this, you can make a copy of the original object and modify the copy
        however you would like. With jQuery, we learned to copy objects using <code>jQuery.extend()</code>. In use, <code>jQuery.extend({}, originalObj)</code> says,
        take my original object and make a copy into a brand new empty object. If you want to preserve default values you can copy the original
        along with a new object that changes some of the defaults and adds new properties using <code>jQuery.extend({}, originalObj, newObj)</code>.
        <code data-gist-id="7d5e39f4d3375afe20c54171c9030d87" data-gist-show-spinner="true"></code>
      </p>
      <p>
        You can check out additional examples here -> <a rel="_blank" href="https://api.jquery.com/jquery.extend/">jQuery.extend()</a>
      </p>
      <p>
        What if we want to do this in Angular, in which using jQuery should be avoided? Angular has a function that can be used,
        like <code>jQuery.extend()</code>, called <code>angular.extend()</code>. But that just scratches the surface. It performs only a shallow copy
        of an object in which you only have a copy of top level parent properties on an object. jQuery does have a <code>deep</code> boolean you can pass
        into its extend function that specifies a deep or non-deep copy, but that only goes down so far and misses children of children of children.
        We would have to write our own deep copy of an object. Objects can have infinite levels and for that we need <code>angular.merge()</code>
        which performs a true deep copy of an object.
      </p>
      <p>
        Suppose we had an object we wanted to copy.
        <code data-gist-id="2ac8f13561f6f7fdfa25f8e46ef4a1bd" data-gist-show-spinner="true"></code>
      </p>
      <p>
        Complicated right? If we want to deep copy it in jQuery we would have to grab each property, cycle through them and create a copy in a new object.
        sically recursion. With Angular all you have to use is <code>angular.merge({}, originalObj)</code>. It does the recursive work for you
        hitting all levels of your object. If you want to preserve your defaults and copy the original along with a new object that changes some of the defaults,
        you can use <code>angular.merge({}, originalObj, newObj)</code>. No more complicated custom functions for deep copying objects.
        If that is your thing, hey, go for it! Just know that Angular can do the work for you. Why reinvent the wheel, eh?
      </p>
    </div>
  );
};