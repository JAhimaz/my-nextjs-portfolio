import { CSSProperties, FC } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const IconsIndex = {
  Twitter: FaTwitter,
  Github: FaGithub,
  Linkedin: FaLinkedin,
};

const Index = {
  ...IconsIndex,
}

export type IconName = keyof typeof Index | "none";

type Props = {
  icon: IconName
  className?: string
  style?: CSSProperties
  onClick?: () => void;
}

export const Icon: FC<Props> = ({ icon, className, style, onClick }) => {
  if (icon == "none") {
    return null;
  }

  const Icon = Index[icon];
  return (
    <Icon className={className} style={style} onClick={onClick} />
  )
}
