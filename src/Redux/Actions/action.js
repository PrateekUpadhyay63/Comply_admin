import Utils from "../../Utils";


    export const getAllPages = () => {
      return (dispatch) => {
        Utils.api.getApiCall(
          Utils.endPoints.GET_ALL_PAGES,
          "",
          (resData) => {
            // const { data } = resData;
            // if (resData.status === 200) {
              dispatch({
                type: Utils.ActionName.GET_ALL_PAGES,   
                payload: {
                  pageData : resData.data
                },
              });
            // } else {
            //   Utils.showAlert(2, data.message);
            // }
          },
          (error) => {
            let { data } = error;
            Utils.showAlert(2, data.message);
          }
        );
      };
    };
  

  export const getPageById = (value) => {
    return (dispatch) => {
      Utils.api.getApiCall(
        Utils.endPoints.GET_PAGE_BY_ID,
        `?id=${value}`,
        (resData) => {
          const { data } = resData;
          if (resData.status === 200) {
            dispatch({
              type: Utils.ActionName.GET_PAGE_BY_ID,   
              payload: {
                pageDataById : resData.data
              },
            });
          } else {
            Utils.showAlert(2, resData.message);
          }
        },
        (error) => {
          let { data } = error;
          Utils.showAlert(2, data.message);
        }
      );
    };
  };


    export const getAllContent = () => {
      return (dispatch) => {
        Utils.api.getApiCall(
          Utils.endPoints.GET_ALL_CONTENT,
          "",
          (resData) => {
            const { data } = resData;
            if (resData.status === 200) {
              dispatch({
                type: Utils.ActionName.GET_ALL_CONTENT,   
                payload: {
                  usTinData : resData.data
                },
              });
            } else {
              Utils.showAlert(2, data.message);
            }
          },
          (error) => {
            let { data } = error;
            Utils.showAlert(2, data.message);
          }
        );
      };
    };

    export const deletePAGES = (id) => {
      return (dispatch) => {
        // const dataToSend = { message: value };
        Utils.api.deleteApiCall(
          `${Utils.endPoints.DELETE_PAGE}?id=${id}`,
          "",
          (responseData) => {
            let { data } = responseData;
            dispatch({
              type: Utils.ActionName.DELETE_PAGE,
              payload: { data: data.data },
            });
            if (data.code === 200) {
            } else {
              Utils.showAlert(2, data.message);
            }
          },
          (error) => {
            let { data } = error;
            Utils.showAlert(2, data.message);
          }
        );
      };
    };

    export const createPAGES = (value) => {
      return (dispatch) => {
        const dataToSend = { message: value };
        Utils.api.postApiCall(
          Utils.endPoints.CREATE_PAGE,
          value,
          (responseData) => {
            let { data } = responseData;
            dispatch({
              type: Utils.ActionName.CREATE_PAGE,
              payload: { data: data.data },
            });
            if (data.code === 200) {
            } else {
              Utils.showAlert(2, data.message);
            }
          },
          (error) => {
            let { data } = error;
            Utils.showAlert(2, data.message);
          }
        );
      };
    };

    export const updatePAGES = (value) => {
      return (dispatch) => {
        const dataToSend = { message: value };
        Utils.api.putApiCall(
          Utils.endPoints.UPDATE_PAGE,
          value,
          (responseData) => {
            let { data } = responseData;
            dispatch({
              type: Utils.ActionName.UPDATE_PAGE,
              payload: { data: data.data },
            });
            if (data.code === 200) {
            } else {
              Utils.showAlert(2, data.message);
            }
          },
          (error) => {
            let { data } = error;
            Utils.showAlert(2, data.message);
          }
        );
      };
    };

    

    export const getAllCountries = () => {
      return (dispatch) => {
        Utils.api.getApiCall(
          Utils.endPoints.COUNTRIES,
          "",
          (resData) => {
            const { data } = resData;
            if (resData.status === 200) {
              dispatch({
                type: Utils.ActionName.COUNTRIES,   
                payload: {
                  allCountriesData : resData.data
                },
              });
            } else {
              Utils.showAlert(2, data.message);
            }
          },
          (error) => {
            let { data } = error;
            Utils.showAlert(2, data.message);
          }
        );
      };
    };

    export const getAllLanguages = () => {
      return (dispatch) => {
        Utils.api.getApiCall(
          Utils.endPoints.LANGUAGES,
          "",
          (resData) => {
            const { data } = resData;
            if (resData.status === 200) {
              dispatch({
                type: Utils.ActionName.LANGUAGES,   
                payload: {
                  allLanguageData : resData.data
                },
              });
            } else {
              Utils.showAlert(2, data.message);
            }
          },
          (error) => {
            let { data } = error;
            Utils.showAlert(2, data.message);
          }
        );
      };
    };

    export const getParentDropDown = () => {
      return (dispatch) => {
        Utils.api.getApiCall(
          Utils.endPoints.PARENT_DROPDOWN,
          "",
          (resData) => {
              dispatch({
                type: Utils.ActionName.PARENT_DROPDOWN,   
                payload: {
                  parentDropDown : resData.data
                },
              });
          },
          (error) => {
            let { data } = error;
            Utils.showAlert(2, data.message);
          }
        );
      };
    };
  