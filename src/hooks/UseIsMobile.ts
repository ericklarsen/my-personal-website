import { useEffect, useState } from "react";

import { breakPoint } from "../styles/_variables";
import { useMediaQuery } from "react-responsive";

const { tablet } = breakPoint;

const UseIsMobile = () => {
  const isMobile = useMediaQuery<boolean>({ maxDeviceWidth: tablet - 1 });
  const [mobile, setMobile] = useState<boolean>(true);

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  return mobile;
};

export default UseIsMobile;
