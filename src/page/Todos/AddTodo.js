import React from 'react';
import { toastError } from '../../untils/helper';

class AddTodo extends React.Component {
    // KHAI BÁO STATE
    state = { title: '' }

    // HANDLE ON CHANGE TITLE
    handleOnChangeTitle = (event) => this?.setState({ title: event?.target?.value })

    // HANDLE ADD TODO
    handleAddTodo = () => {
        if (!this.state.title) {
            toastError("Missing title's Todo!")
            return;
        }

        // KHAI BÁO OBJECT TODO
        let todo = {
            id: Math?.floor(Math?.random() * 10000),
            title: this?.state?.title
        }

        this?.props?.addNewTodo(todo);
        this?.setState({ title: '' })
    }

    render() {
        // KHAI BÁO VALUE
        let { title } = this?.state;

        return (
            <div className="add-todo my-[20px]">
                <input className='rounded-[5px]' type="text" value={title}
                    onChange={(event) => this?.handleOnChangeTitle(event)}
                />
                <button type="button" className="text-black bg-white border-blue-500 px-[10px] ml-[10px] rounded-[5px]"
                    onClick={() => this?.handleAddTodo()}
                >Add</button>
            </div>
        )
    }

}

export default AddTodo;