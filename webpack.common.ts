import * as path from "path";
import { Configuration } from "webpack";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config: Configuration = {
	context: path.resolve(__dirname, "./src"),
	entry: { app: "./index.tsx" },
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader",
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
			title: "Mithril TSX Starter",
			filename: "index.html",
			chunks: ["vendors", "app"],
		}),
		new MiniCssExtractPlugin(),
	],
	output: {
		filename: "[name].js",
		chunkFilename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
};

export default config;
