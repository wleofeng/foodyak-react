
var React = require('react');

module.exports = React.createClass({
	constructor 


  render: function() {
    return (
    	<form > 
		    <input type="text" onChange={this.onChange.bind(this)}/>
  			
			  <button type="button">GO!</button>
		  </form>
    )
  },

  onChange: function(event) {
  	var value = event.currentTarget.value;
  	console.log(value);
  }
});


