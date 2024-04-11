#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

import { QpulseStack } from '../lib/qpulse-stack';

const app = new cdk.App();
new QpulseStack(app, 'QpulseStack', {

  synthesizer: new cdk.DefaultStackSynthesizer({
    qualifier: 'qpulse',
  }),
  env: {
    account: '339712799220',
    region: 'ap-south-1',
  }
});

app.synth();