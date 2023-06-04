import { useNavigate, Navigate, useParams } from "react-router-dom";
import LogOutHeader from "./components/LogOutHeader";
import MiniFooter from "./components/MiniFooter";

import { useStateContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";

export default function MonCompt() {
    const { token, notification } = useStateContext();
    const navigat = useNavigate();
    if (!token) {
        return <Navigate to={"/login"} />;
    }

    let { id } = useParams();

    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setNotification } = useStateContext();
    const [user, setUser] = useState({
        id: null,
        name: "",
        email: "",
        passwordActual: "",
        password: "",
        password_confirmation: "",
    });

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get(`/users/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setUser(data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (user.id) {
            axiosClient
                .put(`/users/${user.id}`, user)
                .then(() => {
                    setNotification("User was successfully updated");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        } else {
            axiosClient
                .post("/users", user)
                .then(() => {
                    setNotification("User was successfully created");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }
    };

    return (
        <>
            <LogOutHeader />
            <form onSubmit={onSubmit}>
                <div class="grid grod-rows-2  gap-4 container m-16 lg:w-4/6 mx-auto mb-24">
                    <div class="flex-1 border-gray-100  border-2 rounded-1 ">
                        <div>
                            <h1 className="text-xl block font-bold leading-tight tracking-tight italic  text-green-500 md:text-2xl">
                                {notification}
                            </h1>
                        </div>
                        <div className=" mx-12 my-10">
                            <div className="flex justify-start">
                                <span>
                                    <svg
                                        class="h-8 w-8 mr-2 text-gray-500 "
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoiny="round"
                                    >
                                        {" "}
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </span>
                                <h1 className=" text-xl block font-bold leading-tight tracking-tight italic  text-gray-500 md:text-2xl">
                                    Courrier électronique d'accès
                                </h1>
                            </div>
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">
                                Courrier électronique :
                            </label>
                            <input
                                onChange={(ev) =>
                                    setUser({ ...user, email: ev.target.value })
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5"
                                type="email"
                                value={user.email}
                                name="email"
                                placeholder="Zohayr@gmail.com"
                            />
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">
                                Nom :
                            </label>
                            <input
                                onChange={(ev) =>
                                    setUser({ ...user, name: ev.target.value })
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5"
                                type="text"
                                value={user.name}
                                name="name"
                                id="name"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div class="flex-1 border-gray-100  border-2 rounded-lg   ">
                        <div className=" mx-12 my-10 ">
                            <div className="flex justify-start">
                                <svg
                                    class="h-8 w-8 mr-2  text-gray-500 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoiny="round"
                                        strokeWidth="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                <h1 className=" text-xl block font-bold leading-tight tracking-tight italic  text-gray-500 md:text-2xl">
                                    Modifier mot de passe
                                </h1>
                            </div>
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">
                                Mot de passe actual :
                            </label>
                            <input
                                onChange={(ev) =>
                                    setUser({
                                        ...user,
                                        passwordActual: ev.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5"
                                type="password"
                                name="passwordActual"
                            />
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">
                                Nouveau mot de passe :
                            </label>
                            <input
                                onChange={(ev) =>
                                    setUser({
                                        ...user,
                                        password: ev.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5"
                                type="password"
                                name="password"
                            />
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">
                                Veuiellez répéter Mot de passe :
                            </label>
                            <input
                                onChange={(ev) =>
                                    setUser({
                                        ...user,
                                        password_confirmation: ev.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5 mb-5"
                                type="password"
                                name="password_confirmation"
                            />
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex  "
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <MiniFooter />
        </>
    );
}
