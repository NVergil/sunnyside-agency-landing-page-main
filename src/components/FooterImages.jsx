/* eslint-disable react/prop-types */
import MobileFooterImages from "./MobileFooterImages";

const FooterImages = ({ menu }) => {
  return (
    <section className="footer-images">
      {!menu ? (
        <>
          <picture>
            <img
              src="/desktop/image-gallery-milkbottles.jpg"
              alt="milkbottles"
            />
          </picture>
          <picture>
            <img src="/desktop/image-gallery-orange.jpg" alt="orange" />
          </picture>
          <picture>
            <img src="/desktop/image-gallery-cone.jpg" alt="cone" />
          </picture>
          <picture>
            <img src="/desktop/image-gallery-sugarcubes.jpg" alt="sugarcubes" />
          </picture>
        </>
      ) : (
        <MobileFooterImages />
      )}
    </section>
  );
};

export default FooterImages;
