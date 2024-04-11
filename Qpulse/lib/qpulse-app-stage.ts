import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { MyLambdaStack1 } from './qpulse-lambda-stack';

export class QpulseAppStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);

      const lambdaStack = new MyLambdaStack1(this, 'LambdaStack');
    }
}