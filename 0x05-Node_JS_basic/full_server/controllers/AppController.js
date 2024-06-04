class AppController{
    static getHomepage(request, response){
        response.setstatus(200);
        response.send('Hello Holberton School!');

    }
}
module.exports = AppController;