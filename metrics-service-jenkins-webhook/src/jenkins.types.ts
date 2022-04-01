export interface IJenkinsRelease {
    project: string;
    releaseEnvironment: string;
    deploymentState: string;
    startedDate: string;
    finishedDate: string;
    team: string
}