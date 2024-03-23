import { useState } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);

    function getUsers() {
        axios.get("http://localhost:8080/users")
            .then(function (response) {
                setUsers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function createUser(event) {
        event.preventDefault();

        const data = {
            username: username,
            password: password,
            email: email
        }

        axios.post("http://localhost:8080/users", data)
            .then(function (response) {
                console.log(response);
                getUsers();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const [edit, setEdit] = useState(null);

    function updateUser(event) {
        event.preventDefault();

        const data = {
            username: username,
            password: password,
            email: email
        }

        axios.put("http://localhost:8080/users/" + edit.id, data)
            .then(function (response) {
                console.log(response);
                getUsers();
                setEdit(null);
            })
            .catch(function (error) {
                console.log(error);
            }
            );
    }

    return (
        <div className="App">
            <h1>Users</h1>
            {users && users.map((user) => (
                <div key={user.id}>
                    {user.username} - {user.email}
                    <button type="button" onClick={
                        () => {
                            setEdit(user);
                            setUsername(user.username);
                            setEmail(user.email);
                            setPassword(user.password);
                        }
                    }>Edit</button>
                    <button type="button" onClick={
                        () => {
                            axios.delete("http://localhost:8080/users/" + user.id)
                                .then(function () {
                                    getUsers();
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }
                    }>Delete</button>
                </div>
            ))
            }

            <button onClick={getUsers}>Load Users</button>

            {!edit &&
                <form onSubmit={createUser}>

                    <h1>Create User</h1>

                    <div>
                        <label>Username</label>
                        <input type="text" onChange={handleUsername} required />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" onChange={handlePassword} required />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" onChange={handleEmail} required />
                    </div>

                    <button type="submit">Save</button>
                </form>
            }

            {edit &&
                <form onSubmit={updateUser}>
                    <h1>Edit User</h1>

                    <div>
                        <label>Username</label>
                        <input type="text" onChange={handleUsername} value={username} required />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" onChange={handlePassword} value={password} required />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" onChange={handleEmail} value={email} required />
                    </div>

                    <button type="submit">Save</button>
                    <button type="button" onClick={
                        () => {
                            setEdit(null);
                        }
                    }>Cancel</button>
                </form>
            }
        </div>
    );

}

export default Users;