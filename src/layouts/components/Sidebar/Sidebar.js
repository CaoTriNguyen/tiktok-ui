import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon width="1.4rem" height="1.4rem" />}
                    iconActive={<HomeActiveIcon width="1.4rem" height="1.4rem" />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon width="1.4rem" height="1.4rem" />}
                    iconActive={<UserGroupActiveIcon width="1.4rem" height="1.4rem" />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon width="1.4rem" height="1.4rem" />}
                    iconActive={<LiveActiveIcon width="1.4rem" height="1.4rem" />}
                />
            </Menu>

            <SuggestedAccounts label="Suggested Accounts" />
            <SuggestedAccounts label="Following Accounts" />
        </aside>
    );
}

export default Sidebar;
