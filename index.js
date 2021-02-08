module.exports = robot => {
	robot.on('issues.opened', async context => {
		const {
			body
		} = context.payload.issue;
		const comment = context.issue({
			body: body.includes('Thanks') ?
				'You are Welcome!' : 'Thanks!'
		});
		return context.github.issues.createComment(comment);
	});
}