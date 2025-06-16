const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('Subscribed successfully!');
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Abone ol ve %10 indirim kazan!
      </p>
      <p className="text-gray-500 mt-3">
        Kampanya ve yeniliklerden haberdar olmak için abone olun.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="E-mail adresinizi girin"
          className="w-full sm:flex-1 outline-none "
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 "
        >
          Abone Ol
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
