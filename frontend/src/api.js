export async function getTours() {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/tours`);
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getTour(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/tours/${id}`);
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}
