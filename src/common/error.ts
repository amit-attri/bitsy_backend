export const Errors = {
  INVALID_PARAMS : (methodName, fieldName) => ({
    type: ERROR_TYPES.INVALID_PARAMS,
    message: `${methodName} has invalid param for ${fieldName}.`
  }),
  RESPONSE_ERROR : (error) => ({
    type: ERROR_TYPES.SOME_ERROR_OCCURRED,
    message: error && error.message ? error.message : 'Some error Occurred. Our team looking into it.'
  }),
};

const ERROR_TYPES = {
  INVALID_PARAMS       : 'invalid_params',
  SOME_ERROR_OCCURRED  : 'some_error_occurred'
};

