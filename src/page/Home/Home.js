import React from "react";
import Color from "../../core/Hoc/color";
import { connect } from 'react-redux';
import { CASE_REDUCERS } from "../../untils/constants";

class Home extends React.Component {
    // GỌI STATE HIỆN TẠI = useEffect ở React Typescript
    componentDidMount() { }

    // CREATE USER
    handleCreateUser = () => this?.props?.addUserRedux();

    // DELETE USER
    handleDeleteUser = (user) => this?.props?.deleteUserRedux(user);

    render() {
        // KHAI BÁO VALUE
        let listUsers = this?.props?.dataRedux;

        return (
            <>
                <div>
                    THÀNH AN - DEMO PROJECT TODO APP WITH REACT JS
                </div>
                <div>
                    {listUsers && listUsers?.length > 0 &&
                        listUsers?.map((item, index) => {
                            return (
                                <div key={item?.id}>
                                    {index + 1} - {item?.name}
                                    &nbsp; <span onClick={() => this?.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button className="text-black bg-white border-blue-500 p-[2px] mt-[10px] rounded-[5px]" onClick={() => this?.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

// MAP LẠI STATE VÀO PROPS
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

// BỎ ĐI STATE HIỆN TẠI CỦA PROPS
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: CASE_REDUCERS?.DELETE_USER, payload: userDelete }),
        addUserRedux: () => dispatch({ type: CASE_REDUCERS?.CREATE_USER }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
