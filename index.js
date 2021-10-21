const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello. I am excited to learn Node JS');
});

const users = [

    { id: 0, name: 'abdullah', email: 'abdullah@gmail.com', phone: '01631546295' },
    { id: 1, name: 'sifat', email: 'sifat@gmail.com', phone: '01631546295' },
    { id: 2, name: 'nayeem', email: 'nayeem@gmail.com', phone: '01631516295' },
    { id: 3, name: 'mehedi', email: 'mehedi@gmail.com', phone: '01631536295' },
    { id: 4, name: 'jamil', email: 'jamil@gmail.com', phone: '01631546595' },
    { id: 5, name: 'hasibul', email: 'hasibul@gmail.com', phone: '01631546595' }

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// use dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Leasting to port', port);
});