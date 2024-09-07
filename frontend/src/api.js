export async function getTours() {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/tours`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

      credentials: "include",
    });
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getTour(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/tours/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!res.ok) {
      const message = `An error has occurred: ${res.statusText}`;
      throw new Error(message);
    }
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function loginUser(cred) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
      credentials: "include",
    });

    if (!res.ok) {
      const message = ` ${res.statusText}: Incorrect Email or Password`;
      throw new Error(message);
    }

    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateMe(data) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/updateMe`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!res.ok) {
      const message = ` ${res.statusText}: You can only update email and password`;
      throw new Error(message);
    }

    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}

export async function updatePassword(password) {
  console.log(password);
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/updateMyPassword`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
        credentials: "include",
      }
    );

    if (!res.ok) {
      const message = ` ${res.statusText}`;
      throw new Error(message);
    }

    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}
