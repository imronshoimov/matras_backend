module.exports = {
    PORT: process.env.PORT,
    connectionString: process.env.DB_CONNNECT || "postgres://oucplina:2jdpz6RLB9na7J4PUinfmcQ2vq_ABO5E@fanny.db.elephantsql.com/oucplina",
    pageLimit: 2,
    secretKey: process.env.SECRET_KEY
}