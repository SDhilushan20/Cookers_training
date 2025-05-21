import './welcome.css';

function Welcome() {
    return (
        <div className="welcome-container">
            <h1>Welcome to Our Website!</h1>
            <p>We're glad to have you here.</p>
            <ul>
                <li><a href="#features">Explore Features</a></li>
                <li><a href="#about">Learn About Us</a></li>
                <li><a href="#contact">Get in Touch</a></li>
            </ul>
            <button>Get Started</button>
        </div>
    );
}

export default Welcome;