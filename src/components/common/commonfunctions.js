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

export const defaultSorting = (data) => {
  let returnValue = '';
  data.forEach((value) => {
    if (value.defaultSorting) {
      returnValue = value.accessor;
    }
  });
  return returnValue;
};

export const defaultSortingOrder = (data) => {
  let returnValue = 'asc';
  data.forEach((value) => {
    if (value.defaultSortingOrder == 'desc') {
      returnValue = 'desc';
    }
  });
  return returnValue;
};

export const nestedIfCaseHandle = (condition, trueValue, falseValue) => {
  if (condition) {
    return trueValue;
  } else {
    return falseValue;
  }
};

export const convertNull = (temp, header, showNA) => {
  if (temp[header.property] == null || temp[header.property] == undefined) {
    temp[header.property] = nestedIfCaseHandle(showNA, 'N/A', '');
  }
  return temp;
};

export const addRowActionData = (temp, rowActionData) => {
  temp.rowActionData = rowActionData
  return temp;
};


export const restructureArray = (records, jsonData, showNA, rowActionData) => {
  return records?.map((data) => {
    let temp = { ...data };
    jsonData.forEach((header) => {
      convertNull(temp, header, showNA);
      addRowActionData(temp, rowActionData);
      // convertPhoneNumber(temp, header);
      // convertZipCode(temp, header);
      // convertTimeStampToDate(temp, header);
      // convertTimeStampToDateTime(temp, header);
      // structureconvertTimetoUTC(temp, header);
      // capitalize(temp, header);
      // convertCurreny(temp, header);
      // handleBooleanToYesNo(temp, header);
      // refactorPhoneStatus(temp, header);
      // handleSsn(temp, header);
      // handleBooleanToActiveInActive(temp, header);
      // handleBooleanToHistoricalCurrent(temp, header);
      // handleFalseStatus(temp, header);
    });
    return temp;
  });
};

export const getMenuOptions = (icon, label) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {icon}
      </div>
      <div style={{ paddingLeft: '5px', fontWeight: 400 }}>{label}</div>
    </div>
  );
};

export const convertTimestamptoUSA = (input) => {
  if (input) {
    let date = new Date(input);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
  return null;
};