export default function AddAdminForm() {
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center flex-col justify-between md:flex-row">
            <div className="flex justify-between">
              <div className="flex flex-col mb-4 mx-4">
                <label className="mb-2 font-bold text-lg " htmlFor="email">
                  Email
                </label>
                <input
                  required
                  className="border focus:border-pink-500 text-[#f87171] border-pink-300 focus:outline-none focus:ring focus:ring-pink-500 py-2 px-3 bg-transparent rounded-lg"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg " htmlFor="password">
                  Password
                </label>
                <input
                  required
                  className="border focus:border-pink-500 text-[#f87171] border-pink-300 focus:outline-none focus:ring focus:ring-pink-500 py-2 px-3 bg-transparent rounded-lg"
                  type="text"
                  name="password"
                  id="password"
                />
              </div>
            </div>
            <div>
              <button
                className="block bg-teal-400 hover:bg-teal-600 text-white  text-lg mx-auto p-4 rounded"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
