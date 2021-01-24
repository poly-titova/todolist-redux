import { ADD_TASK } from '../constants';

export default addTast = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});
