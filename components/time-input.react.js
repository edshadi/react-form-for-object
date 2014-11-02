/**
 * @jsx React.DOM
 */

var TimeInput = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <input ref={data.name} type="time" defaultValue={data.defaultValue} placeholder={data.placeholder} className={data.className} />
    );
  }

});

module.exports = TimeInput;
