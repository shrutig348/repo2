import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
export class MyVpc extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

const vpc = new ec2.Vpc(this, "VPC", {vpcName: 'test-vpc', natGateways: 0})


    }
}
