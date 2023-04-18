import { styled, Box, Typography } from '@mui/material';
const Image = styled(Box)`
    width: 100%;
    background: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg) center/100% repeat-x #000;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Heading = styled(Typography)`
    font-size: 70px;
    font-family: cursive;
    color: black;
    line-height: 1
`;
const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;
const Banner = () => {
    
    return (
        <Image>
            <Heading>B &nbsp;&nbsp; L &nbsp;&nbsp; O &nbsp;&nbsp; G</Heading>
        </Image>
    )
}
export default Banner;