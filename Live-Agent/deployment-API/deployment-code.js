//get the user's email address from local storage
var email = localStorage.getItem('liveAgentEmail');
//add a custom detail named email using the email variable
liveagent.addCustomDetail('email',email);
//add two other custom details for case subject and case status
liveagent.addCustomDetail('caseStatus','New');
liveagent.addCustomDetail('caseSubject','Portal Case: ');
//we will find or create a contact record
liveagent.findOrCreate('Contact');
//find a contact where the email address matches the value
//of the customDetail named email, do not perform exact match
//and do not create a new contact
liveagent.findOrCreate('Contact').map('email','email',true,false,false);
//once the contact is found add it to the contact lookup on the chat transcript record
liveagent.findOrCreate('Contact').saveToTranscript('Contact');
//link the contact to a new case by the contactId lookup field
liveagent.findOrCreate('Contact').linkToEntity('Case','ContactId');
//find or create a new case
liveagent.findOrCreate('Case');
//create a new case and populate the status and subject fields using the customDetails
liveagent.findOrCreate('Case').map('Status','caseStatus',false,false,true).map('Subject','caseSubject');
//once the case is created display it in the console
liveagent.findOrCreate('Case').showOnCreate();
//attach the case to the transcript via the case lookup field
liveagent.findOrCreate('Case').saveToTranscript('CaseId');
