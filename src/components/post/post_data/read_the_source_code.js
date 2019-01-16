import React from 'react';

module.exports = function () {
  return (
    <div>
      <p>
        A lot of people use open source libraries without understanding the nuts and bolts. On the surface this may seem fine.
        You read its description, it says it will do what you need so you give integrating it into your project a shot. It does not work.
        It said it was going to, but there is something wrong. You did not write it so you cannot adequately debug it.
      </p>
      <p>
        This is the part that I love. I actually do it before using a library. Read the source code. Figure out exactly
        what the function/class is supposed to do. The context in which it is used, the arguments it needs, the calculations,
        the comments(if there are any). Once you read the source code, if it is written well or even if it is not,
        you will understand and be able to determine if the library is really what you need.
      </p>
    </div>
  );
};