export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  jwtSecret: process.env.JWT_SECRET,
  envFilePath: `${process.env.NODE_ENV}.env` || `.env`,
});
