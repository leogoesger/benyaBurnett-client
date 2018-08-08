import * as React from "react";

import { Image, Logo, NavItems, Direction } from "./";
import { Colors } from "../../styles";

interface IProps {
    pathname: string;
}
const Layout: React.SFC<IProps> = ({ pathname }) => {
    return (
        <div
            style={{
                backgroundColor: Colors.GREEN,
                height: "100%",
                minWidth: "250px",
                overflow: "scroll",
                width: "20%",
                paddingBottom: "60px",
                boxSizing: "border-box",
            }}
        >
            <Logo />
            <NavItems pathname={pathname} />
            <Direction />
            <Image pathname={pathname} />
        </div>
    );
};

export default Layout;
