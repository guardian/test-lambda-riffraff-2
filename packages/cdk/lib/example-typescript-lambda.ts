import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuLambdaFunction } from '@guardian/cdk/lib/constructs/lambda';
import type { App } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

export class ExampleTypescriptLambda extends GuStack {
	constructor(scope: App, id: string, props: GuStackProps) {
		super(scope, id, props);

		new GuLambdaFunction(this, 'ExampleTypescriptLambda', {
			app: 'example-typescript-lambda',
			fileName: 'example-typescript-lambda.zip',
			handler: 'index.main',
			runtime: Runtime.NODEJS_18_X,
		});
	}
}
