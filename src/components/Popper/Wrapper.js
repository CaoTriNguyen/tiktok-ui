import classNames from 'classnames/bind';
import style from './Popper.module.scss';

const cx = classNames.bind(style);

function Wrapper({ children, className }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content', className)}>{children}</div>
        </div>
    );
}

export default Wrapper;
