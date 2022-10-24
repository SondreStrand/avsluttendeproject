let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactformdatabase'
});

let productsData = connection.connect(function(err){
    if (err) {
        console.error('Error connecting to database' + err.message)
        return;
    }
    console.log('Connected to database' + connection.threadId)
    let sql = "SELECT `model`, `price`, `description`, `image` FROM `products`";
    let values = [];
    
    connection.query(sql, function(err, result){
        if (err) throw err;
        console.log(result)
        let values = [result];
        //console.log(values)
    });
    connection.end();
});

export default productsData;
