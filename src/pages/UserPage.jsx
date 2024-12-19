import { useEffect, useState } from "react";
import { authUser } from "../services/authService";

const UserPage = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await authUser();
    if (response.data?.data) {
      setUser(response.data.data);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="py-28 px-28">
        <div className="px-4 sm:px-0">
          <h3 className="text-2xl font-semibold text-gray-900">
            User Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user?.name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user?.email}
              </dd>
            </div>
          
          </dl>
        </div>
      </div>
    </>
  );
};

export default UserPage;
