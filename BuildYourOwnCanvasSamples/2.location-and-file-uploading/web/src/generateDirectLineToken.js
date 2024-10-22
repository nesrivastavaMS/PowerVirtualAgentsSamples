
const fetch = require("node-fetch");

// Generates a new Direct Line token given the secret.
module.exports = async function generateDirectLineToken(botId, botTenantId) {
  const styleOptions = {
    // Hide upload button.
    hideUploadButton: false
  };
  // You should consider using Enhanced Direct Line Authentication to protect the user ID.
  // https://blog.botframework.com/2018/09/25/enhanced-direct-line-authentication-features/
  
  // The URL host in which to generate the Direct Line token is subject to change based off of environment.
  // The host should be consistent to the host that you are building your Power VA.
  const response = await fetch('https://d2c97b9f13faeb97bd35c6b262b1f8.17.environment.api.powerplatform.com/powervirtualagents/botsbyschema/cr3a9_fileUpload/directline/token?api-version=2022-03-01-preview&botId=' + botId + '&tenantId=' + botTenantId, {method: "GET"});
  
  const { token } = await response.json();

  return token;
};
