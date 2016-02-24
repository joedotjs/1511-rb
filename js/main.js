var React = require('react');
var ReactDOM = require('react-dom');
var BlogPost = require('./blog-post');

var posts = [
    {
        title: 'How to use React',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloremque dolores earum et harum illo magni modi nihil officia repellat repellendus, sapiente voluptatibus. Asperiores blanditiis consequuntur enim molestiae sequi, voluptatem.',
        date: new Date()
    },
    {
        title: 'How to use Javscript',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloremque dolores earum et harum illo magni modi nihil officia repellat repellendus, sapiente voluptatibus. Asperiores blanditiis consequuntur enim molestiae sequi, voluptatem.',
        date: new Date()
    },
    {
        title: 'How to use yosdjflk',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloremque dolores earum et harum illo magni modi nihil officia repellat repellendus, sapiente voluptatibus. Asperiores blanditiis consequuntur enim molestiae sequi, voluptatem.',
        date: new Date()
    }
];

var Blog = React.createClass({
    render: function () {
        var blogPosts = posts.map(function (post) {
            return <BlogPost tom={post} />;
        });
        return (
            <div id="blog">
                {blogPosts}
            </div>
        );
    }
});



ReactDOM.render(<Blog />, document.body);