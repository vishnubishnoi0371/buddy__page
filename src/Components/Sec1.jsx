import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gif from "../Assets/Image/pic-chng.gif";
import Sectwoteddyone from "../Assets/Image/sec-2-tedy-1.png";
import Sectwoteddytwo from "../Assets/Image/sec-2-tedy-2.png";
import Sectwoteddythree from "../Assets/Image/sec-2-tedy-3.png";
import Sectwoteddyfour from "../Assets/Image/sec-2-tedy-4.png";
import Sectwoteddyfive from "../Assets/Image/sec-2-tedy-5.png";
import Sectwoteddysix from "../Assets/Image/sec-2-tedy-6.png";

const cards = [
  {
    img: Sectwoteddyone,
    heading: "Art Collection",
    para: "Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.",
  },
  {
    img: Sectwoteddytwo,
    heading: "SPECIAL BULLIES",
    para: "20 Buddybullies {out of 10k} will have a very special<b class=fw-medium> and ersonalized resembling</b> of famous people who are into NFTs {those will be available after the minting}.",
  },
  {
    img: Sectwoteddythree,
    heading: "BREEDING",
    para: "Our<b class=fw-medium> BuddyBullies</b> will not come alone, as we will announce the<b class=fw-medium> breeding function</b> after the minting and you will be able to get<b class=fw-medium> a PuppyBully</b> { for free}.",
  },
  {
    img: Sectwoteddyfour,
    heading: "DIGITALMARKETS",
    para: "<b class=fw-medium>Communicate with all the digital markets</b> available in the<b class=fw-medium> Solana NFT</b> world  for getting our collection<b class=fw-medium> successfully listed.</b>",
  },
  {
    img: Sectwoteddyfive,
    heading: "MERCH",
    para: "The team is<b class=fw-medium> working on the future</b> merch thet will be available for the community members directly on our webpage.",
  },
  {
    img: Sectwoteddysix,
    heading: "CHARITY",
    para: "We will be giving<b class=fw-medium> 30% of the royalties to charity</b> permanently  and we will keep spending on marketing, promotions and partnership.<b class=fw-medium>50% of the riyalties </b> will go back to the <b class=fw-medium>community as</b> rewards.",
  },
];

