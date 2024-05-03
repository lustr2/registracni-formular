import { useState } from "react";

interface Osoba {
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
}

export const Registration = () => {
    const [user, setUser] = useState<Osoba>({
        username: 'Petr', 
        email:'', 
        password:'', 
        passwordConfirm:''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user,
            [e.target.name]: e.target.value          
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <>
        <div className="formular">
            <form onSubmit={handleSubmit}>
                <table border={0}>
                    <tr>
                      <td>
                        <label>Email:</label>
                      </td>
                      <td>
                <input  type="email" 
                        name="email" 
//                        value={user.email==='' ? 'Email Address': user.email} 
                        value={user.email}
                        onChange={handleChange}>
                </input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                <label>UserName:</label>
                </td>
                      <td>
                <input  type="text" 
                        name="username" 
//                        value={user.email===''? 'User Name' : user.email.substring(0, user.email.indexOf('@'))} 
                        value={(user.username==='' && 
                               user.email.indexOf('@') > -1) ?
                               setUser({...user, username: '' + user.email.substring(0, user.email.indexOf('@'))}) :
                               user.username} 
                        onChange={handleChange}>
                </input>
                </td>
                    </tr>
                    <tr>
                      <td>
                <label>Heslo:</label>
                </td>
                      <td>
                <input  type="password" 
                        name="password" 
                        value={user.password===''? '' : user.password} 
                        onChange={handleChange}>
                </input>
                </td>
                    </tr>
                    <tr>
                      <td>
                <label>Heslo znovu:</label>
                </td>
                      <td>
                <input  type="password"
                        name="passwordConfirm" 
                        value={user.passwordConfirm==='' ? '' : user.passwordConfirm} 
                        onChange={handleChange}>
                </input>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>

                <center><button type="submit">Register</button></center>
                    </td>
                    </tr>
                </table>
            </form>
        </div>
        </>
    );
}