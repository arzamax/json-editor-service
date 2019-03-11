import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const StructureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  structure: {},
}, { timestamps: true, minimize: false });

StructureSchema.methods.toStructureNameForClient = function() {
  return {
    id: this._id,
    name: this.name,
  }
};

StructureSchema.methods.toStructureForClient = function () {
  return {
    id: this._id,
    structure: this.structure,
    name: this.name,
  }
};

StructureSchema.plugin(uniqueValidator);

export default mongoose.model('Structure', StructureSchema);
