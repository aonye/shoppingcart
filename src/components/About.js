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

const makeIcons = (obj) => {
    let arr = [];
    const link = 'https://github.com/aonye';
    for (let k in obj) {
        arr.push(
            <a key={k} href={link}>
                <img className='SMImg' src={obj[k]} alt='' />
            </a>
        );
    }
    return arr.map(i => i);
}

export default About;
