import React from 'react';

interface IconProps {
  icon: string;
  url: string;
  altText: string;
  text?: string;
}

const Icon: React.FC<IconProps> = ({ icon, url, altText, text }) => {
  return (
    <span style={{margin: "5px"}}>
      <a href={url} target='_blank' rel="noopener noreferrer" style={{verticalAlign: 'center'}}>
        <img src={icon} style={{height: '20px', }} alt={`${altText} icon`} />
        { text && <span style={{}}> {text}</span>}
      </a>
    </span>
  );
};

export default Icon;
