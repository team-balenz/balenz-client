import { subtitleStyle, titleStyle } from '@/common/components/TItle/title.css';

interface TitleProps {
  subtitle: string;
  title: string;
}

const Title = ({ subtitle, title }: TitleProps) => {
  return (
    <div>
      <h3 className={subtitleStyle}>{subtitle}</h3>
      <h1 className={titleStyle}>{title}</h1>
    </div>
  );
};

export default Title;
