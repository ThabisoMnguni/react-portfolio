import './Footer.css'

export function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <div className='foot'>
            <p>&copy; {currentYear} Thabiso Mnguni. All rights reserved. Built with React & </p>

            
            <p>❤️</p>
        </div>
    )
}