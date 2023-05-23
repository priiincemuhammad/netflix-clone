import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignupUserMutation } from "../services/appApi";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // user profile image handling
  const [userPhoto, setUserPhoto] = useState(null);
  const [photoPrevew, setPhotoPrevew] = useState(null);
  const [uploadingPhoto, setUuploadingPhoto] = useState(false);

  const [signupUser, { isLoading, isError }] = useSignupUserMutation();

  // image validation
  const validateUserphoto = (e) => {
    const file = e.target.files[0];
    if (file.size >= 2097152 * 5) {
      return alert("Max file size is 1mb");
    } else {
      setUserPhoto(file);
      setPhotoPrevew(URL.createObjectURL(file));
    }
  };

  // image upopad to cloudinary
  const uploadPhoto = async () => {
    const data = new FormData();
    data.append("file", userPhoto);
    data.append("upload_preset", "tgu8ifiq");
    try {
      setUuploadingPhoto(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/princemuhammad/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setUuploadingPhoto(false);
      return urlData.url;
    } catch (error) {
      setUuploadingPhoto(false);
      console.log(error);
    }
  };

  // form handling
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!userPhoto) return alert("Please upload your profile picture");
    const photo = await uploadPhoto(userPhoto);
    console.log(photo);
    signupUser({ username, email, password, photo }).then((data) => {
      if (data) {
        navigate("/signin");
      }
    });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sign up your account
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Get your Real-time chat account now.
        </p>
      </div>

      <form onSubmit={handleSignup} className="mx-auto mt-10 max-w-xl sm:mt-8">
        {/* upload image */}
        <div className="bg-white shadow-md flex justify-evenly py-3 rounded-lg items-center space-x-6 mb-6">
          <div className="shrink-0">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src={photoPrevew || `https://bit.ly/43anUgb`}
              alt="Current profile photo"
            />
          </div>
          <label className="block cursor-pointer">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              onChange={validateUserphoto}
              accept="image/png, image/jpeg"
              className="block w-full text-sm text-slate-500 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
            file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          {/* full name */}
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Full name
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* password */}
          <div className="sm:col-span-2">
            <label
              htmlFor="Password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={handleSignup}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </div>
            ) : (
              "Sign up"
            )}
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to={"/signin"}
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Signin
        </Link>
      </p>
    </div>
  );
}
