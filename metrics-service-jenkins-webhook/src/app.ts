import { logger } from './shared/logger';
import express from 'express'
import bodyParser from 'body-parser';

import { InfluxDB } from "influx";
import { IPoint } from 'influx';
import { IJenkinsRelease } from './jenkins.types';

const app: express.Application = express();
const port: number = 8081;
const defaultMessage: string = 'OK'

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

app.post('/', (_req, _res) => {
  const result: any[] = [];
  const body: IJenkinsRelease = _req.body;
  result.push(map(body));

  new InfluxDB(process.env.INFLUXDB!).writePoints(result);
  _res.send(defaultMessage)
});


function map(deploy: IJenkinsRelease): IPoint {
  const createdDate: Date = new Date();

  let register: IPoint = {
    measurement: 'deploy',
    timestamp: createdDate,
  };

  const ipointTags: any = {
    project: deploy.project
  };

  const ipointFields: any = {
    duration: new Date(deploy.finishedDate).getTime() - new Date(deploy.startedDate).getTime(),
    success: deploy.deploymentState === 'SUCCESS' ? 1 : 0,
    team: deploy.team
  };

  register.tags = { ...ipointTags };
  register.fields = { ...ipointFields };

  return register;
}
