export const checkAuth = () => {
  let isAuthenticated = false;
  let token = document.cookie
    ? document.cookie
        .split("; ")
        .find((row) => row.startsWith("authtoken="))
        .split("=")[1]
    : undefined;
  if (token !== undefined && token.length > 1) {
    isAuthenticated = true;
  }
  return isAuthenticated;
};

export const returnValueOrDefault = (value, defaultVal) => {
  if (value) {
    return value;
  }
  return defaultVal;
};

export const returnValueOrDefaultNested = (conditions, trueValues, falseValue) => {
  let returnValue;
  conditions.forEach((condition, index) => {
    if (condition) {
      returnValue = trueValues[index];
    }
  });
  if (returnValue !== undefined) {
    return returnValue;
  } else {
    returnValue = falseValue;
    return returnValue;
  }
};

export const validateError = (data, errorValue = []) => {
  return errorValue.some((error) => error.fieldName == data.name);
};

export const validateHelperText = (data, errorValue = []) => {
  const value = errorValue.find((error) => error.fieldName == data.name);
  return value?.text;
};

export const handleOptionsData = (formData, accessor, optionsData) => {
  const arr = [];
  formData?.forEach((data) => {
    if (data.accessor == accessor) {
      arr.push({ ...data, options: optionsData });
    } else {
      arr.push({ ...data });
    }
  });
  return arr;
};
