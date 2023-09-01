import { createId, mockRequest } from './APIhelper';

global.crypto = require('crypto');

const mockResponse = () => 'RESPONSE';
const mockError = () => {
  throw new Error('Mocked error');
};

describe('API', () => {
  it('should generate UUID', () => {
    const id1 = createId();
    const id2 = createId();

    expect(id1).not.toBeNull();
    expect(id2).not.toBeNull();

    expect(id1).not.toEqual(id2);
  });

  it('should mock response', async () => {
    const request = mockRequest(mockResponse);
    const response = await request();

    expect(response.error).toBeNull();
    expect(response.data).toEqual('RESPONSE');
  });

  it('should mock error', async () => {
    const request = mockRequest(mockError);
    const response = await request();

    expect(response.error).toEqual('Mocked error');
    expect(response.data).toBeNull();
  });
});
