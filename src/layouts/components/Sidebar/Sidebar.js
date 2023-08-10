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

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon width="1.5rem" height="1.5rem" />}
                    iconActive={<HomeActiveIcon width="1.5rem" height="1.5rem" />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon width="1.5rem" height="1.5rem" />}
                    iconActive={<UserGroupActiveIcon width="1.5rem" height="1.5rem" />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon width="1.5rem" height="1.5rem" />}
                    iconActive={<LiveActiveIcon width="1.5rem" height="1.5rem" />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
