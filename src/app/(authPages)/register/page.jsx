'use client'

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const username = form.username.value
        const password = form.password.value
        const user = {username, password}
        console.log(user);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form onSubmit={handleRegister} className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 space-y-6">
                <h2 className="text-2xl font-bold text-center text-white">Register</h2>

                {/* Username */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">Username</label>
                    <input name="username"
                        type="text" 
                        placeholder="Enter your username"
                        className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">Password</label>
                    <input name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Register;