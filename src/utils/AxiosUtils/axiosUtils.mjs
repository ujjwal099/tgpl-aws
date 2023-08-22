export default class AxiosUtils {
  static axiosConfigConstructor = (method, endpoint, data, headers, params) => {
    return {
      method: method,
      url: endpoint,
      headers: {
        "X-Thriwe-Comms-Key": "STAG_COMMS_KEY",
        ...headers,
      },
      data: data,
      params: params,
    };
  };
}
