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

export async function updateMe(formData) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/updateMe`, {
      method: "PATCH",

      body: formData,
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

export async function stripeApi(stripePromise, currentUser, tourId) {
  // If the user is logged in, make a request to get the checkout session
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`,
      {
        method: "GET",

        credentials: "include",
      }
    );

    const data = await response.json();
    if (data.status === "success") {
      // Redirect to Stripe checkout using the sessionId
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.session.id });
    } else {
      console.error("Failed to create Stripe session");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
