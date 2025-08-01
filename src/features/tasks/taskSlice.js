import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], // Each task: { id, title, description, assignedTo, status }
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare({ title, description, assignedTo }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            assignedTo,
            status: 'pending',
          },
        };
      },
    },
    markTaskCompleted(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.status = 'completed';
    },
  },
});

export const { addTask, markTaskCompleted } = taskSlice.actions;
export default taskSlice.reducer;
