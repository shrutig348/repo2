import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class MyLambdaStack1 extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

      new Function(this, 'LambdaFunction', {
        runtime: Runtime.NODEJS_18_X,
        handler: 'index.handler',
        code: new InlineCode('exports.handler = _ => "Hello, CDK";'),
        vpc: ec2.Vpc.fromLookup(this, 'testVpc',{vpcName: 'test-vpc'}),
        functionName: 'Qpulse-lambda',
        vpcSubnets: {
          subnetType: ec2.SubnetType.PUBLIC,
        },
        allowPublicSubnet: true
      });
    }
}