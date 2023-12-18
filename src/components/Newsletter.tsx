export default function Newsletter() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const email = data.get("email"); // Replace with your input name

    fetch(
      "https://script.google.com/macros/s/AKfycbyHTJ2YfAt5bZwYb2aBoHVO5dw_hFdsHwBD-AmbHFz47fKtcN82f43IwstM-wbAHeoUPQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ email: email }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Thank you for subscribing!");
      })
      .catch((error) => console.error(error));

    //clear form
    (event.target as HTMLFormElement).reset();
  }

  return (
    <section className="mx-auto max-w-lg p-6 bg-white rounded-xl shadow-md space-y-6 my-10">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Sign Up for Our Newsletter</h2>
        <p className="text-gray-500">
          Stay updated with our latest news and updates. Enter your email below.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="newsletter-email"
              className="text-left font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              name="email"
              id="newsletter-email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
}
