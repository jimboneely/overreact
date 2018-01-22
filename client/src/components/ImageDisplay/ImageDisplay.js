import React from 'react';

class App extends Component {
    state = {
        pagenumber:""
    }
   (function() {
    var cx = '017917501057708533917:hdfpnf6eoos';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();


    //end Image JS Code

    render() {
      return (
        <h2>THe image HTML goes here</h2>
      );
    }
  }