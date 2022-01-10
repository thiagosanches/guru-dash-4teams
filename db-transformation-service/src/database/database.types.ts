export interface IGroupedIncidentData {
   name: string;
   rows: IIncidentData[];
   tags: IGroupedTagsIncidentData;
}

export interface IGroupedTagsIncidentData {
    productId: string;
    affectedproduct: string;
}

export interface IIncidentData {
    time: Date;
    productId: string;
    affectedcountries: string;
    affectedplataforms: string;
    affectedproduct: string;
    affectedsquads: string;
    components: string;
    correctionlevel: string;
    createdDate: Date;
    crisisenddate: Date;
    crisisstartdate: Date;
    crisisduration: number;
    errortype: string;
    errorsubtype: string;
    issueName: string;
    issueType: string;
    priority: string;
    resolutionDate: Date;
    status: string;
    statusCategory: string;
    summary: string;
    targetsquad: string;
}

export interface IDeployData {
    time: Date;
    duration: number;
    project: string;
    repositoryId: string;
    success: number;
}

export interface IMeanTimeToRecoverMeasure {
    time: Date;
    productId: string;
    productName: string;
    numberOfIncidents: number;
    mttr: number;
}

export interface IMttrByCorrectionLevelMeasure {
    time: Date;
    productId: string;
    productName: string;
    correctionLevel: string;
    value: number;
}

export interface IMttrByTargetSquadMeasure {
    time: Date;
    productId: string;
    productName: string;
    targetSquad: string;
    value: number;
}

export interface IMttrByPlatformMeasure {
    time: Date;
    productId: string;
    productName: string;
    crisisDuration: number;
    platform: string;
}

export interface IMttrByCountryMeasure {
    time: Date;
    productId: string;
    productName: string;
    crisisDuration: number;
    country: string;
}

export interface IDeploymentFrequencyMeasure {
    time: Date;
    productId: string;
    productName: string;
    valueStreamId: string;
    valueStreamName: string;
    podId: string;
    podName: string;
    numberOfUniqueDeploys: number;
    deploymentFrequency: number; 
}

export interface IChangeFailureRateMeasure {
    time: Date;
    productId: string;
    productName: string;
    valueStreamId: string;
    valueStreamName: string;
    podId: string;
    podName: string;
    numberOfAllDeploys: number;
    numberOfSucceededDeploys: number;
    numberOfFailedDeploys: number;
    changeFailureRate: number; 
}

export interface ICycleTimePostDevMeasure {
    time: Date;
    productId: string;
    productName: string;
    valueStreamId: string;
    valueStreamName: string;
    podId: string;
    podName: string;
    numberOfDeploys: number;
    meanCycleTimePostDev: number;
    worstDurationDeployInMonth: number;
}