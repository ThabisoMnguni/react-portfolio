import './Skills.css';

export const Skills = ({ skills }) => {
    const sk = skills.map((skill, index) => {
        return (
            <>
                <div className="skill">
                    <div className="skill-svg">
                        {skill.svg}
                    </div>

                    <div className="skill-label">
                        <p>{skill.skillName}</p>
                    </div>

                    <div>
                        <ul className="skill-spec" key={index}>
                            {skill.skillSpec.map((spec, index1) => {
                                return <li key={index1}>{spec}</li>
                            })}
                        </ul>
                    </div>
                </div>


            </>
        )
    })

    return (
        <>
            <div className='skills'>
                <p className='head'>Skills & Expertise</p>
                <p className='subhead'>A comprehensive toolkit for bringing ideas to life </p>
            </div>

            <div className="list-of-skills">
                {sk}
            </div>
        </>

    )
}