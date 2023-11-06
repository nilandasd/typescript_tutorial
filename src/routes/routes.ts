import { Router } from 'express';
import indexRoutes from './index';

const router = Router();

router.use('/', indexRoutes);
//app.use('/register', require('./routes/register'));
//app.use('/login', require('./routes/login'));

export default router;
