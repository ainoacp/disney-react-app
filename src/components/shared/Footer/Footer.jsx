import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="social">
                <p>Síguenos en:</p>
                <div className="links">
                    <p>Twitter</p>
                    <span>|</span>
                    <p>Facebook</p>
                    <span>|</span>
                    <p>Instagram</p>
                    <span>|</span>
                    <p>TikTok</p>
                </div>
            </div>
            <p className="copyright">Copyright Disney © 2023</p>
        </footer>
    )
}