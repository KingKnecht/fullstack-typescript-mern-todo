import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:4000'

export const getDays = async (from: Date, to: Date): Promise<AxiosResponse<ApiOrganizerType>> => {
  try {
    const weeks: AxiosResponse<ApiOrganizerType> = await axios.get(
      baseUrl + '/organizer/get-days',
      { params: { from: from, to: to } }
    )
    return weeks
  } catch (error) {
    throw new Error(error as any)
  }
}

export const getPlannedDishes = async (date: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const plannedDishes: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/get-planned-dishes',
      //dd-mm-yyyy
      { params: { date: date } }
    )
    return plannedDishes
  } catch (error) {
    throw new Error(error as any)
  }
}

export const getDishes = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const dishes: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/get-dishes',
    )
    return dishes
  } catch (error) {
    throw new Error(error as any)
  }
}

export const addPlannedDish = async (
formData: IDish
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const dish: Omit<IDish, '_id'> = {
      name: formData.name,
      plannedOn : formData.plannedOn
    }
    const savePlannedDish: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/add-planned-dish',
      dish
    )

    return savePlannedDish
  } catch (error) {
    throw new Error(error as any)
  }
}


export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/todos'
    )
    return todos
  } catch (error) {
    throw new Error(error as any)
  }
}

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, '_id'> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/add-todo',
      todo
    )

    return saveTodo
  } catch (error) {
    throw new Error(error as any)
  }
}

export const updateTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, 'status'> = {
      status: true,
    }
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    )
    return updatedTodo
  } catch (error) {
    throw new Error(error as any)
  }
}

export const deleteTodo = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${_id}`
    )
    return deletedTodo
  } catch (error) {
    throw new Error(error as any)
  }
}
