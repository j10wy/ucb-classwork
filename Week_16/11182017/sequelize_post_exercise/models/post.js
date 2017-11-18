module.exports = function (sequelize, DataTypes) {
	var Post = sequelize.define("post", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		catagory: {
			type: DataTypes.STRING,
			defaultValue: "Personal"
		}
	})
	return Post;
};