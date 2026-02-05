import './Contact.css'

export const Contact = ({ contacts}) =>{
    const c = contacts.map((contact, index)=>{
        return(
            <div className='comm'>
            
                <div key={index} className="icon">
                    {contact.svg}
                </div>

                <div className="skill-label">
                    <p>{contact.method}</p>
                </div>

                <div className="comm-detail">
                    {contact.detail}
                </div>
            
            </div>
        )
    })
    
    return(
        <>
            <div className="skills">
                <p className='head'>Get In Touch</p>
                <p className='subhead'>Have a project in mind? Let's work together to create something amazing.</p>
            </div>


            <div className='comm-method'>
                {c}
            </div>
        </>
    )
}