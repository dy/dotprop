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
	if (propName === undefined) return holder;
	var propParts = (propName + '').split('.');
	var result = holder, lastPropName;
	while ((lastPropName = propParts.shift()) !== undefined) {
		if (result[lastPropName] === undefined) return undefined;
		result = result[lastPropName];
	}
	return result;
};