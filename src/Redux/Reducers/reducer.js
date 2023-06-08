import Utils from "../../Utils";

const {
  COUNTRIES,
  LANGUAGES,
  GET_ALL_PAGES,
  CREATE_PAGE,
  PARENT_DROPDOWN,
  GET_ALL_CONTENT,
  GET_PAGE_BY_ID,
  UPDATE_PAGE,
} = Utils.ActionName;
let initialState = [];
export const getAllPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PAGES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const pageDataByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGE_BY_ID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getAllContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const createPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updatePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const CountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const LanguagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const ParentDropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARENT_DROPDOWN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
