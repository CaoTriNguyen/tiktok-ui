import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 12]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://th.bing.com/th/id/OIP.oCLuRGZOBZsCyWW9bhMi5AAAAA?pid=ImgDet&rs=1"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <div className={cx('nickname')}>
                            <h4>nguyenvana</h4>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </div>
                        <div className={cx('name')}>nguyen van a</div>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
