import fetch from "node-fetch";

export const post = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return await res.json();
  } catch(e) {
    return { success: false, error: e };
  }
}

export default post;