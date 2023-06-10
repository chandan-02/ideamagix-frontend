import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '../api/auth';

const Login = () => {
  const navigate = useHistory();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleSignIn = async () => {
    login(userData).then(res => {
      const loggedUser = res.data;
      localStorage.setItem('token', loggedUser?.meta?.jwt)
      localStorage.setItem('user', JSON.stringify(loggedUser?.data))
      navigate.push('/');
      setLoading(false);

    }).catch(er => {
      setLoading(false);
    })
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://www.ideamagix.com/assets/images/ideamagix-logo-g.png" alt="Idea Magix" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
          <div className="mt-2">
            <input type="text" required placeholder="admin or ins" className="input input-bordered w-full"
              onChange={e => setUserData({ ...userData, username: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="mt-2">
            <input type="password" required value={userData.password} placeholder="Abcd@1234" className="input input-bordered w-full"
              onChange={e => setUserData({ ...userData, password: e.target.value })}
            />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-primary w-full" onClick={handleSignIn}>
            {
              !loading ? "Sign in" : <span className="loading loading-infinity loading-md"></span>
            }

          </button>

        </div>
      </div>
    </div >

  )
}

export default Login;