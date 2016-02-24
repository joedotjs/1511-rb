var React = require('react');
var BlogTitle = require('./blog-title');
var BlogContent = require('./blog-content');
var BlogTimestamp = require('./blog-timestamp');

module.exports = React.createClass({
    render: function () {
        var post = this.props.tom;
        return (
            <div>
                <BlogTitle title={post.title} />
                <BlogContent content={post.content} />
                <BlogTimestamp date={post.date} />
            </div>
        );
    }
});