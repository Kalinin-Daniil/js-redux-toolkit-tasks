const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const addDate = (store) => (next) => (action) => {
  // BEGIN (write your solution here)
  if (action.type === "TASK_ADD") {
    const { task } = action.payload;

    const today = new Date();
    const formattedDate = today.toLocaleDateString('ru-RU');

    task.text = `Задача на ${formattedDate}: ${task.text}`;

    action.payload = { task };
  }

  return next(action);
  // END
};

export default { logger, addDate };