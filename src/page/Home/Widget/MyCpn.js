import React from 'react';
import ChildCpn from './ChildCpn';
import AddCpn from './AddCpn';

class MyCpn extends React.Component {
    // KHAI BÁO STATE
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    }

    // ADD NEW JOB
    addNewJob = (job) => this?.setState({ arrJobs: [...this?.state?.arrJobs, job] });

    deleteAJob = (job) => {
        // KHAI BÁO VALUE
        let currenJobs = this.state.arrJobs;

        // FILTERS
        currenJobs = currenJobs?.filter(item => item?.id !== job?.id);

        this?.setState({ arrJobs: currenJobs })
    }

    componentDidUpdate(_, prevState) { }

    componentDidMount() { }

    render() {
        return (
            <>
                <AddCpn addNewJob={this?.addNewJob} />
                <ChildCpn arrJobs={this?.state?.arrJobs} deleteAJob={this?.deleteAJob} />
            </>
        )
    }
}

export default MyCpn;
