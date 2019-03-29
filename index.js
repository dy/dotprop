/**
 * @module dotprop
 *
 * Get property defined by dot notation in string.
 *
 * @param  {Object} holder   Target object where to look property up
 * @param  {string} propName Dot notation, like 'this.a.b.c'
 * @return {*}          A property value
 */
module.exports = function(holder, propName){
	if (propName == null || !holder) return holder;
	var propParts = Array.isArray(propName) ? propName : (propName + '').split('.');
	var result = holder, lastPropName;

	while ((lastPropName = propParts.shift()) != null) {
		if (!result[lastPropName]) return !propParts.length ? result[lastPropName] : undefined;
		result = result[lastPropName];
	}
	return result;
};
