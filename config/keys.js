dbPassword = `mongodb+srv://db_user:${encodeURIComponent('db_pw')}@cluster0-uqiyi.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
    mongoURI: dbPassword
};