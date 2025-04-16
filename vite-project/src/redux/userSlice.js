import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Acción para iniciar sesión
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch("https://prueba-react-tailwind.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      const data = await response.json();
      localStorage.setItem("userToken", data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Acción para registrar usuario
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await fetch("https://prueba-react-tailwind.onrender.com/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al registrarse");
      }

      const data = await response.json();
      localStorage.setItem("userToken", data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Acción para obtener el perfil del usuario
export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) throw new Error("No se encontró el token. Por favor, inicia sesión.");

      const response = await fetch("https://prueba-react-tailwind.onrender.com/api/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al obtener el perfil");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Forzar logout si el token es inválido
      if (error.message === "Token inválido o expirado") {
        thunkAPI.dispatch(logout());
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Acción para actualizar el perfil del usuario
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (updatedData, thunkAPI) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await fetch("https://prueba-react-tailwind.onrender.com/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al actualizar el perfil");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Manejo del login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Manejo del fetchProfile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        if (!state.userInfo) {
          state.userInfo = action.payload;
        }
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Manejo del updateProfile
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = { ...state.userInfo, ...action.payload };
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});




export const { logout } = userSlice.actions;
export default userSlice.reducer;
