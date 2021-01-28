import request from "./request";



export  function labels() {
  const params = {
    type: "sex"
  };
  return  request({
    url: "/labels",
    method: "get",
    params: params
  });
};