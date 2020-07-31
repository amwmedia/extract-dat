module.exports = function extract (dataValue, extractorFn, defaultValue = null) {
	try {
		const value = extractorFn(dataValue);
		if (typeof value === 'undefined') { return defaultValue; }
		return value;
	} catch(err) {
		return defaultValue;
	}
}
