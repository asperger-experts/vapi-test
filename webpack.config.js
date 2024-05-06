const path = require("path")

module.exports = {
	entry: "./node_modules/@vapi-ai/web/dist/vapi.js",
	output: {
		filename: "vapi.bundle.js",
		path: path.resolve(__dirname, "bundle"),
		library: {
			type: "module",
		},
	},
	experiments: {
		outputModule: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["transform-commonjs-es2015-modules"]
					},
				},
			},
		],
	},
}
