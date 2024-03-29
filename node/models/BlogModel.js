import db from "../database/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define('usuarios',{
  email: {type: DataTypes.STRING},
  password: {type: DataTypes.STRING},

})

export default BlogModel;