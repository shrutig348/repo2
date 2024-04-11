import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { QpulseAppStage } from './qpulse-app-stage';

export class QpulseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'QpulsePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('shrutig348/repo2', 'main'),
        commands: ['cd Qpulse', 'pwd', 'npm ci', 'npm run build', 'npx cdk synth'],
        primaryOutputDirectory: "Qpulse/cdk.out"
      })
    });
    pipeline.addStage(new QpulseAppStage(this, "qpulsetest", {
      env: { account: "339712799220", region: "ap-south-1" }
    }));
  }
}