interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

interface IDish {
    id: string,
    name: string
}

interface IDay {
    id: string,
    dishes : IDish[]
}

interface IWeek {
    id: string
    from : Date,
    to : Date,
}

type ApiOrganizerType = {
    days : IDay[]
}

type TodoProps = {
    todo: ITodo
}

type ApiDataType = {
    token : IToken
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
  }


  