import { Router } from 'express';
import authRoutes from './Auth.service.js';
import budgetRoutes from './budget.service.js';
import expenseRoutes from './expense.service.js';
const router = Router();

const routes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/budget',
    route: budgetRoutes,
  },{
    path: '/expense',
    route: expenseRoutes,
  }
];

routes.forEach((cur) => {
  router.use(cur.path, cur.route);
});

export default router;
