import { IoIosSend } from 'react-icons/io';
import './Book.css';

const Book = () => {
    
    return (
        <div className="container sticky mt-[10vh] z-10">
        <div className="card">
            <div className="card-image">	
                <h2 className="card-heading">
                    Contact Us
                    <small>Book a photoshoot</small>
                </h2>
            </div>
            <form className="card-form">
                <div className="input">
                    <input type="text" className="input-field" value="Alexander Parkinson" />
                    <label className="input-label">Name</label>
                </div>
                 <div className="input">
                    <input type="text" className="input-field" value="vlockn@gmail.com" />
                    <label className="input-label">Email</label>
                </div>
                <div className="input">
                    <input type="tel" className="input-field" />
                    <label className="input-label">Phone Number</label>
                </div>

                <div className="input">
                    <textarea className="input-field"></textarea>
                    <label className="input-label">Message</label>
                </div>
                <div className="action">
                    <button className="action-button">Send <IoIosSend className='inline ml-2 text-3xl' /> </button>
                </div>
            </form>
        </div>
</div>
    );
}


export default Book;