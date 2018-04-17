module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/ajax_blog',
        seeds: {
            directory: './seeds/development'
        }
    }
}