var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <h6>{this.props.date.toString()}</h6>;
    }
});