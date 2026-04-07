import { subtitleStyle, titleStyle } from '@/common/components/title/title.css';

interface TitlePropTypes {
  subtitle: string;
  title: string;
}

const Title = ({ subtitle, title }: TitlePropTypes) => {
  return (
    <div>
      <h3 className={subtitleStyle}>{subtitle}</h3>
      <h1 className={titleStyle}>{title}</h1>
    </div>
  );
};

export default Title;
