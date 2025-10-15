export const NOTES_CONTENT_STRINGS = [
	'Great work!',
	'This needs improvement.',
	'Excellent point made here.',
	'Could you explain more details?',
	'I completely agree with this approach.',
	'This section needs more detailed information.',
	'Perfect example of good writing style.',
	'Not sure about this particular approach.',
	'This is really well done and helpful.',
	'I think this approach could be improved by adding more examples and providing clearer explanations.',
	'Very insightful analysis here.',
	'This could benefit from additional context.',
	'Outstanding quality and attention to detail.',
	'Would you mind elaborating on this point?',
	'I strongly support this direction.',
	'More background information would be helpful.',
	'Excellent demonstration of best practices.',
	'I have some concerns about this method.',
	'This is exceptionally well-crafted and informative.',
	'Consider adding more specific examples to strengthen this argument.',
	'Impressive work on this section.',
	'This area requires further development.',
	'Brilliant insight and well-articulated thoughts.',
	'Can you provide more clarification on this topic?',
	'I fully endorse this strategy.',
	'Additional supporting evidence would strengthen this point.',
	'Outstanding example of clear and effective communication.',
	'This is remarkably well-executed and valuable.',
	'This would be enhanced with more concrete illustrations and detailed explanations.',
];

// Removed falsy values from nested object.
export const cleanEmptyObject = ( object ) => {
	if ( object === null || typeof object !== 'object' || Array.isArray( object ) ) {
		return object;
	}

	const cleanedNestedObjects = Object.entries( object )
		.map( ( [ key, value ] ) => [ key, cleanEmptyObject( value ) ] )
		.filter( ( [ , value ] ) => value !== undefined );
	return ! cleanedNestedObjects.length ? undefined : Object.fromEntries( cleanedNestedObjects );
};

// Flatten the blocks array.
export function flattenBlocks( blocks ) {
	const result = [];
	blocks.forEach( ( block ) => {
		result.push( block );
		result.push( ...flattenBlocks( block.innerBlocks ) );
	} );
	return result;
}
