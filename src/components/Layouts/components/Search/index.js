import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState([]);
    const [searchResult, setSeachResult] = useState([]);
    const [forcus, setForcus] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSeachResult([1, 1, 1]);
        }, 0);
    }, []);

    const handleClearInput = () => {
        setSearchValue('');
        setSeachResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setForcus(false);
    };

    const handleShowResult = () => {
        setForcus(true);
    };

    return (
        <HeadlessTippy
            interactive
            visible={forcus && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={handleShowResult}
                />
                {!!searchValue && (
                    <button className={cx('status')}>
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} onClick={handleClearInput} />
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
