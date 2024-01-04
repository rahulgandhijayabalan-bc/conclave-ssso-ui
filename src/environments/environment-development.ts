export const environment = {
  production: true,
  idam_client_id:'IDAM_ID',
  uri: {
    api: {
      isApiGateWayEnabled: false,
      //security: 'https://dev.security.conclave.crowncommercial.gov.uk',
      security: 'https://dev-api-security.london.cloudapps.digital',
      //postgres: 'https://dev.core.conclave.crowncommercial.gov.uk',
      postgres: 'https://dev-api-core.london.cloudapps.digital',
      //cii: 'https://conclave-cii-integration-brash-shark-mk.london.cloudapps.digital',
      wrapper: {
        apiGatewayEnabled: {
          user: 'https://api.crowncommercial.gov.uk/user-profiles',
          organisation: 'https://api.crowncommercial.gov.uk/organisation-profiles',
          contact: 'https://api.crowncommercial.gov.uk/contacts',
          configuration: 'https://api.crowncommercial.gov.uk/configurations',
          dataMigration: 'https://api.crowncommercial.gov.uk/datamigration',
        },
        apiGatewayDisabled: {
          user: 'https://dev-api-wrapper.london.cloudapps.digital/users',
          organisation: 'https://dev-api-wrapper.london.cloudapps.digital/organisations',
          contact: 'https://dev-api-wrapper.london.cloudapps.digital/contacts',
          configuration: 'https://dev-api-wrapper.london.cloudapps.digital/configurations',
          dataMigration: 'https://dev-api-wrapper.london.cloudapps.digital/datamigration',
        }
      }
    },
    web: {
      //dashboard: 'https://dev.sso.conclave.crowncommercial.gov.uk'
      dashboard: 'https://dev-ccs-sso.london.cloudapps.digital',
      name: "DEV",   // <= name should not be any value in production
    },
    ccsContactUrl: "https://www.crowncommercial.gov.uk/contact",
    ccsDashboardUrl: "https://www.crowncommercial.gov.uk"
  },
  googleTagMangerId: 'GTM',
  cookieExpirationTimeInMinutes: 525600,
  bulkUploadPollingFrequencyInSeconds: 5,
  bulkUploadMaxFileSizeInBytes:1048576,
  bulkUploadTemplateFileUrl: 'BUCKET_URL', // Put the publicly accessible url of the template file
  usedPasswordThreshold: 5, //This value should be changed when Auth0 password history policy changed,
  listPageSize: 10,
  mailDecryptKey:'conclavesimpleemailencrypt',  
  rollbar: {
    key: 'ROLLBAR',
    enable : false,
    security_log:false,
    environment: 'dev-ccs-sso'
  },
  cookies_policy: {
    essentialcookies: {
        notify_admin_session: 20,
        cookie_policy: 1,
        ccs_sso_visitedsites: 60,
        opbs: 60,
        ccs_sso: 60,
        conclave: 60,
        XSRF_TOKEN: 30,
        XSRF_TOKEN_SVR: 30,
        AspNetCore_Antiforgery_GWNWkbbyKbw: 30
    },
    Auth0cookies: {
        auth0_compat: 3,
        did_compat: 6,
        did: 6,
        auth0: 3,
        __cf_bm: 30
    },
  },
  appSetting: {
   hideIDP:true,
   hideDelegation:false,
   hideBulkupload:false,
   hideAutoValidation:false,
   hideSimplifyRole: false,
   blockedScheme: ["GB-PPG"],
   isMaintenance: false,    
   customMfaEnabled : false,
  },
};