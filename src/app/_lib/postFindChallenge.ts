import { apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';

export async function postFindChallenge(password, type) {
  const api_params = JSON.stringify({
    code: password,
    type: type,
  });

  console.log(api_params);

  const accessToken = LocalStorage.getItem('accessToken');
  try {
    const res = await fetch(`${apiUrl}/reset-password/challenge`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: api_params,
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseData = await res.json();

    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
