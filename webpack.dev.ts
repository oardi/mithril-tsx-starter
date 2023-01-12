const { merge } = require("webpack-merge");
import { Configuration } from "webpack";
import common from "./webpack.common";

const config: Configuration = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		open: true,
		hot: true,
		port: 8080,
	},
});

export default config;
