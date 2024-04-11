#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/my-pipeline-stack';
import { MyVpc } from '../lib/vpc';



const app = new cdk.App();

const VpcStack = new MyVpc(app, 'VpcStack', {
  env: {
    account: '339712799220',
    region: 'ap-south-1',
  }
});

new MyPipelineStack(app, 'MyPipelineStack', {
  env: {
    account: '339712799220',
    region: 'ap-south-1',
  }
});

app.synth();