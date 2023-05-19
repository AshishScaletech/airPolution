import React from 'react';

interface IProps { }

const Layout: React.PropsWithChildren<IProps> = (props: React.PropsWithChildren) => {
    return (
        <div className='main'>
            <header role="banner">
                <nav role="navigation">
                    <h1>
                        <a href="#">FACE</a>
                    </h1>
                    <ul className="nav-ul">
                        <li>
                            <a href="https://codepen.io/zurainzm/full/LxyZEY/">Home</a>
                        </li>
                        <li>
                            <a
                                href="        https://codepen.io/zurainzm/full/vgmKGK/
"
                            >
                                Air &nbsp; Pollution
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/zurainzm/full/oBWzdq">
                                Water Pollution
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/zurainzm/full/XpRjZp">
                                Land Pollution
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/zurainzm/full/EZmNNL/">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </header>
            {props.children}
        </div>
    );
};

export default Layout;
