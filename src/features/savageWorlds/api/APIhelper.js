const timeoutDecorator = (fn) => new Promise((resolve, reject) => setTimeout(
  () => fn(resolve, reject),
  500,
));
  
export const mockRequest = (fn) => (req = {}) => timeoutDecorator((resolve) => {
  let requestId;
  try {
    requestId = createId();
    console.log('REQ:', requestId, req);
  
    const {
      query = {},
      data = {},
    } = req;
  
    const result = fn({
      query,
      data,
    });
  
    const res = {
      data: result,
      error: null,
    };
    console.log('RES:', requestId, res);
    return resolve(res);
  } catch (e) {
    const res = {
      data: null,
      error: e.message,
    };
    console.error('ERR:', requestId, res);
    return resolve(res);
  }
});

export const createId = () => crypto.randomUUID();
