export const loginRequest = async (user) => {
  try {
    const response = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include", // Incluye las cookies en la solicitud
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al realizar la solicitud de registro:", error.message);
    throw error;
  }
};

export const verifyTokenRequest = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/verify`, {
      method: "GET",
      credentials: "include", // Incluye las cookies en la solicitud
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error.message);
    throw error;
  }
};
