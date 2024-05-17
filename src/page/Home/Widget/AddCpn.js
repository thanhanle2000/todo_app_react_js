import React from 'react';

class AddCpn extends React.Component {
    // KHAI BÁO STATE
    state = { title: '', salary: '' }

    // CHANGE TITLE JOB
    handleChangeTitleJob = (event) => this?.setState({ title: event?.target?.value });

    // CHANGE LAST NAME
    handleChangeLastName = (event) => this?.setState({ salary: event?.target?.value });

    // SUBMIT
    handleSubmit = (event) => {
        event?.preventDefault()
        if (!this.state.title || !this.state.salary) return;

        this?.props?.addNewJob({
            id: Math?.floor(Math?.random() * 1001),
            title: this?.state?.title,
            salary: this?.state?.salary
        })

        // SET LẠI STATE
        this?.setState({ title: '', salary: '' })
    }

    render() {
        return (
            <form>
                <div className='flex flex-row'>
                    <label htmlFor="fname mr-[5px]">Job's title:</label><br />
                    <input
                        type="text"
                        value={this?.state?.title}
                        className='ml-[10px] rounded-[5px] pl-[5px] text-black'
                        onChange={(event) => this?.handleChangeTitleJob(event)}
                    />
                </div>
                <br />
                <div className='flex flex-row'>
                    <label htmlFor="lname mr-[5px]">Salary:</label><br />
                    <input
                        type="text"
                        className='ml-[10px] rounded-[5px] pl-[5px] text-black'
                        value={this?.state?.salary}
                        onChange={(event) => this?.handleChangeLastName(event)}

                    />
                </div>
                <br /><br />
                <button type="submit" className='text-black bg-white border-blue-500 p-[2px] rounded-[5px] w-[120px] mb-[10px]' onClick={(event) => this?.handleSubmit(event)} >Submit</button>
            </form>
        )
    }

}

export default AddCpn;