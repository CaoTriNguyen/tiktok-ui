import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://th.bing.com/th/id/OIP.oCLuRGZOBZsCyWW9bhMi5AAAAA?pid=ImgDet&rs=1"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <div className={cx('nickname')}>
                    <h4>nguyenvana</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <div className={cx('name')}>nguyen van a</div>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M</strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
