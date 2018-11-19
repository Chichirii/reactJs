import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    firstName: 'Anson',
    lastName: 'Lee'
};

const comment = {
    date: new Date(),
    text: "Enjoying your day?",
    author: {
        name: 'Your current avatar profile picture:',
        avatarUrl:
        'https://i.imgur.com/zC8sER6.jpg',
    },
};

function Comment(props) {
    return (
        <div className="Comment">
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                Today's date is: {formatDate(props.date)}
            </div>
            <UserInfo user = {props.author} />
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className = "UserInfo">
            <div className = "UserInfo-name">
                {props.user.name}
            </div>
            <Avatar user = {props.user} />
        </div>
    );
}

function Avatar(props) {
    return (
        <img className = "Avatar"
             alt = {props.user.name}
             src = {props.user.avatarUrl}
        />
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
           date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome back {formatName(user)}.</h1>
                <h2>It is currently {this.state.date.toLocaleTimeString()}.</h2>
                <Comment date={comment.date} text={comment.text} author={comment.author}/>

            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make 'this' work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
          <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);

//Helper Fns ======================================================================================

function formatName(user) {
    return user.firstName;
}

function formatDate(date) {
    return date.toLocaleDateString();
}
