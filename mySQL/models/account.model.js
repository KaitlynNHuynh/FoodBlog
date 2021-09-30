sql = require('./db.model.js')

const account = function(){}

account.signUp = ( password, email ) => {
    const saltRounds = 1000;
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(password, salt, saltRounds, 64, 'sha512').toString('hex');

    sql.query("INSERT INTO user_credentials SET ?", [email, hash], (error, response) => {
       return "Success"
    });
}