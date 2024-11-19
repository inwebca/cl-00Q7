import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import supabase from "../../supabaseClient"

dotenv.config();

const router: Router = express.Router();

//GET /users/all - All users
router.get("/all", async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
