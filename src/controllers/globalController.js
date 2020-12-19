import Pen from "../models/Pen";

const homeController = (req, res) => {
    res.render("screens/home");
};

const PenController = async (req, res) => {
    const PenList = await Pen.find({}, {});

    console.log(PenList);

    res.render("screens/Pen", { PenList });
};

const globalController = {
    homeController,
    PenController,
};

export default globalController;