module.exports = {
  port: 9000,
  session: {
    name: 'SID',
    secret: 'SID',
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: 365 * 24 * 60 * 1000
    }
  },
  mysql: {
    host: '127.0.0.1',
    user: 'elm_user',
    password: '111***aaa',
    database: 'elm',
    port: 3306
  }
}