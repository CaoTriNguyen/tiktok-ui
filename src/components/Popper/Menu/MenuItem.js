import classNames from 'classnames/bind';
import Button from '~/components/Bottom';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
