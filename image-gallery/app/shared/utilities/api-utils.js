import { HTTP_STATUS } from '../constants/api-constants.js';

export async function fetchWithErrorHandling(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (
      error.name === 'TypeError' &&
      error.message.includes('Failed to fetch')
    ) {
      throw new Error('Network error. Please check your internet connection.');
    }

    switch (error.message) {
      case `HTTP error! status: ${HTTP_STATUS.UNAUTHORIZED}`:
        throw new Error(
          'API authentication failed. Please check your API key.',
        );
      case `HTTP error! status: ${HTTP_STATUS.NOT_FOUND}`:
        throw new Error('Requested resource not found.');
      case `HTTP error! status: ${HTTP_STATUS.INTERNAL_ERROR}`:
        throw new Error('Server error. Please try again later.');
      default:
        throw error;
    }
  }
}

export function buildApiUrl(baseUrl, endpoint, params = {}) {
  const url = new URL(endpoint, baseUrl);
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.append(key, params[key]);
    }
  });
  return url.toString();
}
