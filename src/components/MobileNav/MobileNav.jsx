import "./mobileNav.css";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import SideNavigation from "../Navigation/Navigation";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <SideNavigation />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div className="box">
        <div className="div">
          <div className="segment-wrapper">
            <img
              src="https://generation-sessions.s3.amazonaws.com/558c6794f9450f0f95f306d7e92ad052/img/segment-1.svg"
              className={`segment segment-instance`}
              alt="Segment"
              onClick={onOpen}
            />
          </div>
          <div className="text-wrapper__009 ">Assessment</div>
        </div>
      </div>

      <div className="mobile-nav">
        <div className="text-wrapper__009 ">My Assessment</div>
        <div className="nav-item">
          <div className="icon-wrapper">
            <img
              className="search-icon"
              alt="Search"
              src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/search-1.svg"
            />
          </div>
          <div className="icon-wrapper">
            <img
              className="filter-icon"
              alt="Filter list alt"
              src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/filter-list-alt.svg"
            />
          </div>
          <img
            className="chart-icon"
            alt="Bar chart"
            src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/bar-chart.svg"
          />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
