import Utils from ".";
// import { logOut } from "../components/header/action";

const getAccessTokenUsingRefreshToken = () => {
  return (dispatch) => {
    if ("refresh-token" in localStorage) {
      const dataToSend = {
        refreshtoken: localStorage.getItem("refresh-token"),
      };
      Utils.api.postApiCall(
        // Utils.endPoints.refresh,
        "refreshToken",
        dataToSend,
        (respData) => {
          let { data } = respData;
          if (data.statusCode === 200) {
            localStorage.setItem("access_token", `${data.data.accessToken}`);
            localStorage.setItem("refresh-token", `${data.data.refreshToken}`);
          }
        //    else return logOut();
        },
        (error) => {
        //   return logOut();
        }
      );
    }
    //  else return logOut();
  };
};
const checkUserValidation = (data) => {
  if (data) {
    const { statusCode } = data,
      { sessionExpired, unauthorized, accessDenied } =
        Utils.constants.api_error_code;

    if (statusCode) {
      return (
        statusCode === sessionExpired ||
        statusCode === unauthorized ||
        statusCode === accessDenied
      );
    }
    return false;
  }
  return false;
};

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const logOutApiCall = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};
const loginApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback
) => {
  Utils.constants.axios
    .post(endPoint, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
            message: "Something went wrong!",
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired
          Utils.showAlert(2, data.message);
          setTimeout(() => {
            if (localStorage.getItem("accessToken") !== null) {
              getAccessTokenUsingRefreshToken();
            }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const deleteApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback
) => {
  Utils.constants.axios
    .delete(endPoint, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (data.message === "Session is expired.") {
          logOutApiCall();
        }
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const headers= {
  'Content-Type': 'application/json',
}
const postApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback
) => {
  Utils.constants.axios
    .post(endPoint, params, {headers:headers})
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (data.code === 423) {
          logOutApiCall();
        }
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
// const putApiCall = (
//   endPoint,
//   params | string,
//   successCallback,
//   errorCallback
// ) => {
//   Utils.constants.axios
//     .put(endPoint, params)
//     .then((response) => {
//       successCallback(response);
//     })
//     .catch((error) => {
//       if (error.code === "ECONNABORTED") {
//         let payload = {
//           data: {
//             statusCode: 408,
//           },
//         };
//         errorCallback(payload);
//       } else if (error.response) {
//         let data = error.response.data;
//         if (data.code === 423) {
//           logOutApiCall();
//         }
//         if (checkUserValidation(data)) {
//           //if user session expired

//           Utils.showAlert(2, data.message);
//           setTimeout(() => {
//             logOutApiCall();
//             // if (localStorage.getItem('accessToken') !== null) {
//             //   getAccessTokenUsingRefreshToken();
//             // }
//           }, 1000);
//         } else {
//           errorCallback(error.response);
//         }
//       } else if (!error.response) {
//         let payload = {
//           data: {
//             statusCode: "",
//             message: "Please try again later",
//           },
//         };
//         errorCallback(payload);
//       }
//     });
// };
const getApiCall = (
  endPoint,
  params = "",
  successCallback,
  errorCallback
) => {
  Utils.constants.axios
    .get(Utils.constants.apiUrl + endPoint + params, {})
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (data.code === 423) {
          logOutApiCall();
        }
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const putApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback
) => {
  Utils.constants.axios
    .put(endPoint, params,{headers:headers})
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};



const api = {
  postApiCall,
  loginApiCall,
  putApiCall,
  getApiCall,
  // patchApiCall,
  deleteApiCall,
  // logOutApiCall
};
export default api;
