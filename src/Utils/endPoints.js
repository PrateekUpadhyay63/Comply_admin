const endPoint = {
  // login: "/login",
  // forgotPassword: "/forget-password",
  // resendOtp: "/resend-otp",
  // verifyOTP: "/verify-otp",
  // resetPassword: "/reset-password",
  // signUp: "/signup",
  COUNTRIES: "Country/GetAllCountries",
  LANGUAGES: "Language/GetAllLanguage",
  //PAGES API
  GET_ALL_PAGES: "Page/GetAllPages",
  DELETE_PAGE: "Page/Delete",
  CREATE_PAGE:"Page",
  PARENT_DROPDOWN:"Page/ParentDopDown",
  GET_PAGE_BY_ID:"Page/GetPageById",
  UPDATE_PAGE:"Page/Update",

  //Content API
  GET_ALL_CONTENT: "ContentBlock/GetAll",

  // Agents API's
  GET_ALL_AGENTS:"Agent/GetAllAgents",
  CREATE_AGENT:"Agent/Create",
  DELETE_AGENT:"Agent/Delete",
  GET_AGENT_BY_ID:"Agent/GetAgentById",
  UPDATE_GWN:"Agent/Update",
};

export default endPoint;
