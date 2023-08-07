import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchsServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSeachResult] = useState([]);
    const [forcus, setForcus] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSeachResult([]);
            return;
        }

        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSeachResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchsServices.search(debounced);
            setSeachResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

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
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={forcus && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
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
                            {!loading && (
                                <FontAwesomeIcon
                                    className={cx('clear')}
                                    icon={faCircleXmark}
                                    onClick={handleClearInput}
                                />
                            )}
                            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        </button>
                    )}
                    <button className={cx('search-btn')}>
                        <SearchIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
