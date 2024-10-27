
const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a href="#" className="link link-hover">Branding</a>
                <a href="#" className="link link-hover">Design</a>
                <a href="#" className="link link-hover">Marketing</a>
                <a href="#" className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a href="#" className="link link-hover">About us</a>
                <a href="#" className="link link-hover">Contact</a>
                <a href="#" className="link link-hover">Jobs</a>
                <a href="#" className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a href="#" className="link link-hover">Terms of use</a>
                <a href="#" className="link link-hover">Privacy policy</a>
                <a href="#" className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;