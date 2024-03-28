import ActionAreaCard from './ActionCard';
import ResponsiveAppBar from './ResponsiveAppBar';
import { LinkedIn } from '@mui/icons-material';
import linkedInIcon from '../assets/LI-In-Bug.png'

export const About = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>About Me</h1>
      <p>Welcome to my portfolio! Here are some links to my common platforms:</p>
      <ActionAreaCard imgPath={linkedInIcon} title='LinkedIn' description='Lorem Ipsum' />
      <LinkedIn />
    </div>
  );
};
