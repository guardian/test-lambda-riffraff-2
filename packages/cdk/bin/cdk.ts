import 'source-map-support/register';
import { GuRootExperimental } from '@guardian/cdk/lib/experimental/constructs';
import { ExampleTypescriptLambda } from '../lib/example-typescript-lambda';

const app = new GuRootExperimental();
new ExampleTypescriptLambda(app, 'ExampleTypescriptLambda-PROD', {
	stack: 'playground',
	stage: 'PROD',
	env: {
		region: 'eu-west-1',
	},
});
