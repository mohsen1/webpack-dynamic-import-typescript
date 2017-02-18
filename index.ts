declare function _import<T extends { [K: string]: any; }>(path: string): Promise<T>;

async function getTemplate(templateName) {
	try {
		let template = await _import(`./templates/${templateName}`);
		console.log(template);
	} catch(err) {
		console.error("template error");
		return new Error(err);
	}
}

getTemplate("foo");
getTemplate("bar");
getTemplate("baz");