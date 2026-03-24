const { test, expect, request } = require('@playwright/test');

test('Reqres API Test', async () => {
  const api = await request.newContext({
    baseURL: 'https://reqres.in/api'
  });

  const createRes = await api.post('/users', {
    data: {
      name: 'John',
      job: 'QA'
    }
  });

  expect(createRes.status()).toBe(201);
  const createData = await createRes.json();
  console.log(createData);

  const getRes = await api.get('/users/2');
  expect(getRes.status()).toBe(200);

  const updateRes = await api.put('/users/2', {
    data: {
      name: 'Updated John'
    }
  });

  expect(updateRes.status()).toBe(200);
  const updateData = await updateRes.json();
  expect(updateData.name).toBe('Updated John');
});