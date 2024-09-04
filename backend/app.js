const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const tourRouter = require('./routes/tourRoute');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');

const app = express();

// Global MIDDLEWARES

// Set Security HTTP headers
app.use(helmet());

// Body parser, Reading data from body into req.body
// app.use(express.json({ limit: '10kb ' }));
app.use(express.json());

app.use(cors());

// Data Sanitize against NoSQL query injection
app.use(mongoSanitize());

// Data Sanitize against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'price',
      'maxGroupSize',
      'difficulty',
    ],
  })
);

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limit = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 100 Request in one hour
  message: 'To many requests from this IP, Please try again in an hour',
});

app.use('/api', limit);

// serving static files with this built-in middleware
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES (Mounting the routers)
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

// unhandled routes error middleware
app.all('*', (req, res, next) => {
  next(
    new AppError(`Can't find the ${req.originalUrl} route on the server`, 404)
  );
});

// global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
