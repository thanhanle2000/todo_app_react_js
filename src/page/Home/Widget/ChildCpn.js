import React from 'react';

class ChildCpn extends React.Component {
    // KHAI BÁO STATE
    state = { showJobs: false }

    // SHOW/ HIDE
    handleShowHide = () => this?.setState({ showJobs: !this?.state?.showJobs });

    // DELETE 
    handleOnclickDelete = (job) => this?.props?.deleteAJob(job)

    render() {
        // KHAI BÁO VALUE
        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='text-black bg-white border-blue-500 p-[2px] rounded-[5px] w-[120px]'
                            onClick={() => this?.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, _) => {
                                    return (
                                        <div key={item?.id}>
                                            {item?.title} - {item?.salary}
                                            <></> <span onClick={() => this?.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className='text-black bg-white border-blue-500 p-[2px] rounded-[5px] w-[120px] mt-[10px]' onClick={() => this?.handleShowHide()}>Hide</button>
                    </>
                }
            </>
        )

    }
}

export default ChildCpn;
