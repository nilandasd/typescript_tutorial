import express from "express";
import controller from "../controllers/loginController";

const router = express.Router();

router.get('/', loginController.new);
router.post('/', loginController.create);
router.delete('/', loginController.delete);

export default router;
