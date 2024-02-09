import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50">
      {userData && (
        <section className="bg-white rounded-lg w-[480px] overflow-hidden shadow-xl">
          <div className="container py-1 h-full">
            <div className="flex h-full">
              <div className="md:col-9 lg:col-7 xl:col-5">
                <div className="card rounded-lg">
                  <div className="card-body p-6">
                    <div className="flex text-black gap-8">
                      <div className="flex-shrink-0">
                        <img
                          className="img-fluid w-52 rounded-lg"
                          src={userData.picture.large}
                          alt=""
                        />
                      </div>
                      <div className="flex-grow-1 ms-3 mt-3">
                        <h2 className="mb-1 text-xl text-black font-bold">
                          {userData.name.first} {userData.name.last}
                        </h2>
                        <p className="mb-2 pb-1 text-slate-500 font-medium text-lg">
                          {userData.gender}
                        </p>
                        <p className="mb-2 pb-1 text-gray-700">
                          {userData.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default App;
