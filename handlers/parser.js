const {
	parseEmbed,
	parseComponents,
	parseFiles,
	parseExtraOptions
} = require("../node_modules/aoi.parser/dist/components.js");

module.exports = (Util, parse, createAst) => {
	Util.parsers.ErrorHandler = parse;
	Util.parsers.ComponentParser = (data) => {
		const ast = createAst(data);
		const d = ast.childs.map((c) => parseComponents(c));
		return d;
	};
	Util.parsers.EmbedParser = (data) => {
		const ast = createAst(data);
		const d = ast.childs.map((c) => parseEmbed(c));
		return d;
	};
	Util.parsers.FileParser = (data) => {
		const ast = createAst(data);
		const d = ast.childs.map((c) => parseFiles(c));
		return d;
	};
	Util.parsers.OptionParser = (data) => {
		const ast = createAst(data);
		const d = ast.childs.map((c) => parseExtraOptions(c));
		return d;
	};
};
