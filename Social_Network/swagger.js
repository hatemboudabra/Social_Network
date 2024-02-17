const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
    swaggerDefinition:{
        info:{
            title:'Social_Network',
            version:'1.0.0',
            description:"This type of social networking allow users to posts ",
        },
        basePath:'/',
    },
    apis:['./routes/*.js',],// Path to the Api routes 
};
const specs = swaggerJsdoc(options);

module.exports ={
    serve:swaggerUi.serve,
    setup:swaggerUi.setup(specs)
}