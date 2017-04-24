import api from './api';

const json = (request) => request.then(result => result.json());

export function buildCRUDService(endpoint) {
  return {
    find: () => json(api.get(endpoint)),
    create: (body) => json(api.post(endpoint, body))
  };
}