const Sec1 = () => {
  const SecOneCard = cards.map((e) => {
    return (
      <Col lg={4} md={6} sm={12} className="mb-4">
        <div className="sec-1-card-1 ">
          <img className="" src={e.img} alt="#" />
          <p className="fs-30 fw-semibold ff-pop white py-sm-3 py-2 mb-0 ">
            {e.heading}
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: e.para }}
            className="fs-16 fw-normal ff-pop gray mb-0  space-sm"
          ></p>
        </div>
      </Col>
    );
  });
  return (
    <div>
      <div
        id="Minting"
        className="bg-color overflow-hidden position-relative mt_2"
      >
        <Container>
          <Row className="d-flex align-items-center justify-content-center pb-lg-5 mb-5">
            <div className="col-md-6 col-sm-12 col-12">
              <img className="mt-50 w-100" src={gif} alt="#" />
            </div>
            <div md={6} sm={12} className="ps-lg-5 ps-sm-5 ps-sm-0">
              <div className="d-flex flex-column ps-lg-5 ps-sm-5 ps-md-0  justify-content-center">
                <p className="fs-50 fw-semibold ff-pop white sec-1-head-1 pb-lg-5 pb-3 ps-lg-5 ps-5 ps-md-0 mb-0">
                  Mint Your Bat
                </p>
                <p className="fs-30 fw-medium ff-pop white mt-50 ps-lg-5 ps-5 ps-md-0 mb-0">
                  Minting: 1,5 SOL
                </p>
                <p className="fs-16 fw-normal ff-pop gray line_through ps-lg-5 ps-5 ps-md-0 mb-0">
                  Before 2 SOL
                </p>
                <p className="fs-30 fw-medium ff-pop white ps-lg-5 ps-5 ps-md-0 pt-3 mb-0">
                  Whitelist: 0,88 SOL
                </p>
                <p className="fs-16 fw-normal ff-pop gray line_through ps-lg-5 ps-5 ps-md-0  mb-0">
                  Before 2 SOL
                </p>
                <div className="ps-lg-5 ps-5 ps-md-0">
                  <button className="fs-16 fw-medium ff-pop sec-1-btn  mt-lg-5 mt-3 mb-lg-5 mb-3">
                    Coming soon
                  </button>
                </div>
                <div className=" d-flex gap-3 ps-lg-5 ps-5 ps-md-0 pt-sm-4">
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                    className="app-icon"
                  >
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.1287 10.85C13.1663 10.85 10.7488 13.2675 10.7488 16.2299C10.7488 19.1922 13.1663 21.6097 16.1287 21.6097C19.091 21.6097 21.5085 19.1922 21.5085 16.2299C21.5085 13.2675 19.091 10.85 16.1287 10.85ZM32.2642 16.2299C32.2642 14.0021 32.2844 11.7944 32.1593 9.57063C32.0342 6.98766 31.4449 4.69526 29.5561 2.80646C27.6633 0.913621 25.3749 0.328415 22.7919 0.203302C20.5641 0.0781888 18.3565 0.0983684 16.1327 0.0983684C13.9049 0.0983684 11.6972 0.0781888 9.47347 0.203302C6.89049 0.328415 4.59809 0.917657 2.70929 2.80646C0.816453 4.6993 0.231247 6.98766 0.106134 9.57063C-0.0189791 11.7985 0.00120046 14.0061 0.00120046 16.2299C0.00120046 18.4537 -0.0189791 20.6653 0.106134 22.8891C0.231247 25.4721 0.820489 27.7645 2.70929 29.6533C4.60213 31.5461 6.89049 32.1313 9.47347 32.2565C11.7013 32.3816 13.9089 32.3614 16.1327 32.3614C18.3605 32.3614 20.5682 32.3816 22.7919 32.2565C25.3749 32.1313 27.6673 31.5421 29.5561 29.6533C31.449 27.7605 32.0342 25.4721 32.1593 22.8891C32.2884 20.6653 32.2642 18.4577 32.2642 16.2299ZM16.1287 24.5075C11.5479 24.5075 7.85103 20.8106 7.85103 16.2299C7.85103 11.6491 11.5479 7.95224 16.1287 7.95224C20.7094 7.95224 24.4063 11.6491 24.4063 16.2299C24.4063 20.8106 20.7094 24.5075 16.1287 24.5075ZM24.7453 9.54642C23.6758 9.54642 22.8121 8.68274 22.8121 7.61322C22.8121 6.54371 23.6758 5.68002 24.7453 5.68002C25.8148 5.68002 26.6785 6.54371 26.6785 7.61322C26.6788 7.86718 26.6291 8.11871 26.532 8.3534C26.435 8.58809 26.2926 8.80133 26.113 8.98091C25.9334 9.16049 25.7202 9.30287 25.4855 9.39991C25.2508 9.49695 24.9993 9.54674 24.7453 9.54642Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/i/flow/login"
                    target="_blank"
                    className="app-icon"
                  >
                    <svg
                      width="36"
                      height="29"
                      viewBox="0 0 36 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.1576 3.80033C33.895 4.35982 32.5386 4.73785 31.1126 4.90872C32.5839 4.02835 33.6847 2.64275 34.2095 1.01046C32.8272 1.83153 31.3143 2.40947 29.7366 2.71916C28.6757 1.58637 27.2704 0.835544 25.739 0.583242C24.2077 0.330941 22.6358 0.591283 21.2675 1.32385C19.8993 2.05642 18.8112 3.22022 18.1721 4.63458C17.533 6.04893 17.3788 7.6347 17.7333 9.1457C14.9324 9.00506 12.1924 8.27705 9.69099 7.00892C7.18963 5.74078 4.98286 3.96086 3.21391 1.78467C2.60906 2.82803 2.26127 4.03773 2.26127 5.32607C2.2606 6.48586 2.54621 7.62789 3.09276 8.65083C3.63931 9.67376 4.42991 10.546 5.3944 11.1901C4.27584 11.1545 3.18197 10.8523 2.20381 10.3085V10.3992C2.2037 12.0259 2.76637 13.6025 3.79636 14.8615C4.82634 16.1206 6.2602 16.9845 7.85463 17.3066C6.81698 17.5875 5.72909 17.6288 4.67312 17.4276C5.12297 18.8273 5.99924 20.0512 7.17926 20.9281C8.35928 21.805 9.78398 22.2909 11.2539 22.3178C8.75863 24.2767 5.677 25.3392 2.50473 25.3345C1.94279 25.3347 1.38133 25.3019 0.823242 25.2362C4.04328 27.3066 7.79163 28.4054 11.6198 28.4011C24.5787 28.4011 31.6631 17.668 31.6631 8.35939C31.6631 8.05697 31.6555 7.75152 31.6419 7.44909C33.0199 6.45256 34.2093 5.21855 35.1546 3.80487L35.1576 3.80033Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login"
                    target="_blank"
                    className="app-icon"
                  >
                    <svg
                      width="33"
                      height="25"
                      viewBox="0 0 33 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.9418 2.1348C25.8406 1.1872 23.5884 0.486792 21.2331 0.0885242C21.2121 0.0844975 21.1904 0.0870925 21.171 0.0959503C21.1515 0.104808 21.1353 0.119491 21.1246 0.137964C20.8362 0.644726 20.5148 1.3053 20.2896 1.82717C17.7916 1.45395 15.2521 1.45395 12.7541 1.82717C12.5032 1.2488 12.2203 0.684861 11.9067 0.137964C11.8961 0.119263 11.88 0.104249 11.8606 0.0949242C11.8413 0.0855997 11.8195 0.0824088 11.7983 0.0857774C9.44435 0.484046 7.19207 1.18445 5.08949 2.13343C5.0714 2.14101 5.05607 2.15395 5.04554 2.17051C0.771712 8.45353 -0.399746 14.5814 0.175683 20.6323C0.177284 20.6471 0.181884 20.6615 0.189204 20.6744C0.196523 20.6874 0.206407 20.6988 0.218257 20.7078C2.71278 22.524 5.49509 23.9075 8.44868 24.8004C8.46927 24.8067 8.49129 24.8067 8.51187 24.8003C8.53245 24.794 8.55063 24.7815 8.56404 24.7647C9.19852 23.9132 9.76433 23.0137 10.2478 22.0688C10.2766 22.0139 10.2491 21.948 10.1914 21.926C9.30427 21.5919 8.44467 21.1887 7.62055 20.7202C7.60574 20.7117 7.59327 20.6997 7.58424 20.6853C7.57521 20.6708 7.56991 20.6543 7.56882 20.6373C7.56773 20.6203 7.57089 20.6033 7.578 20.5878C7.58511 20.5723 7.59596 20.5588 7.60957 20.5485C7.78261 20.4208 7.95565 20.2876 8.12045 20.1544C8.13528 20.1424 8.15315 20.1348 8.17206 20.1323C8.19098 20.1299 8.21019 20.1328 8.22757 20.1406C13.6207 22.5632 19.4615 22.5632 24.7914 20.1406C24.8088 20.1323 24.8282 20.1291 24.8474 20.1313C24.8666 20.1334 24.8848 20.141 24.8999 20.153C25.0647 20.2876 25.2364 20.4208 25.4108 20.5485C25.4245 20.5586 25.4356 20.5719 25.4429 20.5873C25.4502 20.6026 25.4536 20.6196 25.4528 20.6366C25.452 20.6536 25.447 20.6701 25.4382 20.6847C25.4294 20.6993 25.4172 20.7115 25.4025 20.7202C24.5813 21.1926 23.7271 21.5923 22.8303 21.9246C22.8165 21.9296 22.804 21.9375 22.7935 21.9477C22.783 21.958 22.7748 21.9703 22.7695 21.984C22.7642 21.9976 22.7618 22.0122 22.7626 22.0269C22.7633 22.0415 22.7672 22.0558 22.774 22.0688C23.2684 23.0123 23.8342 23.9105 24.4563 24.7633C24.4692 24.7808 24.4873 24.7939 24.5079 24.8008C24.5286 24.8076 24.5508 24.808 24.5717 24.8018C27.5303 23.9113 30.3172 22.5272 32.8145 20.7078C32.8266 20.6993 32.8369 20.6883 32.8444 20.6755C32.852 20.6627 32.8568 20.6484 32.8584 20.6337C33.5451 13.6379 31.7075 7.55949 27.9844 2.17325C27.9753 2.15575 27.9602 2.1421 27.9418 2.1348ZM11.0539 16.9476C9.43061 16.9476 8.09161 15.4795 8.09161 13.6791C8.09161 11.8773 9.40452 10.4105 11.0539 10.4105C12.7156 10.4105 14.0423 11.8896 14.0162 13.6791C14.0162 15.4809 12.7033 16.9476 11.0539 16.9476ZM22.0063 16.9476C20.3816 16.9476 19.044 15.4795 19.044 13.6791C19.044 11.8773 20.3555 10.4105 22.0063 10.4105C23.668 10.4105 24.9947 11.8896 24.9686 13.6791C24.9686 15.4809 23.6694 16.9476 22.0063 16.9476Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Row>
          <Row className=" PT-5">{SecOneCard}</Row>
        </Container>
        <span className="sec-1-sh-1 position-absolute"></span>
        <span className="sec-1-sh-2 position-absolute"></span>
      </div>
    </div>
  );
};

export default Sec1;
