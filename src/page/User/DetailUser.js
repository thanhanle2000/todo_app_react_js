import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

class DetailUser extends React.Component {
    // KHAI BÁO INIT STATE
    state = { user: {} }

    // GỌI STATE HIỆN TẠI = useEffect ở React Typescript
    async componentDidMount() {
        const { id } = this.props.params;
        if (id) {
            // RESPONSE
            let res = await axios.get(`https://reqres.in/api/users/${id}`);

            this.setState({ user: res && res.data && res.data.data ? res.data.data : {} });
        }
    }

    // BACK LẠI TRANG TRƯỚC
    handleBackButton = () => this.props.navigate('/user')

    render() {
        // KHAI BÁO
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <>
                <div>Detail user: {this.props.params.id}</div>
                {isEmptyObj === false &&
                    <div className='flex flex-col gap-[10px] items-center'>
                        <div>User's name: {user.first_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <img className='w-[150px] rounded-[10px]' src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                        <button className='text-black bg-white border-blue-500 px-[10px] mt-[20px] ml-[10px] rounded-[5px]' type="button" onClick={this.handleBackButton}>Back</button>
                    </div>
                }
            </>
        )
    }
}

// Wrapper component để truyền các giá trị từ hook vào class component
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        let navigate = useNavigate();
        return (
            <Component
                {...props}
                params={params}
                navigate={navigate}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter(DetailUser);
