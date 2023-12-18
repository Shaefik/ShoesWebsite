import React, { useContext } from 'react';
import MyContext from './MyContext';

function ChildComponent() {
    const { userData } = useContext(MyContext);
    console.log(userData)

    return (
        <div>
            <br />
            <table id='customers'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Item Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user,index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.category}</td>
                                <td>{user.price}</td>
                                <td>{user.item_description}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>

        </div>
    );
}

export default ChildComponent;
