import { BASE_URL } from './shared/constants';

export async function postEvent(type: string, selectedInstalment: number) {
  try {
    const response = await fetch(`${BASE_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context: 'checkoutWidget',
        type,
        selectedInstalment,
      }),
    });

    if (!response.ok || response.status !== 200) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(`Error on posting event: ${error}`);
  }
}
