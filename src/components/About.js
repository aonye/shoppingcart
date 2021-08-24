import { SMIcons } from "../images/Icons";

const About = () => {
    return (
        <div className='about'>
            <div>Check out our social media pages!!</div>
            <div>
                {makeIcons(SMIcons)}
            </div>
        </div>
    );
};

const makeIcons = (arr) => {
    return arr.map((item, index) => {
        let link = 'https://github.com/aonye';
        return (
            <a key={index} href={link}>
                <img className='SMImg' src={item} alt='' />
            </a>
        );
    });
}

export default About;
