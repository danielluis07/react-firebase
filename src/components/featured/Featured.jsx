import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Lucros totais</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Número de vendas hoje</p>
        <p className="amount">R$420</p>
        <p className="desc">Transações anterirores estão em processamento</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Objetivo</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">R$12.400</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Semana Passada</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">R$12.400</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Mês Passado</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">R$12.400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
