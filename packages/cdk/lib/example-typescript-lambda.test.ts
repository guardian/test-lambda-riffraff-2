import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ExampleTypescriptLambda } from './example-typescript-lambda';

describe('The ExampleTypescriptLambda stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new ExampleTypescriptLambda(app, 'ExampleTypescriptLambda', {
			stack: 'playground',
			stage: 'TEST',
		});
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});
