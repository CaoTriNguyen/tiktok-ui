import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import style from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <PopperWrapper className={cx('menu-popper')}>
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </div>
        </PopperWrapper>
    );

    //Reset to first menu
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            animation={false}
            delay={[0, 200]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHidden={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
