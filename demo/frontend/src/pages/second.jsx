const Second = () => {
    return (
        <>
            <a className="back" href="/">&lt;Back</a>
            <div className="second">
                <div className="contact-form">
                    <form>
                        <label>Name</label>
                        <input type="text" className="name" placeholder="John Smith" />
                        <label>Email</label>
                        <input type="email" className="email" placeholder="JSmith@mail.com" />
                        <label>Phone #</label>
                        <input type="tel" className="phone" placeholder="(123)456-7890" />
                        <label>Website</label>
                        <input type="radio" className="click" />
                        <label>Portfolio</label>
                        <input type="radio" className="click" />
                        <label>App</label>
                        <input type="radio" className="click" />
                        <label>Description</label>
                        <textarea
                            className="desc"
                            placeholder="Short description of the type of industry"
                        />
                        <button className="send">Send</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Second;