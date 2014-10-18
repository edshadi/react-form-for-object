/**
 * @jsx React.DOM
 */

var DatetimeInput = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <input ref={data.name} type="datetime" defaultValue={data.defaultValue} className={data.className} />
    );
  }

});

module.exports = DatetimeInput;
