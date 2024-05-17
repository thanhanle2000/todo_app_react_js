import React from 'react';
import '../../core/styles/scss/Todos.scss';
import AddTodo from './AddTodo';
import { toastSuccess } from '../../untils/helper';

class ListTodo extends React.Component {
    // KHAI BÁO INIT STATE
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    // ADD NEW TODO
    addNewTodo = (todo) => {
        // SET LẠI STATE MỚI CHO LIST TODO
        this?.setState({ listTodos: [...this?.state?.listTodos, todo], })
        toastSuccess("Wow so easy!")
    }

    // DELETE TODO
    handleDeleteTodo = (todo) => {
        // KHAI BÁO CURRENT TODO
        let currentTodos = this?.state?.listTodos;

        // FILTERS RA ITEM PHÙ HỢP VỚI ĐIỀU KIỆN BÊN DƯỚI
        currentTodos = currentTodos?.filter(item => item?.id !== todo?.id);

        // SET LẠI STATE CHO LIST TODO
        this?.setState({ listTodos: currentTodos })

        toastSuccess("Delele succeed!")
    }

    // EDIT TODO
    handleEditTodo = (todo) => {
        // KHAI BÁO VALUE
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // KIỂM TRA ĐIỀU KIỆN TRƯỚC KHI SAVE
        if (isEmptyObj === false && editTodo?.id === todo?.id) {
            // KHAI BÁO VALUE
            let listTodosCopy = [...listTodos];

            // LẤY RA ITEM VỚI ĐIỀU KIỆN == ID
            let objIndex = listTodosCopy?.findIndex((item => item?.id === todo?.id));

            listTodosCopy[objIndex].title = editTodo?.title;

            this?.setState({ listTodos: listTodosCopy, editTodo: {} });

            toastSuccess("Update todo succeed!");

            return;
        }

        // SET LẠI STATE
        this?.setState({ editTodo: todo })
    }

    // CHANGE EDIT TODO
    handleOnchangeEditTodo = (event) => {
        // KHAI BÁO VALUE 
        let editTodoCopy = { ...this.state.editTodo };

        editTodoCopy.title = event?.target?.value;

        // SET LẠI STATE
        this?.setState({ editTodo: editTodoCopy })
    }

    render() {
        // KHAI BÁO VALUE
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object?.keys(editTodo)?.length === 0;

        return (
            <>
                <p>TODO APP EXAMPLE</p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this?.addNewTodo} />
                    <div className="list-todo-content !mt-[10px]">
                        {listTodos && listTodos?.length > 0 &&
                            listTodos?.map((item, index) => {
                                return (
                                    <div className="my-[10px] flex flex-row w-[800px] gap-[10px]" key={item?.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item?.title} </span>
                                            :
                                            <>
                                                {editTodo?.id === item?.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            className='text-black pl-[5px]'
                                                            value={editTodo?.title}
                                                            onChange={(event) => this?.handleOnchangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item?.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button className="text-black bg-white border-blue-500 px-[10px] ml-[10px] rounded-[5px]" onClick={() => this?.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo?.id === item?.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button className="text-black bg-white !border-red-500 px-[10px] ml-[10px] rounded-[5px]" onClick={() => this?.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default (ListTodo);