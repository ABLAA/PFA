import React from "react";
import { Link } from "react-router-dom";
import Bmw from "./ModelComponent";
import {
  Badge,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const carModels = [
      {
        id: 1,
        name: "AudiA8",
        arrivage: "new",
        src: "assets/images/AudiA8.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },

      {
        id: 2,
        name: "AudiA3",
        src: "assets/images/AudiA3.jpg",
        price: "200000 €",
        arrivage: "",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 3,
        name: "AudiA5",
        arrivage: "",
        src: "assets/images/AudiA5.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 4,
        name: "AudiA7",
        arrivage: "",
        price: "200000 €",
        src: "assets/images/AudiA7.jpg",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 5,
        name: "AudiA6",
        src: "assets/images/AudiA6.jpg",
        price: "200000 €",
        arrivage: "",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 6,
        name: "AudiQ8",
        arrivage: "new",
        src: "assets/images/AudiQ8.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 7,
        name: "AudiQ2",
        src: "assets/images/AudiQ2.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 8,
        name: "AudiQ3",
        src: "assets/images/AudiQ3.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 9,
        name: "AudiQ5",
        src: "assets/images/AudiQ5.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 10,
        name: "AudiQ7",
        src: "assets/images/AudiQ7.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 11,
        name: "AudiTT",
        arrivage: "new",
        src: "assets/images/AudiTT.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      },
      {
        id: 12,
        name: "AudiEtron",
        arrivage: "",
        src: "assets/images/AudiEtron.jpg",
        price: "200000 €",
        detail:
          "4.19 meters long. 1205 kg weight. 2.60 meter wheelbase. A superior Cd value of 0.30"
      }
    ];
    const allmodels = carModels.map(model => {
      return (
        <div style={{ backgroundColor: "#999" }} className=" col-4 py-3 md-8">
          <Card key={model.id} style={{ backgroundColor: "#555" }}>
            <CardImg top width="100%" src={model.src} alt="Card image cap" />
            <CardBody>
              <h2>
                {model.name} <Badge color="warning">{model.arrivage}</Badge>
              </h2>
              <CardTitle />
              <CardSubtitle>
                <h3>
                  <Badge color="secondary">{model.price}</Badge>
                </h3>
              </CardSubtitle>
              <CardText>{model.detail}</CardText>
              <Link to={"/signup"}>
                <Button color="info">BUY NOW </Button>{" "}
              </Link>
              <Button color="secondary" onClick={this.toggle}>
                show more
              </Button>
              <Modal
                size="lg"
                key={model.id}
                isOpen={this.state.modal}
                toggle={this.toggle}
              >
                <ModalHeader toggle={this.toggle}>
                  <img
                    key={model.id}
                    height="500"
                    width="750"
                    src={model.src}
                  />
                </ModalHeader>
                <ModalBody>
                  <h3>Sporty Efficiency :</h3> Driving dynamics and efficiency
                  are not mutually exclusive for the Audi Q2. The new SUV comes
                  with six engines – three petrol and three diesel. Depending on
                  the engine there is a six gear manual gearbox or an S tronic
                  dual-clutch with seven gears. And four of the units are
                  available with permanent four wheel drive.
                  <h3>An urban guy : </h3>. At the front sits the
                  high-positioned, single-frame grille with an octagon-design
                  symbol. Especially striking: the gently-sloping coupé-like
                  roof flows into a C-pillar with a colour-contrasting blade.
                  The Audi Q2 stands self-confidently on the road – the low roof
                  and the high window line are reminiscent of a coupé and make
                  the lifestyle sports car look impressive.
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div style={{ backgroundColor: "#222" }}>
        <center>
          <img height="200" width="400" src="assets/images/audi.png" />
        </center>
        <div className="col-12 col-sm-10 offset-1">
          <div className="row">{allmodels}</div>
        </div>
      </div>
    );
  }
}
export default Model;
