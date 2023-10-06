export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput"></label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formMessage">Message</label>
          <textarea
            className="form-control"
            id="formMessage"
            rows="3"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
