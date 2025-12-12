import { socialLinks } from "../../../../utils/constants"
import "./index.scss"

const SocialLink = ({ href, icon }: { href: string, icon: string }) => {
    return (
        <a href={href} target="_blank">
            <img style={{ width: 20, height: 20 }} src={icon} className="mx-auto text-white" alt="Logo" />
        </a>
    )
}

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>
                    Created & Developed by <a className="font-bricolage" target="_blank" href="https://devyoussefshaaban.vercel.app">Youssef Shaaban</a>
                </p>
            </div>
            <div className="container links">
                {socialLinks.map((link, index) => (
                    <SocialLink key={index} href={link.href} icon={link.icon} />
                ))}
            </div>
        </footer>
    )
}

export default Footer