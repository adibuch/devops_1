//devopsadid.azurewebsites.net
const app = require('./server')


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
}); 
