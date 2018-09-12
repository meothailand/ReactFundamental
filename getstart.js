function displayName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'John',
    lastName: 'Dove'
};

const element = (<h2>Hello, {displayName(user)}</h2>);

ReactDOM.render(
    element,
    document.getElementById('root')
);