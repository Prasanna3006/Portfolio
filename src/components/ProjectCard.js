import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ textAlign: "center", padding: "20px" }}>
        <img src={imgUrl} alt={title} style={{ width: "100%", borderRadius: "10px" }} />
        <div className="proj-txtx" style={{ marginTop: "15px" }}>
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => {
                if (link) {
                  window.open(link, "_blank");
                } else {
                  console.log("No link provided");
                }
              }}
              style={{
                background:" #200122",  /* fallback for old browsers */
                background: "-webkit-linear-gradient(to right, #6f0000, #200122)",  /* Chrome 10-25, Safari 5.1-6 */
                background: "linear-gradient(to right, #6f0000, #200122)",/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "30px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
              }}
            >
              View Website <ArrowRightCircle size={25} />
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};
