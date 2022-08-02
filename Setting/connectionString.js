const config = {
    user:  'solution', 
    password:  '12345678', 
    server:  'LOCALHOST', 
    database:  'DBJS',
    port:  1433,
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      trustServerCertificate: true,
    }    
  }
  module.exports = config;