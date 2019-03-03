import express from 'express';

import StructuresRoutes from './structures';

const router = express.Router();

router.use('/structures', StructuresRoutes);

export default router;