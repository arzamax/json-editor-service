import Structure from '../models/structure';

export default class StructureController {

  static async saveOrCreateStructure(req, res, next) {
    try {
      const { id, structure: data, name } = req.body;

      if (id) {
        await Structure.updateOne({ _id: id }, { name, structure: data });
      } else {
        const structure = new Structure({ name, structure: data });

        structure.save();
      }

      res.json({ success: true });
    } catch(e) {
      next(e);
    }
  }

  static async getStructuresNames(req, res, next) {
    try {
      const structures = await Structure.find();
      let structuresNames = [];

      if (structures) {
        structuresNames =  await Promise.all(structures.map(async structure => {
          return await structure.toStructureNameForClient();
        }))
      }

      return res.json(structuresNames);
    } catch(e) {
      next(e);
    }
  }

  static async getStructure(req, res, next) {
    try {
      const id = req.query.id;

      if (!id) {
        res.status(404);
        res.json({
          error: true,
          message: 'There is no id provided',
        });

      } else {
        const structure = await Structure.findById(id);

        if (!structure) {
          res.status(404);
          res.json({
            error: true,
            message: 'There is no such structure',
          });

        } else {
          const structureToClient = await structure.toStructureForClient();

          res.json(structureToClient);
        }
      }
    } catch(e) {
      next(e);
    }
  }
}