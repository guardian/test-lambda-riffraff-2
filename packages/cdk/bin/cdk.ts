import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { ExampleTypescriptLambda } from "../lib/example-typescript-lambda";

const app = new App();
new ExampleTypescriptLambda(app, "ExampleTypescriptLambda-PROD", { stack: "playground", stage: "PROD" });
