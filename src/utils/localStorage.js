// Save Redux state to localStorage
export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("maintenance-app-state", serialized);
  } catch (e) {
    console.error("Error saving state:", e);
  }
};

// Load Redux state from localStorage
export const loadState = () => {
  try {
    const serialized = localStorage.getItem("maintenance-app-state");
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    console.error("Error loading state:", e);
    return undefined;
  }
};
