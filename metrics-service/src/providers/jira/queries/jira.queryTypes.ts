export const fieldsByQueryType: Record<string,string>  = {
    BUG: "issuekey, summary, status, issuetype, created, resolutiondate",
    HOUR: "created, timespent, issuetype, issuekey, summary",
    INCIDENT: "issuekey, summary, status, issuetype, created, resolutiondate, components, priority"
};