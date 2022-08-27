import * as types from "./actionTypes";

const initState = {
  isLoading: false,
  error: "",
  breakfasts: [],
  lunch: [],
  dinner: [],
  snack: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.ADD_BREAKFAST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.ADD_BREAKFAST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.GET_BREAKFAST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_BREAKFAST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        breakfasts: payload,
      };
    }

    case types.GET_LUNCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_LUNCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        lunch: payload,
      };
    }

    case types.GET_DINNER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_DINNER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        dinner: payload,
      };
    }

    case types.GET_SNACK_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.GET_SNACK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        snack: payload,
      };
    }

    default: {
      return state;
    }
  }
};
