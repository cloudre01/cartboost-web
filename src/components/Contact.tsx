export default function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    fetch(
      "https://script.google.com/macros/s/AKfycbzjYCD09bP9xUsaBkN5gCZeSwfBsc8QDrcQfAstfihRr4Lw47L4CcvCdH5vssir_cuPpg/exec",
      {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ email, name, message }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Thank you for your message. We will be in touch!");
      })
      .catch((error) => console.error(error));

    //clear form
    (event.target as HTMLFormElement).reset();
  }

  return (
    <div className="text-white container mx-auto px-6 py-24 text-center">
      <h2 className="text-5xl font-bold leading-tight mb-4">Contact Us</h2>
      <p className="text-xl leading-normal mb-2">
        We'd love to hear from you. Please reach out to us using the form below.
      </p>
      <section className="container px-6 py-12">
        <div className="max-w-lg mx-auto">
          <div className="bg-white text-gray-800 rounded-lg">
            <form className="p-8 text-left" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-bold w-full" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
