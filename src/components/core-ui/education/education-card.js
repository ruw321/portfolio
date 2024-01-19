import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import eduImgBlack from '../../../assets/svg/education/eduImgBlack.svg';
import eduImgWhite from '../../../assets/svg/education/eduImgWhite.svg';
import { ThemeContext } from '../../../contexts/theme-context';
import './education.css';

function EducationCard({ id, institution, link, logo, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.quaternary,
        },
    }));

    const classes = useStyles();

    const finalStyle = (logo === null || logo === '') ? { backgroundColor: theme.primary } : {};
    const finalImgSrc = (logo === null || logo === '') ? (theme.type === 'light' ? eduImgBlack : eduImgWhite) : logo;
    const finalImgStyle = (logo === null || logo === '') ? { width: '40px' } : { width: '70px' };

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={finalStyle}>
                    <img style={finalImgStyle} src={finalImgSrc} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                    <h4 style={{ color: theme.tertiary }}>{course}</h4>
                    <a style={{ color: theme.tertiary }} href={link}>{institution}</a>
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard
