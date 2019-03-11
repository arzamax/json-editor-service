import express from 'express';

import StructureController from '../../controllers/structure';

const router = express.Router();

router.get('/', StructureController.getStructure);
router.post('/', StructureController.saveOrCreateStructure);
router.delete('/', StructureController.deleteStructure);
router.get('/names', StructureController.getStructuresNames);

export default router;