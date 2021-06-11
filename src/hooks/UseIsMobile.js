import { useEffect, useState } from "react";

import { breakPoint } from "../styles/_variables";
import { useMediaQuery } from "react-responsive";

const { laptop } = breakPoint;

const UseIsMobile = () => {
    const isMobile = useMediaQuery({ maxDeviceWidth: laptop - 1 });
    const [mobile, setMobile] = useState(true);

    useEffect(() => {
        setMobile(isMobile);
    }, [isMobile]);

    return mobile;
};

export default UseIsMobile;
