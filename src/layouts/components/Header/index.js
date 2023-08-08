import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Bottom';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, UploadIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                {/* Search box */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 0]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon> */}
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 0]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> */}
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 0]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> */}
                                    <span className={cx('message')}>24</span>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text onClick={() => {}}>
                                Upload
                            </Button>
                            <Button primary className={cx('custom-login')} onClick={() => {}}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://th.bing.com/th/id/OIP.oCLuRGZOBZsCyWW9bhMi5AAAAA?pid=ImgDet&rs=1"
                                alt="Nguyen Van A"
                                fallback="https://th.bing.com/th/id/R.396f180c451e7308aa7af9df23ee8ccd?rik=G3KqovAnYTn%2fxQ&pid=ImgRaw&r=0"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
