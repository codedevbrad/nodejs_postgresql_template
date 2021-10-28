const Sequelize = require('sequelize');

//GET ENV VARIABLES FROM DOCKER.

function returnDatabaseURI ( ) {
    if ( process.env.NODE_ENV === 'dev' ) {
        return new Sequelize(
            'api' ,
            'postgres' ,
            '12345' ,
            {
                host: 'localhost' ,
                dialect: 'postgres'
            }
        )
    } else {
        return new Sequelize(
            process.env.PGDATABASE,
            process.env.PGUSER,
            process.env.PGPASSWORD,
                {
                    host: process.env.PGHOST,
                    dialect: 'postgres'
                }
            );
    }
}

module.exports = returnDatabaseURI();
