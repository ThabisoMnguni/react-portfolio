import './Skills.css';

export const Skills = () => {
    return (
        <>
            <div className='skills'>
                <p className='head'>Skills & Expertise</p>
                <p className='subhead'>A comprehensive toolkit for bringing ideas to life </p>
        
            </div>

            <div className="list-of-skills">
                <div className="skill">
                    <div className="skill-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml h-6 w-6 text-white" aria-hidden="true"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                    </div>

                    <div className="skill-label">
                        <p>Frontend Development</p>
                    </div>

                    <div>
                        <ul className="skill-spec">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>ASPX</li>
                        </ul>
                    </div>
                </div>

                
                <div className="skill">
                    <div className="skill-svg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database h-6 w-6 text-white" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                     </div>

                    <div className="skill-label">
                        <p>Backend Development</p>
                    </div>

                    <div>
                        <ul className="skill-spec">
                            <li>Node.js</li>
                            <li>Java</li>
                            <li>C#</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone h-6 w-6 text-white" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                    </div>

                    <div className="skill-label">
                        <p>Mobile Development</p>
                    </div>

                    <div>
                        <ul className="skill-spec">
                            <li>React Native</li>
                            <li>Flutter</li>
                            <li>Android</li>
                        </ul>
                    </div>
                </div>

            </div>
            </>

    )
}